import { useState, useEffect } from "react";
import axios from "axios";
import { prefix } from "../../apiconfig";
import "./conversation.css";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    console.log("friend", friendId);
    const getUser = async () => {
      try {
        const res = await axios(prefix + "users?userId=" + friendId);
        setUser(res.data);
        console.log("user", res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  // console.log("user", user);
  return (
    <div className="conversation">
      <img
        src={
          user.profilePicture
            ? PF + user.profilePicture
            : PF + "person/user.png"
        }
        className="conversationImg"
        alt="userImage"
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
};

export default Conversation;
