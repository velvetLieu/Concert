import "./../styles/tutor-dash.css";
import GroupIcon from "./group-icon";
import Icon from "./../images/emoji.jpg";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function CourseCard () {
  return (
    <>
    <style type="text/css">
      {`
      .card-course-card {
              border-radius: 200px 200px 200px 200px;
              color" #000000;
              background: rgba(0,0,0,0);
      }
      .card-course-card-hover {
              transform: scale(1.1);
      }
      `}
    </style>
    <Link to="">
      <Card style={{ margin: '1rem', width: '18rem'}}>
        <Card.Img variant="top" src= {Icon} />
        <Card.Body>
          <Card.Title> Course Title</Card.Title>
          <Card.Text>
            A brief description of the course would go here.
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
    </>
  )
}

export default CourseCard;
