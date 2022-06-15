import axios from "axios";
import { prefix } from "../../apiconfig";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MdCake } from "react-icons/md";
import { User } from "../../data";
import Online from "../online/Online";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import "./rightbar.css";
// import { saveAs } from "file-saver";

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [Followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );
  console.log("Followed", user ? user.username : " ");

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(
          prefix + "users/friends/" + currentUser._id
        );
        console.log("Friend List", friendList.data);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getFriends();
  }, [currentUser]);

  // const saveFile = () => {
  //   saveAs(
  //     "http://localhost:4000/images/person/sponsor.jpg",
  //     "example.jpg"
  //   );
  // };

  const clickHandler = async () => {
    try {
      if (Followed) {
        await axios.put(`${prefix}users/${currentUser._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: currentUser._id });
      } else {
        await axios.put(`${prefix}users/${currentUser._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: currentUser._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!Followed);
  };

  const HomeRightBar = () => {
    return (
      <>
        <div className="bithdayContainer">
          <MdCake className="rightbarIcon" size="2.5rem" />
          <span className="birthdayText">
            <b>Karan </b>and <b>1 other friends </b> have a birthday today
          </span>
        </div>
        <div className="sponsors">
          <img src={`${PF}person/sponsor.jpg`} alt="sponsor" />
          {/* <button onClick={saveFile} >Download</button> */}
        </div>
        <h3 className="rightbarTitle">Online Friends</h3>
        <ul className="rightbarFriendList">
          {User.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightBarFollowButton" onClick={clickHandler}>
            {Followed ? "Unfollow" : "Follow"}
            {Followed ? (
              <FaMinus style={{ marginLeft: "5px" }} />
            ) : (
              <FaPlus style={{ marginLeft: "5px" }} />
            )}
          </button>
        )}
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From: </span>
            <span className="rightBarInfoValue">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Department: </span>
            <span className="rightBarInfoValue">{user.department}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Semester: </span>
            <span className="rightBarInfoValue">{user.semester}</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          {friends.map((friend, index) => (
            <Link
              to={`/profile/${friend.username}`}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <div className="rightBarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/user.png"
                  }
                  alt="friend"
                  className="rightBarFollowingImg"
                />
                <span className="rigthBarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
