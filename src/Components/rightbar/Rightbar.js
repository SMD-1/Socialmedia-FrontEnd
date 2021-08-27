import { MdCake } from "react-icons/md";
import { User } from "../../data";
import Online from "../online/Online";
import "./rightbar.css";

const Rightbar = ({ profile }) => {
  console.log(profile);
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
          <img src="assets/images/sponsor.jpg" alt="sponsor" />
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
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From: </span>
            <span className="rightBarInfoValue">Mumbai</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Department: </span>
            <span className="rightBarInfoValue">CSE</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Semester: </span>
            <span className="rightBarInfoValue">5th</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="assets/images/user1.jpg"
              alt="friend"
              className="rightBarFollowingImg"
            />
            <sapn className="rigthBarFollowingName">John Doe</sapn>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/images/user2.jpg"
              alt="friend"
              className="rightBarFollowingImg"
            />
            <sapn className="rigthBarFollowingName">John Doe</sapn>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/images/user4.jpg"
              alt="friend"
              className="rightBarFollowingImg"
            />
            <sapn className="rigthBarFollowingName">John Doe</sapn>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/images/user5.jpg"
              alt="friend"
              className="rightBarFollowingImg"
            />
            <sapn className="rigthBarFollowingName">John Doe</sapn>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/images/user6.jpg"
              alt="friend"
              className="rightBarFollowingImg"
            />
            <sapn className="rigthBarFollowingName">John Doe</sapn>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/images/user7.jpg"
              alt="friend"
              className="rightBarFollowingImg"
            />
            <sapn className="rigthBarFollowingName">John Doe</sapn>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
