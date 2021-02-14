import { useQuery, gql } from "@apollo/client";
import { Table, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import dateFormat from "dateformat";

const styles = {
  container: { textAlign: "center" }
};

const CONTACTS = gql`
  query GetContacts {
    contacts {
      id
      name
      email
      phone
      comment
      date
    }
  }
`;

export default function Contacts() {
  const { data, loading, error } = useQuery(CONTACTS, { pollInterval: 1000 * 5 });
  return (
    <div style={styles.container}>
      {error ? (
        <h2>Error Occurred While Loading Contacts. Try Again</h2>
      ) : (
        <div>
          {loading ? (
            <h2>Loading Contacts...</h2>
          ) : (
            <div>
              {data.contacts.length === 0 ? (
                <h2>There Are No Cantacts Right Now</h2>
              ) : (
                <div>
                  <h2>Contacts</h2>
                  <Row className="justify-content-center">
                    <Col className="col-auto">
                      <Table variant="light" responsive striped bordered hover>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Comment</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.contacts.map(contact => (
                            <tr key={contact.id}>
                              <th>
                                {dateFormat(new Date(parseInt(contact.date, 10)), "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                              </th>
                              <th>{contact.name}</th>
                              <th>
                                <a href={`mailto:${contact.email}`}>
                                  <FaMailBulk />
                                  {` ${contact.email}`}
                                </a>
                              </th>
                              <th>
                                <a href={`tel:${contact.phone}`}>
                                  <FaPhoneAlt />
                                  {` ${contact.phone}`}
                                </a>
                              </th>
                              <th>{contact.comment}</th>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
