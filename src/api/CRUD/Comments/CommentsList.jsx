import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CommentsList = () => {
  const [commentList, setCommentList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3004/comments").then((res) => {
      setCommentList(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3004/comments/${id}`).then((res) => {
      if (res.status === 200) {
        const updatedCommentsList = commentList.filter(
          (comment) => comment.id !== id
        );
        setCommentList(updatedCommentsList);
      }
    });
  };

  const handleUpdateComment = (comment) => {
    navigate("/Comments/update", {
      state: {
        comment: comment,
      },
    });
  };

  const DeleteButtonStyle = {
    padding: "8px 16px",
    marginRight: "8px",
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };
  const UpdateButtonStyle = {
    padding: "8px 16px",
    marginRight: "8px",
    backgroundColor: "green",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "20px",
  };

  const tableCellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
  };

  return (
    <div>
      <h1>Comments List</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableCellStyle}>ID</th>
            <th style={tableCellStyle}>Title</th>
            <th style={tableCellStyle}>Author</th>
            <th style={tableCellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {commentList.map((comment) => (
            <tr key={comment.id}>
              <td style={tableCellStyle}>{comment.id}</td>
              <td style={tableCellStyle}>{comment.title}</td>
              <td style={tableCellStyle}>{comment.author}</td>
              <td style={tableCellStyle}>
                <button
                  style={DeleteButtonStyle}
                  onClick={() => handleDelete(comment.id)}
                >
                  Delete
                </button>
                <button
                  style={UpdateButtonStyle}
                  onClick={() => handleUpdateComment(comment)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentsList;
