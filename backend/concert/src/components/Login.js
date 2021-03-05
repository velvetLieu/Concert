// Component imports
import React, {useState, setState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {ReactComponent as Lamp} from "../images/loginLamp.svg";
import {Link} from "react-router-dom";
import axios from "axios";


const Login = ({children}) => {
  // Create user object
  const [user, setUserState] = useState({
    email: '',
    password: ''
  });

  // Functions
  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
  };

  const updateField = e => {
    setUserState({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <Row>
      <Col>
    <Lamp className="login-svg"/>
  </Col>
  <Col>
    <Form onSubmit={handleSubmit}>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={user.email}
          onChange={updateField}
          />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={updateField}
          />
      </Form.Group>

      <Row>
        <Col>
          <ButtonToolbar className="justify-content-end" aria-label="Toolbar with Button groups">

            <Button variant="outline-primary" className="mr-2" href="/sign-up">
              Sign up
            </Button>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </ButtonToolbar>
        </Col>
      </Row>
    </Form>
    {children}
  </Col>
</Row>
</>);
};

export default Login;
