import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ReactComponent as PlantPot } from "../images/PlantPot.svg";

const phrase = `
Please enter in the Email address you used to create
your account below, and we will send you 
instructions to reset your password
`;

const ForgotPass = ({ children }) => {
  return (
    <>
      <Row>
        <Col>
          <div className="forgotTitle">
            <h1>No Worries</h1>
            <p>{phrase}</p>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
        <Col>
          <PlantPot className="login-svg" />
          {children}
        </Col>
      </Row>
    </>
  );
};

export default ForgotPass;
