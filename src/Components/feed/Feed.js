import axios from "axios";
import { prefix } from "../../apiconfig";
import "./feed.css";
import { useState, useEffect, useContext } from "react";
import Share from "../share/Share";
import Post from "../posts/Post";
import { AuthContext } from "../../context/AuthContext";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get(prefix + "posts/profile/" + username)
        : await axios.get(prefix + "posts/timeline/" + user._id);
      // console.log("Feed", res.data);
      setPosts(
        res.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    fetchPost();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
