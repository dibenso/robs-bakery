import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Formik } from "formik";
import { Form, Button, Alert } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { ContactSchema } from "../validations";

const styles = {
  errorText: { color: "red", fontWeight: "bold" },
  form: { border: "1px solid black", borderRadius: "20px", padding: "20px" }
};

const CREATE_CONTACT = gql`
  mutation CreateContact($name: String!, $email: String!, $phone: String!, $comment: String!) {
    createContact(name: $name, email: $email, phone: $phone, comment: $comment) {
      id
      name
      email
      phone
      comment
    }
  }
`;

export default function ContactForm() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [createContact, { error }] = useMutation(CREATE_CONTACT);
  const handleSuccess = () => setSuccess(true);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Formik
      initialValues={{ email: "", phone: "", name: "", comment: "" }}
      validationSchema={ContactSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await createContact({ variables: values });
        resetForm();
        setSubmitting(false);
        if (!error) {
          handleSuccess();
          handleShow();
        }
      }}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <div>
          {isSubmitting ? (
            <div>
              <Loader type="Puff" color="white" height={100} width={100} />
              <h2>Submitting Your Information...</h2>
            </div>
          ) : (
            <div>
              {success ? (
                <div>
                  {show && (
                    <Alert variant="success" onClose={handleClose} dismissible>
                      <Alert.Heading>Information Sent</Alert.Heading>
                      <h2 style={{ paddingTop: "50px" }}>You Have Successfully Submitted Your Information</h2>
                      <hr />
                      <div className="d-flex justify-content-end">
                        <Button onClick={handleClose} variant="outline-success">
                          Close
                        </Button>
                      </div>
                    </Alert>
                  )}
                </div>
              ) : (
                <Form noValidate onSubmit={handleSubmit} style={styles.form}>
                  <Form.Group controlId="formGroupName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      value={values.name}
                      onBlur={handleBlur("name")}
                      onChange={handleChange("name")}
                      style={{ borderColor: errors.name && touched.name && "red" }}
                    />
                    <p style={styles.errorText}>{errors.name && touched.name && errors.name}</p>
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email Address"
                      value={values.email}
                      onBlur={handleBlur("email")}
                      onChange={handleChange("email")}
                      style={{ borderColor: errors.email && touched.email && "red" }}
                    />
                    <p style={styles.errorText}>{errors.email && touched.email && errors.email}</p>
                  </Form.Group>
                  <Form.Group controlId="formGroupPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Phone Number"
                      value={values.phone}
                      onBlur={handleBlur("phone")}
                      onChange={handleChange("phone")}
                      style={{ borderColor: errors.phone && touched.phone && "red" }}
                    />
                    <p style={styles.errorText}>{errors.phone && touched.phone && errors.phone}</p>
                  </Form.Group>
                  <Form.Group controlId="formGroupComment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder="Enter A Comment"
                      value={values.comment}
                      onBlur={handleBlur("comment")}
                      onChange={handleChange("comment")}
                      style={{ borderColor: errors.comment && touched.comment && "red" }}
                    />
                    <p style={styles.errorText}>{errors.comment && touched.comment && errors.comment}</p>
                  </Form.Group>
                  <Button variant="primary" type="submit" disabled={isSubmitting || Object.keys(errors).length > 0}>
                    Submit
                  </Button>
                </Form>
              )}
            </div>
          )}
        </div>
      )}
    </Formik>
  );
}
