import "./Post.css";
import Profile from "../Images/facebook/profile-icon-9.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faImage,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function Post() {
  return (
    <main className="post-main">
      <div className="upperpart">
        <img src={Profile} alt="profile" width={28} height={28} />
        <input type="text" placeholder="What's on your mind " id="inputPosts" />
      </div>
      <div className="shareOptions">
        <div className="option">
          <FontAwesomeIcon
            icon={faVideo}
            width={28}
            height={28}
            style={{ color: "red" }}
          />

          <p>Live Video</p>
        </div>
        <div className="option">
          <FontAwesomeIcon
            icon={faImage}
            width={28}
            height={28}
            style={{ color: "green" }}
          />
          <p>Photo/Video</p>
        </div>
        <div className="option">
          <FontAwesomeIcon
            icon={faFaceSmile}
            width={28}
            height={28}
            style={{ color: "blue" }}
          />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </main>
  );
}

export default Post;
