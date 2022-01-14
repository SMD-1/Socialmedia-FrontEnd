import "./friend.css";

const Friend = ({ user }) => {
  const { profilePicture, username } = user;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img src={PF + profilePicture} alt="Friend" />
      <span className="sidebarFriendName">{username}</span>
    </li>
  );
};

export default Friend;
