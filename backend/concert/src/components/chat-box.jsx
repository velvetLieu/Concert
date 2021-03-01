import "./../styles/group-dash.css";
import "./../styles/root.css";
import MessageInputBar from "./message-input-bar";
import MessageList from "./message-list";
import ChatBoxHeader from "./chat-box-header";


function ChatBox () {
  return (
    <>
    {/*<!-- Chat Message List Area -->*/}
    <div className="chat-form-message-area">
      {/*<!-- Message List Display Box -->*/}
      <ChatBoxHeader />
      {/*<!-- Messages -->*/}
      <MessageList />
      {/*<!-- User Input Message Bar -->*/}
      <MessageInputBar />
    </div>
    </>
  );
}

export default ChatBox;
