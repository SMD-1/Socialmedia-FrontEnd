import { format } from "timeago.js";
import "./message.css";

const Message = ({ message, own }) => {
  // console.log("from message", message);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src="./assets/person/user2.jpg"
          alt="user"
          className="messageImg"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
