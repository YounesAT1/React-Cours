import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogInAction } from "../redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.message);
  const currentLoggedInUser = useSelector((state) => state.loggedInUser);

  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = userData;
    dispatch(userLogInAction(email, password));
  };

  useEffect(() => {
    if (message === "User not found") {
      const initialUserData = { email: "", password: "" };
      setUserData(initialUserData);
      navigate("/login");
    } else if (message === "Logged in successfully") {
      if (currentLoggedInUser) {
        navigate("/");
      }
    }
  }, [message, navigate, currentLoggedInUser]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md mb-10">
      <h2 className="text-2xl font-semibold mb-4">Log in</h2>
      {message === "User not found" && (
        <p className="text-xl text-red-500 mb-2">{message}</p>
      )}
      <form onSubmit={handleSubmit} autoComplete="off" method="POST">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
