import "./../styles/sidebar.css";
import "./../styles/root.css";
import Channels from "./../components/channels";
import Meetings from "./../components/meetings";
import Members from "./../components/members";
import Button from "react-bootstrap/Button";
import { RiCloseLine } from "react-icons/ri";


function ResChatSideBar () {
  return (
    <>
    {/*<!-- Sidebar -->*/}
    <div className="res-chat-sidebar">
      <Members/>
      <Channels/>
      <Meetings/>
      <Button href="/">Leave Room</Button>
    </div>
    </>
  );
}

export default ResChatSideBar;
