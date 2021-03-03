import "./../styles/sidebar.css";
import "./../styles/root.css";
import Channels from "./../components/channels";
import Meetings from "./../components/meetings";
import Members from "./../components/members";

function ChatSideBar () {
  return (
    <>
    {/*<!-- Sidebar -->*/}
    <div className="chat-sidebar">
      <Members/>
      <Channels/>
      <Meetings/>
    </div>
    </>
  );
}

export default ChatSideBar;
