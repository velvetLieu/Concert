/*App.js*/
import React from "react";
import "./App.css";
import "./styles/root.css";

//Import all needed Component for this tutorial
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Pages
import MainPage from "./pages/index";
import GroupDash from "./pages/group-dash";
import NotFound from "./pages/not-found";
import UserAccount from "./pages/account";

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
        <Route exact path="/account">
          <UserAccount />
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
