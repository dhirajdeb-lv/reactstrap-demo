import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";
import { ChangeEvent, FormEvent, useState } from "react";

function Authenticate() {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidFormInput = e.currentTarget.checkValidity();
    if (isValidFormInput) {
      // TODO - API call
      setIsSent(true);
    }

    setValidated(true);
  };

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = e.target.value;

    setEmail(enteredEmail);
    setValidated(true);
  };

  const alertCloseHandler = () => {
    setEmail("");
    setIsSent(false);
    setValidated(false);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center h-max">
        <Col md="4">
          <Form
            noValidate
            validated={validated}
            className="border rounded p-3 shadow"
            onSubmit={handleSubmit}
          >
            <Form.Text className="fs-3 fw-bold">Login</Form.Text>
            {isSent ? (
              <Alert
                className="mt-3"
                variant="success"
                dismissible
                onClose={alertCloseHandler}
              >
                Login link sent to {email}
              </Alert>
            ) : (
              <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <FloatingLabel className="mt-3" label="Email address">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={handleEmailInput}
                      required
                    />
                  </FloatingLabel>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="d-grid d-md-flex justify-content-md-end">
                  <Button variant="primary mt-2" type="submit">
                    Send link
                  </Button>
                </Form.Group>
              </>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Authenticate;
