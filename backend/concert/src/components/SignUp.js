import React, { useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ReactComponent as Chalkboard } from "../images/createChalkboard.svg";

//import axios
import axios from "axios";

const collegeNames = [
  "Mike Curb College of Arts, Media, & Communication",
  "David Nazarian College of Business and Economics",
  "Michael D. Eisner College of Education",
  "Engineering & Computer Science",
  "Health & Human Development",
  "Humanities",
  "Oviatt Library",
  "Science & Mathematics",
  "Social & Behavioral Sciences",
  "The Tseng College",
];
//holds state

const SignUp = ({ children }) => {
  //each of these fields gets parsed into our server
  const email_addr = useRef();
  const college_select = useRef();
  const password_sign_up = useRef();
  const username = useRef();
  const f_name = useRef();
  const l_name = useRef();

  const submit = (e) => {
    e.preventDefault();
    axios.post("/SignUp", {
      email: email_addr.current.value,
      college: college_select.current.value,
      f_name:f_name.current.value,
      l_name:l_name.current.value,
      username: username.current.value,
      password: password_sign_up.current.value
    })
    email_addr.current.value ="";
  };
  return (
    <>
      <Row>
        <Col>
          <Chalkboard className="login-svg" />
        </Col>
        <Col>
          <Form onSubmit={submit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control ref={f_name} type="text" placeholder="" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control ref= {l_name} type="text" placeholder="" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control ref={email_addr} type="email" placeholder="" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Username</Form.Label>
              <Form.Control ref ={username} placeholder="" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={password_sign_up} type="password" placeholder="" />
            </Form.Group>

            <Form.Row className="align-items-center">
              <Col xs="auto" className="my-1">
                <Form.Label>Select College</Form.Label>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom
                  ref = {college_select}
                >
                  {collegeNames.map((college, i) => (
                    <option key={i} value={college}>{college}</option>
                  ))}
                </Form.Control>
              </Col>
              <Col xs="auto" className="my-1">
                <Form.Check
                  type="checkbox"
                  id="customControlAutosizing"
                  label="I am a Tutor"
                  custom
                />
              </Col>
            </Form.Row>
            <Row>
              <Col xs={{ offset: 8 }}>
                <Button className="ml-2" variant="primary" type="submit">
                  Create Account
                </Button>
              </Col>
            </Row>
          </Form>
          {children}
        </Col>
      </Row>
    </>
  );
};

export default SignUp;
