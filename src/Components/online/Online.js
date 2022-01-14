import "./online.css";

const Online = ({ user }) => {
  const { username, profilePicture } = user;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileContainer">
        <img src={PF + profilePicture} alt="friend1" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarFriendName">{username}</span>
    </li>
  );
};

export default Online;
