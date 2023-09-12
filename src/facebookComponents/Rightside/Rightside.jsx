import { faGrip } from "@fortawesome/free-solid-svg-icons";
import "./Rightside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../Images/facebook/profile-icon-9.png";
const Rightside = () => {
  return (
    <div className="right-side">
      <div className="pages">
        <p>Your Pages and Profiles</p>
        <FontAwesomeIcon icon={faGrip} />
      </div>
      <hr />
      <div className="contacts">
        <div className="person">
          <img src={Profile} alt="profile" width={38} height={38} />
          <p>Person one</p>
        </div>
        <div className="person">
          <img src={Profile} alt="profile" width={38} height={38} />
          <p>Person two</p>
        </div>
        <div className="person">
          <img src={Profile} alt="profile" width={38} height={38} />
          <p>Person three</p>
        </div>
        <div className="person">
          <img src={Profile} alt="profile" width={38} height={38} />
          <p>Person four</p>
        </div>
        <div className="person">
          <img src={Profile} alt="profile" width={38} height={38} />
          <p>Person five</p>
        </div>
        <div className="person">
          <img src={Profile} alt="profile" width={38} height={38} />
          <p>Person six</p>
        </div>
        <div className="person">
          <img src={Profile} alt="profile" width={38} height={38} />
          <p>Person seven</p>
        </div>
      </div>
    </div>
  );
};

export default Rightside;
