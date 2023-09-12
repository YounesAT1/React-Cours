import "./Navbar.css";
import Logo from "../Images/facebook/download.png";
import Profile from "../Images/facebook/profile-icon-9.png";
import SearchInput from "./SearchInput/SearchInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserGroup,
  faClapperboard,
  faStore,
  faUsers,
  faTableCells,
  faMessage,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="first">
        <img src={Logo} alt="logo" className="logo" width={48} height={48} />
        <SearchInput />
      </div>

      <div className="second">
        <FontAwesomeIcon
          icon={faHome}
          width={50}
          height={20}
          className="homeIcon"
        />
        <FontAwesomeIcon icon={faUserGroup} />
        <FontAwesomeIcon icon={faClapperboard} width={40} height={20} />
        <FontAwesomeIcon icon={faStore} width={40} height={20} />
        <FontAwesomeIcon icon={faUsers} width={40} height={20} />
      </div>

      <div className="third">
        <FontAwesomeIcon
          icon={faTableCells}
          width={40}
          height={20}
          className="thirdIcons"
        />
        <FontAwesomeIcon
          icon={faMessage}
          width={40}
          height={20}
          className="thirdIcons"
        />
        <FontAwesomeIcon
          icon={faBell}
          width={40}
          height={20}
          className="thirdIcons"
        />
        <img
          src={Profile}
          alt="ptofile"
          width={28}
          height={28}
          className="profile"
        />
      </div>
    </nav>
  );
};

export default Navbar;
