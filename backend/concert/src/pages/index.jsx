import HomepageCard from "../components/HomepageCard";
import { Link } from "react-router-dom";
import TaskBar from "../components/taskbar";


//Functional Component
const MainPage = ({children}) => {
  return (
    <div className="chat-container">
      <TaskBar />
      <HomepageCard
        children={
          <>
            {children}
            <Link className="mr-2" to="/dash">Group Dash</Link>
<<<<<<< HEAD:concert/src/pages/index.jsx
            <Link className="mr-2"to="/student">Student</Link>
            <Link className="mr-2"to="/Sign-up">Sign up</Link>
            <Link className="mr-2"to="/Forgot">Forgot Pass</Link>
            <Link className="mr-2"to="/">Login</Link>
            <Link className="mr-2"to="/faq">FAQPage</Link>
=======
            <Link className="mr-2" to="/tutor-dash">Tutor Dash</Link>
            <Link className="mr-2"to="/Sign-up">Sign up</Link>
            <Link className="mr-2"to="/Forgot">Forgot Pass</Link>
            <Link className="mr-2"to="/">Login</Link>
            <Link className="mr-2"to="/account">Account</Link>
>>>>>>> 687626b22bc5dd3aa7e82d7ddfb7bd65fb3d59bb:backend/concert/src/pages/index.jsx
          </>
        }
      />
    </div>
  );
};

export default MainPage;
