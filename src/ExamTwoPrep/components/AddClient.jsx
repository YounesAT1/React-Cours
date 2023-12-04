import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NotAhuth from "./NotAhuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addClient } from "../redux/actions";

const AddClient = () => {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [clientData, setClientData] = useState({
    id: 0,
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [errMessage, setErrmessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, fullName, phoneNumber } = clientData;

    if (!email || !fullName || !phoneNumber) {
      setErrmessage("Please fill in all fields");
    } else {
      dispatch(addClient({ ...clientData, id: Date.now() }, loggedInUser.id));
      setClientData({ id: 0, fullName: "", email: "", phoneNumber: "" });
      setErrmessage("");
      navigate("/");
    }
  };

  if (loggedInUser === null) {
    return <NotAhuth />;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md mb-10">
      <h2 className="text-2xl font-semibold mb-6">Add Client</h2>
      {errMessage && <p className="text-xl text-red-500 mb-2">{errMessage}</p>}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={handleChange}
            value={clientData.fullName}
            placeholder="Enter Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
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
            onChange={handleChange}
            value={clientData.email}
            placeholder="Enter Email Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phoneNumber"
            onChange={handleChange}
            value={clientData.phoneNumber}
            placeholder="Enter Phone Number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClient;
