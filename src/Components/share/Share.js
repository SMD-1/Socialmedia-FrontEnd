import axios from "axios";
import { prefix } from "../../apiconfig";
import { useContext, useRef, useState } from "react";
import * as MaterialIcon from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import "./share.css";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const description = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: description.current.value,
      img: "",
    };
    if (file) {
      const formData = new FormData();
      const fileName = file.name;
      formData.append("file", file);
      formData.append("name", fileName);
      newPost.img = fileName;
      console.log("New Post", newPost);
      try {
        const res = await axios.post(prefix + "upload", formData);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post(prefix + "posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  console.log("share", user);
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/user.png"
            }
            alt="user-profile"
          />
          <input
            type="text"
            className="shareInput"
            placeholder={"What's on your mind " + user.username + "?"}
            ref={description}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainre">
            <img
              src={URL.createObjectURL(file)}
              className="shareImg"
              alt="postImage"
            />
            <div className="shareCancel">
              <MaterialIcon.MdClear size="1rem" onClick={() => setFile(null)} />
            </div>
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <MaterialIcon.MdPermMedia
                color="tomato"
                size="1.3rem"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Photo/Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                name="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <MaterialIcon.MdVideoCall
                color="#4f46e5"
                size="1.5rem"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Room</span>
            </div>
            <div className="shareOption">
              <MaterialIcon.MdInsertEmoticon
                color="#ff7505"
                size="1.3rem"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Emotions</span>
            </div>
            <button className="shareButton" type="submit">
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
