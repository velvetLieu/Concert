/*App.js*/
import React from "react";
import "./App.css";
import "./styles/root.css";

//Import all needed Component for this tutorial
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Pages
import MainPage from "./pages/index";
import GroupDash from "./pages/group-dash";
import TutorDash from "./pages/tutor-dash";
import NotFound from "./pages/not-found";
<<<<<<< HEAD:concert/src/App.js
import StudentDash from "./pages/student-dash";
import FAQPage from "./pages/faq-page";
=======
import UserAccount from "./pages/account";
>>>>>>> 687626b22bc5dd3aa7e82d7ddfb7bd65fb3d59bb:backend/concert/src/App.js

//imports modes for the main page to re-render
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPass from "./components/ForgotPass";
import DeleteGroup from "./components/DeleteGroup";

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
        <MainPage children={<Login />} />
        <DeleteGroup /> {/* Reroute this to group-icon.jsx */}
        </Route>
        <Route exact path="/Forgot">
        <MainPage children={<ForgotPass />} />
        </Route>
        <Route exact path="/Sign-up">
        <MainPage children={<SignUp />}/>
        </Route>
        <Route exact path="/dash">
        <GroupDash />
        </Route>
<<<<<<< HEAD:concert/src/App.js
        <Route exact path="/student">
        <StudentDash/>
        </Route>
        <Route exact path="/faq">
        <FAQPage/>
=======
        <Route exact path="/tutor-dash">
          <TutorDash />
        </Route>
        <Route exact path="/account">
          <UserAccount />
>>>>>>> 687626b22bc5dd3aa7e82d7ddfb7bd65fb3d59bb:backend/concert/src/App.js
        </Route>
        <Route exact path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
    </>
  );
};

export default App;
