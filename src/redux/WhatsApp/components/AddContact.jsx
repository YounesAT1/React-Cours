import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContactAction } from "../actions";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    id: 0,
    name: "",
    phoneNumber: "",
    messages: [],
  });

  const handleAddContact = () => {
    const newContact = { ...contact, id: Date.now() };
    dispatch(addContactAction(newContact));
    navigate("/");
  };

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
    backgroundColor: "#007bff",
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
      <h1>Add a contact:</h1>
      <label htmlFor="name" style={labelStyle}>
        Contact Name:
      </label>
      <input
        type="text"
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
        id="name"
        style={inputStyle}
      />
      <label htmlFor="phoneNumber" style={labelStyle}>
        Contact Phone Number:
      </label>
      <input
        type="text"
        value={contact.phoneNumber}
        onChange={(e) =>
          setContact({ ...contact, phoneNumber: e.target.value })
        }
        id="phoneNumber"
        style={inputStyle}
      />
      <button onClick={handleAddContact} style={buttonStyle}>
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
