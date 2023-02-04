import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Rightbar from "../../Components/rightbar/Rightbar";
import Feed from "../../Components/feed/Feed";
import "./profile.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { prefix } from "../../apiconfig";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const [user, setUser] = useState({});
  const username = useParams().username;
  const { logout } = useContext(AuthContext); // console.log(username.username);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${prefix}users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? `${prefix}images/${user.coverPicture}`
                    : `${prefix}images/post/post3.jpg`
                }
                alt="banner"
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? `${prefix}images/${user.profilePicture}`
                    : `${prefix}images/person/user.png`
                }
                alt="profileImage"
              />
              <button onClick={logout}> Logout</button>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="porfileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
