import "./online.css";

const Online = ({ user }) => {
  const { username, profilePicture } = user;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileContainer">
        <img src={profilePicture} alt="friend1" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarFriendName">{username}</span>
    </li>
  );
};

export default Online;
