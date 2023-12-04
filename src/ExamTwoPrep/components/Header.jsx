import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogOutAction } from "../redux/actions";

const Header = () => {
  const currentLoggedInUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogOutAction());
    navigate("/");
  };

  return (
    <header className="p-3 bg-gray-50">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center">
          <li className="text-2xl font-semibold text-gray-700 mr-5">
            <Link to="/" className="hover:text-gray-500">
              Clients
            </Link>
          </li>
          <li className="text-2xl font-semibold text-gray-700">
            <Link to="/addClient" className="hover:text-gray-500">
              Add Client
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          {currentLoggedInUser === null ? (
            <li className="text-2xl ">
              <Link to="/login">
                <button className="hover:text-gray-500 text-gray-700 mr-3">
                  Login
                </button>
              </Link>
            </li>
          ) : (
            <li className="text-2xl flex items-center justify-between">
              <p className="hover:text-gray-500 text-gray-700 mr-7">
                {currentLoggedInUser.name}
              </p>
              <button
                onClick={handleLogout}
                className="hover:text-gray-500 text-gray-700"
              >
                Log out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
