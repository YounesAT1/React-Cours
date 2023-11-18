import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const UpdateComment = () => {
  const location = useLocation();
  const [comment, setComment] = useState(location.state.comment);
  const [message, setMessage] = useState("");

  const containerStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    marginBottom: "15px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
    fontSize: "14px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const messStyle = {
    color: "white",
    marginTop: "10px",
    backgroundColor: "black",
    padding: "10px 20px",
    borderRadius: "8px",
  };

  const updateValidation = () => {
    if (comment.title !== "" && comment.author !== "") {
      axios
        .put(`http://localhost:3004/comments/${comment.id}`, comment)
        .then((res) => {
          if (res.status === 200) {
            setMessage("Comment updated successfully");
          } else {
            setMessage("Error while updating!!");
          }
        });
    } else {
      setMessage("All fields are required");
    }
  };

  const handleTitleChange = (e) => {
    setComment({ ...comment, title: e.target.value });
  };

  const handleAuthorChange = (e) => {
    setComment({ ...comment, author: e.target.value });
  };

  return (
    <div style={containerStyle}>
      <h1>Update Comment with the ID {comment.id}</h1>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        defaultValue={comment.title}
        onChange={handleTitleChange}
        style={inputStyle}
      />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        defaultValue={comment.author}
        onChange={handleAuthorChange}
        style={inputStyle}
      />
      <button onClick={updateValidation} style={buttonStyle}>
        Validate
      </button>
      {message && <p style={messStyle}>{message}</p>}
    </div>
  );
};

export default UpdateComment;
