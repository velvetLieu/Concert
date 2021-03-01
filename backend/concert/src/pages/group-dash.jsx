import "./../styles/group-dash.css";
import "./../styles/root.css";
import TaskBar from "./../components/taskbar";
import ChatBox from "./../components/chat-box";
import ChatSideBar from "./../components/chat-sidebar";


function GroupDash () {
  return (
    <>
     <div className="chat-container-2">
          <TaskBar/>
          <ChatBox/>
          <ChatSideBar />
     </div>
    </>
  );
}

export default GroupDash;
