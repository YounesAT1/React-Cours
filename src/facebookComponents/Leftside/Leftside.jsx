import "./Leftside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../Images/facebook/profile-icon-9.png";
import {
  faArrowDown,
  faBookmark,
  faClock,
  faComment,
  faStore,
  faUserGroup,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const Leftside = () => {
  return (
    <aside className="asideContainer">
      <div className="asidItem">
        <img
          src={Profile}
          alt="Profile"
          width={18}
          height={18}
          className="profile"
        />
        <p>Younes</p>
      </div>
      <div className="asidItem">
        <FontAwesomeIcon
          icon={faUserGroup}
          width={38}
          height={38}
          className="leftIcons"
        />
        <p>Find Friend</p>
      </div>
      <div className="asidItem">
        <FontAwesomeIcon
          icon={faClock}
          width={38}
          height={38}
          className="leftIcons"
        />
        <p>Memories</p>
      </div>
      <div className="asidItem">
        <FontAwesomeIcon
          icon={faBookmark}
          width={38}
          height={38}
          className="leftIcons"
        />
        <p>Saved</p>
      </div>
      <div className="asidItem">
        <FontAwesomeIcon
          icon={faUsers}
          width={38}
          height={38}
          className="leftIcons"
        />
        <p>Groups</p>
      </div>
      <div className="asidItem">
        <FontAwesomeIcon
          icon={faVideo}
          width={38}
          height={38}
          className="leftIcons"
        />
        <p>Video</p>
      </div>
      <div className="asidItem">
        <FontAwesomeIcon
          icon={faStore}
          width={38}
          height={38}
          className="leftIcons"
        />
        <p>Market Place</p>
      </div>
      <div className="asidItem">
        <FontAwesomeIcon
          icon={faComment}
          width={38}
          height={38}
          className="leftIcons"
        />
        <p>Feeds</p>
      </div>
      <div className="asidItem">
        <FontAwesomeIcon
          icon={faArrowDown}
          width={38}
          height={38}
          className="leftIcons"
        />
        <p>See More</p>
      </div>
    </aside>
  );
};

export default Leftside;
