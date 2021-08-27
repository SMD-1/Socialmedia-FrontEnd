import "./feed.css";
import Share from "../share/Share";
import Post from "../posts/Post";
// import Profile from "../../pages/profile/Profile";
import { Posts } from "../../data";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* <Profile /> */}
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
