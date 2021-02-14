import { useMutation, gql } from "@apollo/client";
import LocalForage from "localforage";
import Head from "next/head";
import Loader from "react-loader-spinner";
import Layout from "../components/layout";
import Dashboard from "../components/dashboard";
import SignInForm from "../components/signInForm";

const styles = {
  container: { textAlign: "center" }
};

const ADMIN_SIGN_IN = gql`
  mutation AdminSignIn($username: String!, $password: String!) {
    adminSignIn(username: $username, password: $password) {
      id
      username
      admin
      super
      token
    }
  }
`;

const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      id
      username
      admin
      super
      token
    }
  }
`;

const refresh = async (data, token, mutation) => {
  if (!data && token) {
    try {
      return await mutation();
    } catch (err) {
      return err;
    }
  }

  return false;
};

export default function Admin() {
  const [adminSignIn, { data: adminData, error: adminError }] = useMutation(ADMIN_SIGN_IN);
  const [refreshToken, { data, loading }] = useMutation(REFRESH_TOKEN);
  const token = async () => LocalForage.getItem("token");

  refresh(data, token, refreshToken);
  if (adminData) LocalForage.setItem("token", adminData.adminSignIn.token);

  return (
    <Layout>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={styles.container}>
        {loading ? (
          <div>
            <Loader type="Puff" color="white" height={100} width={100} />
            <h2>Signing In...</h2>
          </div>
        ) : (
          <div>
            {data || adminData ? (
              <Dashboard admin={data ? data.refreshToken : adminData.adminSignIn} />
            ) : (
              <SignInForm adminSignIn={adminSignIn} error={adminError} />
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
