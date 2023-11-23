import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../actions";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ id: 0, userName: "", phoneNumber: "" });
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    dispatch(loginSuccess({ ...user, id: Date.now() }));
    setIsLoggedIn(true);
    navigate(`/addContact/${user.userName}`);
    setUser({ id: 0, userName: "", phoneNumber: "" });
  };

  const isLoginDisabled = !user.userName || !user.phoneNumber;

  const inputStyle = {
    marginBottom: "10px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
  };

  const labelStyle = {
    marginBottom: "5px",
    display: "block",
    fontWeight: "bold",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: isLoginDisabled ? "#ccc" : "#007bff",
    color: "#fff",
    border: "none",
    marginTop: "15px",
  };

  const containerStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <h1>Log in</h1>
      <label htmlFor="userName" style={labelStyle}>
        User Name:
      </label>
      <input
        type="text"
        id="userName"
        value={user.userName}
        onChange={(e) =>
          setUser((prevUser) => ({ ...prevUser, userName: e.target.value }))
        }
        style={inputStyle}
      />
      <label htmlFor="phoneNumber" style={labelStyle}>
        Phone Number:
      </label>
      <input
        type="text"
        id="phoneNumber"
        value={user.phoneNumber}
        onChange={(e) =>
          setUser((prevUser) => ({ ...prevUser, phoneNumber: e.target.value }))
        }
        style={inputStyle}
      />
      <button
        onClick={handleLogin}
        disabled={isLoginDisabled}
        style={buttonStyle}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
