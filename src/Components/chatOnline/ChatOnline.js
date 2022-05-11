import "./chatOnline.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { prefix } from "../../apiconfig";

const ChatOnline = ({ onlineUsers, currentUser, setCurrentChat }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(prefix + "users/friends/" + currentUser);
      setFriends(res.data);
    };
    getFriends();
  }, [currentUser]);
  // console.log(friends);
  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);
  // console.log("onlineUsers", onlineUsers);
  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `${prefix}conversations/find/${currentUser}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="chatOnline">
      {onlineFriends.map((online) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(online)}>
          <div className="chatOnlineImgContainer">
            <img
              src={
                online?.profilePicture
                  ? PF + online.profilePicture
                  : PF + "person/user.png"
              }
              alt="user"
              className="chatOnlineImg"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{online.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
