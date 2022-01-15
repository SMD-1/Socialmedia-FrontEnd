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
  const [messages, setMessages] = useState([]);
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
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
        console.log("messages", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);
  // console.log("conversations", conversations);
  console.log("currentChat", currentChat);
  // console.log("messages", messages);
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c) => {
              return (
                <div onClick={() => setCurrentChat(c)} key={c._id}>
                  <Conversation conversation={c} currentUser={user} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <Message
                      message={m}
                      own={m.sender === user._id}
                      key={m._id}
                    />
                  ))}
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
