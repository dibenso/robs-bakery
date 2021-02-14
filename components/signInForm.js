import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { SignInSchema } from "../validations";

const styles = {
  container: { textAlign: "center" },
  errorText: { color: "red", fontWeight: "bold" },
  form: { border: "1px solid black", borderRadius: "20px", padding: "20px" }
};

export default function SignInForm({ adminSignIn, error }) {
  return (
    <div style={styles.container}>
      <h1>Admin Sign In</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          adminSignIn({ variables: values });
          resetForm();
          setSubmitting(false);
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <div>
            {!isSubmitting && (
              <div>
                {error && error.graphQLErrors && error.graphQLErrors[0].extensions.code === "UNAUTHENTICATED" ? (
                  <p style={styles.errorText}>Incorrect Username Or Password</p>
                ) : (
                  <div>{error && <p style={styles.errorText}>Network Error</p>}</div>
                )}
              </div>
            )}
            {isSubmitting ? (
              <div>
                <Loader type="Puff" color="white" height={100} width={100} />
                <h2>Signing In...</h2>
              </div>
            ) : (
              <div>
                <Form noValidate onSubmit={handleSubmit} style={styles.form}>
                  <Form.Group controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      value={values.username}
                      onBlur={handleBlur("username")}
                      onChange={handleChange("username")}
                      style={{ borderColor: errors.username && touched.username && "red" }}
                    />
                    <p style={styles.errorText}>{errors.username && touched.username && errors.username}</p>
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      value={values.password}
                      onBlur={handleBlur("password")}
                      onChange={handleChange("password")}
                      style={{ borderColor: errors.password && touched.password && "red" }}
                    />
                    <p style={styles.errorText}>{errors.password && touched.password && errors.password}</p>
                  </Form.Group>
                  <Button variant="primary" type="submit" disabled={isSubmitting || Object.keys(errors).length > 0}>
                    Submit
                  </Button>
                </Form>
              </div>
            )}
          </div>
        )}
      </Formik>
    </div>
  );
}
