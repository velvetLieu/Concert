import "./../styles/group-dash.css";
import "./../styles/root.css";
import Container from 'react-bootstrap/Container';
import MessageList from "./../components/message-list";
import MessageInputBar from "./../components/message-input-bar";

function ChatMessageForm () {
  return (
    <>
    <Container className="chat-form-message-area">
      {/*<!-- Message List Display Box -->*/}
      <MessageList />

      {/*<!-- User Input Message Bar -->*/}
      <MessageInputBar />
    </Container>
    </>
  );
}

export default ChatMessageForm;
