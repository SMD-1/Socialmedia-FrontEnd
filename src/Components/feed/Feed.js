import "./feed.css";
import Share from "../share/Share";
import Post from "../posts/Post";
import { Posts } from "../../data";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
