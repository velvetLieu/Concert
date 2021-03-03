import "./../styles/student-dash.css";
import "./../styles/root.css";
import TaskBar from "./../components/taskbar";
import ChatSideBar from "./../components/chat-sidebar";
import StudentDashMain from "./../components/student-dash-main";

function StudentDash() {
  return (
    <>
      <div className="chat-container-2">
          <TaskBar/>
          <StudentDashMain/>
          <ChatSideBar />
     </div>
    </>
  );
}

export default StudentDash;
