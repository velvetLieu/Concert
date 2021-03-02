import React,{useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ReactComponent as Chalkboard } from "../images/createChalkboard.svg";

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


const submit = e => {
e.preventDefault();

};


const SignUp = ({ children }) => {
  const [value,setValue] = useState("");
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
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>

            <Form.Row className="align-items-center">
              <Col xs="auto" className="my-1">
                <Form.Label>Select College</Form.Label>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom
                >
                  {collegeNames.map((college, i) => (
                    <option value={i}>{college}</option>
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
              <Col  xs={{offset:8}}>
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
