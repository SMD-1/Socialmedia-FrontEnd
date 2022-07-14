import "./friend.css";
import { prefix } from "../../apiconfig";

const Friend = ({ user }) => {
  const { profilePicture, username } = user;
  return (
    <li className="sidebarFriend">
      <img src={`${prefix}images/${profilePicture}`} alt="Friend" />
      <span className="sidebarFriendName">{username}</span>
    </li>
  );
};

export default Friend;
