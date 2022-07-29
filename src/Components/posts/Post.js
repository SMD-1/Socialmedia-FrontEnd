import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { prefix } from "../../apiconfig.js";
import * as MaterialIcon from "react-icons/md";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import "./post.css";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  // console.log(post);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);
  // console.log(user.usernam);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${prefix}users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
  const likeHandler = () => {
    try {
      axios.put(prefix + "posts/" + post._id + "/like", {
        userId: currentUser._id,
      });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    // document.getElementById("likeButton").style.color = "#1D4ED8";
    // document.getElementById("loveButton").style.color = "#E11D48";
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? `${prefix}images/${user.profilePicture}`
                    : `${prefix}images/person/user.png`
                }
                alt="user-profile"
              />
            </Link>
            <div className="postDetails">
              <span className="postUserName">{user.username}</span>
              <small>
                <span className="postDate">{format(post.createdAt)}</span>
              </small>
            </div>
          </div>
          <div className="postTopRight">
            <MaterialIcon.MdMoreVert className="postTopIcon" size="1.5rem" />
          </div>
        </div>
        <hr className="postHr" />
        <div className="postCenter">
          <span className="caption">
            <p> {post?.description} </p>
          </span>
          {post.img ? (
            <img src={post.img} alt="post" className="postImage" />
          ) : (
            ``
          )}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <MaterialIcon.MdThumbUp
              className="postBottomIcon"
              color="#1D4ED8"
              onClick={likeHandler}
            />
            <MaterialIcon.MdFavorite
              className="postBottomIcon"
              color="#E11D48"
              onClick={likeHandler}
            />
            <span className="likeCount">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
