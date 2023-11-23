import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessageAction } from "../actions";

const Messages = () => {
  const dispatch = useDispatch();
  const { contactId, contactName } = useParams();
  const contacts = useSelector((state) => state.contactsAndMessages.contacts);
  const [message, setMessage] = useState({ id: 0, text: "" });

  const currentContact = contacts.find((contact) => contact.id === +contactId);
  const currentMessages = currentContact ? currentContact.messages : [];

  if (!currentContact) {
    return <div>Contact not found</div>;
  }

  const handleSendMessage = (idToSendTo, messageText) => {
    dispatch(
      addMessageAction(idToSendTo, { id: Date.now(), text: messageText })
    );
    setMessage({ id: 0, text: "" });
    console.log(currentMessages);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Messages with {decodeURIComponent(contactName)}
      </h2>
      {currentMessages.length !== 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {currentMessages.map((singleMessage, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {singleMessage.text.text}
            </li>
          ))}
        </ul>
      ) : null}
      <input
        type="text"
        value={message.text}
        onChange={(e) => setMessage({ ...message, text: e.target.value })}
        placeholder="Type your message"
        style={{
          marginBottom: "10px",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "16px",
          width: "100%",
        }}
      />
      <button
        onClick={() => handleSendMessage(currentContact.id, message.text)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "4px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          marginTop: "10px",
          transition: "background-color 0.3s ease",
        }}
      >
        Send Message
      </button>
    </div>
  );
};

export default Messages;
