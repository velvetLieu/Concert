import "./../styles/root.css";
import "./../styles/student-dash.css";
import StudentHeader from "./../components/student-dash-header";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';


function StudentDashMain(){
    return (
        <Container className="dash-main">
            <StudentHeader/>
         </Container>
      );
}
    
export default StudentDashMain;