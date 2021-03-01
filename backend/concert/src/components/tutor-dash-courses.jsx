import "./../styles/tutor-dash.css";
import CourseCard from "./course-card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';

function TutorDashCourses () {
  return (
    <>
      {/*<!-- Show card for each added course -->*/}


      <Container className="tutor-dash-courses">
        {/* CardGroup implementation */}
        {/*}
        <CardGroup>
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </CardGroup>
        */}

        {/* Row + column implementation */}

        <Row>
          <Col>
            <CourseCard />
          </Col>
          <Col>
            <CourseCard />
          </Col>
          <Col>
            <CourseCard />
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default TutorDashCourses;
