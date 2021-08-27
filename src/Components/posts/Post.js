import { useState } from "react";
import * as MaterialIcon from "react-icons/md";
import { User } from "../../data";
import "./post.css";

const Post = ({ post }) => {
  console.log(post);
  const { photo, caption, date, like, comment, userId } = post;
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
    // document.getElementById("likeButton").style.color = "#1D4ED8";
    // document.getElementById("loveButton").style.color = "#E11D48";
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={User.filter((u) => u.id === userId)[0].profilePicture}
              alt="user-profile"
            />
            <div className="postDetails">
              <span className="postUserName">
                {User.filter((u) => u.id === userId)[0].username}
              </span>
              <small>
                <span className="postDate">{date}</span>
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
            <p> {caption} </p>
          </span>
          <img src={photo} alt="post1" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <MaterialIcon.MdThumbUp
              // id="likeButton"
              className="postBottomIcon"
              color="#1D4ED8"
              onClick={likeHandler}
            />
            <MaterialIcon.MdFavorite
              // id="loveButton"
              className="postBottomIcon"
              color="#E11D48"
              onClick={likeHandler}
            />
            <span className="likeCount">{likes} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">{comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
