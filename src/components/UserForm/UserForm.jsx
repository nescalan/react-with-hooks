import React from "react";
import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

function UserForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let emailValid = false;
    let passwordValid = false;

    if (email.length === 0) {
      setEmailError("Email is required");
    } else if (email.length < 8) {
      setEmailError("Email should be minimum 8 characters");
    } else if (email.indexOf(" ") >= 0) {
      setEmailError("Email cannot contain spaces");
    } else {
      setEmailError("");
      emailValid = true;
    }

    if (password.length === 0) {
      setPasswordError("Password is required");
    } else if (password.length < 8) {
      setPasswordError("Password should be minimum 8 characters");
    } else if (password.indexOf(" ") >= 0) {
      setPasswordError("Password cannot contain spaces");
    } else {
      setPasswordError("");
      passwordValid = true;
    }
    if (emailValid && passwordValid) {
      alert(`Email: ${email} \nPassword: ${password}`);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      {emailError.length > 0 && <Alert variant="danger">{emailError}</Alert>}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      {passwordError.length > 0 && (
        <Alert variant="danger"> {passwordError} </Alert>
      )}

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export { UserForm };
