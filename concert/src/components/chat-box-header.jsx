import "./../styles/group-dash.css";
import "./../styles/root.css";
import { Link } from "react-router-dom";
import { BsCameraVideoFill } from "react-icons/bs";
import ResMenu from "./../components/responsive-menu"


function ChatBoxHeader () {
  return (
    <>
    <div className="dash-header">
    <ResMenu />

    <h2 id="room-name">COMP491 Concert</h2>
    <p>Welcome to #general</p>
    <Link to="#"><BsCameraVideoFill /></Link>
    </div>
    </>
  );
}

export default ChatBoxHeader;
