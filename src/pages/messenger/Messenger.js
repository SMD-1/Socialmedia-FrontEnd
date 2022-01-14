import axios from "axios";
import Topbar from "../../Components/topbar/Topbar";
import Conversation from "../../Components/conversations/Conversation";
import Message from "../../Components/message/Message";
import ChatOnline from "../../Components/chatOnline/ChatOnline";
import "./messenger.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        // console.log("res", res.data);
        setConversations(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getConversations();
  }, [user._id]);
  // console.log(user);
  console.log("conversations", conversations);
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c) => (
              <Conversation conversation={c} key={c._id} currentUser={user} />
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message />
                  <Message own={true} />
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    placeholder="Type your message here"
                    className="chatMessageInput"
                  ></textarea>
                  <button className="chatSubmitBtn">Send</button>
                </div>
              </>
            ) : (
              <h1
                style={{
                  marginTop: "1rem",
                  fontSize: "2rem",
                  textAlign: "center",
                  color: "grey",
                }}
              >
                Open a conversation to start a chat.
              </h1>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
