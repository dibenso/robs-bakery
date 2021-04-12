require("dotenv").config();
const fs = require("fs").promises;
const express = require("express");
const { ApolloServer, AuthenticationError, ForbiddenError, gql } = require("apollo-server-express");
const next = require("next");
const uuidv4 = require("uuid").v4;
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const hashPassword = password => new Promise(resolve => bcrypt.hash(password, 10, (err, hash) => resolve(hash)));
const CONTACTS_PATH = "server/data/contacts.json";
const ADMINS_PATH = "server/data/admins.json";
const typeDefs = gql`
  type Query {
    contacts: [Contact!]!
    admins: [Admin!]!
  }
  type Mutation {
    createContact(name: String!, email: String!, phone: String!, comment: String!): Contact!
    createAdmin(username: String!, password: String!): Admin!
    adminSignIn(username: String!, password: String!): Admin!
    refreshToken: Admin
  }
  type Contact {
    id: ID!
    name: String
    email: String
    phone: String
    comment: String
    date: String
  }
  type Admin {
    id: ID!
    username: String
    admin: Boolean
    super: Boolean
    token: String
  }
`;
const resolvers = {
  Query: {
    contacts: async (parent, args, { user }) => {
      if (!user.admin) throw new AuthenticationError("must authenticate");
      else return JSON.parse(await fs.readFile(CONTACTS_PATH, "utf8"));
    },
    admins: async (parent, args, { user }) => {
      if (!user.admin) throw new AuthenticationError("must authenticate");
      else return JSON.parse(await fs.readFile(ADMINS_PATH, "utf8"));
    }
  },
  Mutation: {
    createContact: async (parent, { name, email, phone, comment }) => {
      const contact = { id: uuidv4(), name, email, phone, comment };
      const contacts = JSON.parse(await fs.readFile(CONTACTS_PATH, "utf8"));

      contact.date = new Date().getTime();
      contacts.push(contact);
      await fs.writeFile(CONTACTS_PATH, JSON.stringify(contacts));

      return contact;
    },
    createAdmin: async (parent, { username, password }, { user }) => {
      if (!user.admin) throw new AuthenticationError("must authenticate");
      if (!user.super) throw new ForbiddenError("must be superuser");
      else {
        const hashedPassword = await hashPassword(password);
        const admin = { id: uuidv4(), admin: true, super: false, password: hashedPassword, username };
        const admins = JSON.parse(await fs.readFile(ADMINS_PATH, "utf8"));
        const token = jsonwebtoken.sign(
          { id: admin.id, admin: true, super: false, username },
          process.env.BAKERY_SECRET
        );

        admins.push(admin);
        await fs.writeFile(ADMINS_PATH, JSON.stringify(admins));

        return { id: admin.id, username: admin.username, admin: true, super: false, token };
      }
    },
    adminSignIn: async (parent, { username, password }) => {
      const admins = JSON.parse(await fs.readFile(ADMINS_PATH, "utf8"));
      const admin = admins.find(adm => adm.username === username);

      if (admin) {
        const passwordsMatch = await bcrypt.compare(password, admin.password);

        if (passwordsMatch) {
          const token = jsonwebtoken.sign(
            { id: admin.id, admin: true, super: false, username },
            process.env.BAKERY_SECRET
          );

          return { ...admin, token };
        }
      }

      throw new AuthenticationError("incorrect sign in credentials");
    },
    refreshToken: async (parent, args, { user }) => {
      if (user) {
        const admins = JSON.parse(await fs.readFile(ADMINS_PATH, "utf8"));
        const admin = admins.find(adm => adm.id === user.id);
        const token = jsonwebtoken.sign(
          { id: admin.id, admin: true, super: false, username: user.username },
          process.env.BAKERY_SECRET
        );

        return { ...admin, token };
      }

      throw new AuthenticationError("incorrect sign in credentials");
    }
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: request => {
    const header = request.req.headers.authorization;

    if (!header) return { user: null };

    const token = header.split(" ");

    if (!token) return { user: null };

    let decodedToken;

    try {
      decodedToken = jsonwebtoken.verify(token[1], process.env.BAKERY_SECRET);
    } catch (err) {
      return { user: null };
    }

    if (!decodedToken) return { user: null };

    return { user: decodedToken };
  }
});
const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const expressServer = express();

  server.applyMiddleware({ app: expressServer });
  expressServer.all("*", (req, res) => handle(req, res));
  expressServer.listen(port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready at http://localhost:${port}   `);
  });
});
