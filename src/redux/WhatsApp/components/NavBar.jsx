import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const navStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    marginRight: "20px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    fontSize: "16px",
    borderRadius: "4px",
    backgroundColor: "#dc3545",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <nav style={navStyle}>
      <div>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Link to="/addContact" style={linkStyle}>
            Add a contact
          </Link>
          <Link to="/contactsList" style={linkStyle}>
            Contacts
          </Link>
          <button onClick={handleLogout} style={buttonStyle}>
            Log out
          </button>
        </h2>
      </div>
    </nav>
  );
};

export default NavBar;
