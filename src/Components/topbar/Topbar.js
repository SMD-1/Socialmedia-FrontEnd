import "./topbar.css";
import * as MaterialIcon from "react-icons/md";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lets Chat</span>
      </div>
      <div className="topbarCenter">
        <input
          type="text"
          placeholder="Search for friends, posts"
          className="searchInput"
        />
        <MaterialIcon.MdSearch size="1.5rem" style={{ marginLeft: "10px" }} />
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" style={{ margin: "0 10px" }}>
            Home
          </span>
          <span className="topbarLink" style={{ margin: "0 10px" }}>
            Timeline
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <MaterialIcon.MdPerson size="1.7rem" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <MaterialIcon.MdChat size="1.7rem" />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <MaterialIcon.MdNotificationsActive size="1.7rem" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/images/user3.jpg"
          alt="profile"
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default Topbar;
