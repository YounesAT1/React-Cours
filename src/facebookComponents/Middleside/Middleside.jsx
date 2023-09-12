import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Middleside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../Images/facebook/profile-icon-9.png";
import Post from "../Posts/Post";
const Middleside = () => {
  return (
    <div className="middle-container">
      <div className="add-to-story">
        <div className="Upper-part">
          <img src={Profile} alt="Story" width={150} height={100} />
          <FontAwesomeIcon icon={faPlus} className="fa-plus" />
          <p>Create a Story </p>
        </div>
        <div className="Upper-part">
          <img src={Profile} alt="Story" width={150} height={100} />
        </div>
        <div className="Upper-part">
          <img src={Profile} alt="Story" width={150} height={100} />
        </div>
        <div className="Upper-part">
          <img src={Profile} alt="Story" width={150} height={100} />
        </div>
      </div>
      <Post />
    </div>
  );
};

export default Middleside;
