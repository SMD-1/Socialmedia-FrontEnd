import "./topbar.css";
import * as MaterialIcon from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { prefix } from "../../apiconfig";
import axios from "axios";

const Topbar = () => {
  const [query, setQuery] = useState("")
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get(`${prefix}allUsers`)
        setAllUsers(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUsers()
  }, [query])
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">Lets Chat</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <input
          type="text"
          placeholder="Search for friends, posts"
          className="searchInput"
          onChange={e => setQuery(e.target.value)}
        />
        <MaterialIcon.MdSearch size="1.5rem" style={{ marginLeft: "10px" }} />
        {
          query &&
          <ul>
            {
              allUsers.filter(user => user.username.toLowerCase().includes(query)).map((user) => {
                return (
                  <>
                    <li key={user._id}>
                      <Link to={`/profile/${user.username}`}>
                        <img
                          src={
                            user.profilePicture
                              ? PF + user.profilePicture
                              : PF + "person/user.png"
                          }
                          alt="profile"
                        />
                        <p>
                          {user.username}
                        </p>
                      </Link>
                    </li>
                    <hr />
                  </>
                )
              })
            }
          </ul>
        }
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/">
            <span className="topbarLink" style={{ margin: "0 10px" }}>
              <MaterialIcon.MdHome size="1.7rem" />
            </span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <MaterialIcon.MdPerson size="1.7rem" />
            <span className="topbarIconBadge">1</span>
          </div>
          <Link to="/messenger">
            <div className="topbarIconItem">
              <MaterialIcon.MdChat size="1.7rem" />
              <span className="topbarIconBadge">2</span>
            </div>
          </Link>
          <div className="topbarIconItem">
            <MaterialIcon.MdNotificationsActive size="1.7rem" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/user.png"
            }
            alt="profile"
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
