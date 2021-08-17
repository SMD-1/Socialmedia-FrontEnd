import { MdCake } from "react-icons/md";
import { User } from "../../data";
import Online from "../online/Online";
import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
};

export default Rightbar;
