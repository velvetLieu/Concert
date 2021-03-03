import "./../styles/group-dash.css";
import "./../styles/root.css";
import Container from 'react-bootstrap/Container';
import { AiOutlineSend } from "react-icons/ai";

function MessageInputBar () {
  return (
    <>
    <Container className="chat-form-container">
      <form id="chat-form">
      {/*<!-- Send Button -->*/}
      <button className="send-btn"><AiOutlineSend /></button>
        {/*<!-- Message Input Area -->*/}
        <input id="msg" type="text" placeholder="Enter Message" required autocomplete="off"/>
      </form>
    </Container>
    </>
  );
}

export default MessageInputBar;
