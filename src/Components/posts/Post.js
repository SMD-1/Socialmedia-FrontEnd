import * as MaterialIcon from "react-icons/md";
import { User } from "../../data";
import "./post.css";

const Post = ({ post }) => {
  console.log(post);
  const { photo, caption, date, like, comment, userId } = post;
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
              className="postBottomIcon"
              color="#1D4ED8"
            />
            <MaterialIcon.MdFavorite
              className="postBottomIcon"
              color="#E11D48"
            />
            <span className="likeCount">{like}</span>
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
