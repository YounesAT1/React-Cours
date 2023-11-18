import axios from "axios";
import { useState } from "react";

const AddComment = () => {
  const initialCommentData = {
    id: "",
    title: "",
    author: "",
  };

  const [comment, setComment] = useState(initialCommentData);
  const [message, setMessage] = useState("");
  const [errStyle, setErrStyle] = useState({
    background: "#000",
    color: "#fff",
    padding: "8px",
    borderRadius: "4px",
  });

  const addComment = () => {
    if (comment.id !== 0 && comment.title !== "" && comment.author !== "") {
      axios.post("http://localhost:3004/comments", comment).then((res) => {
        if (res.status === 201) {
          setMessage("Comment Added successfully");
          setErrStyle({
            background: "#000",
            color: "#fff",
            padding: "8px",
            borderRadius: "4px",
          });
          setComment(initialCommentData);
        } else {
          setMessage("Erreur du Backend");
          setErrStyle({
            background: "red",
            color: "#fff",
            padding: "8px",
            borderRadius: "4px",
          });
        }
      });
    } else {
      setMessage("all fields are required");
      setErrStyle({
        background: "red",
        color: "#fff",
        padding: "8px",
        borderRadius: "4px",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const containerStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  };

  const labelStyle = {
    marginBottom: "5px",
    display: "block",
    fontSize: "14px",
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

  const errorStyle = {
    background: errStyle.background,
    color: "#fff",
    padding: "8px",
    borderRadius: "4px",
    marginTop: "10px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h1>Add a Comment:</h1>
      <label htmlFor="id" style={labelStyle}>
        ID:
      </label>
      <input
        type="text"
        name="id"
        id="id"
        value={comment.id}
        onChange={handleInputChange}
        style={inputStyle}
        autoComplete="off"
      />
      <label htmlFor="title" style={labelStyle}>
        Title:
      </label>
      <input
        type="text"
        name="title"
        id="title"
        value={comment.title}
        onChange={handleInputChange}
        style={inputStyle}
        autoComplete="off"
      />
      <label htmlFor="author" style={labelStyle}>
        Author:
      </label>
      <input
        type="text"
        name="author"
        id="author"
        value={comment.author}
        onChange={handleInputChange}
        style={inputStyle}
        autoComplete="off"
      />
      <button onClick={addComment} style={buttonStyle}>
        Add
      </button>
      {message && <p style={errorStyle}>{message}</p>}
    </div>
  );
};

export default AddComment;
