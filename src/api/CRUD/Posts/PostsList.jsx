import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PostsList = () => {
  const [postsList, setPostsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3004/posts").then((res) => {
      setPostsList(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`).then((res) => {
      if (res.status === 200) {
        const updatedPostsList = postsList.filter((post) => post.id !== id);
        setPostsList(updatedPostsList);
      }
    });
  };

  const handleUpdatePost = (post) => {
    navigate("/posts/update", {
      state: {
        post: post,
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
      <h1>Posts List</h1>
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
          {postsList.map((post) => (
            <tr key={post.id}>
              <td style={tableCellStyle}>{post.id}</td>
              <td style={tableCellStyle}>{post.title}</td>
              <td style={tableCellStyle}>{post.author}</td>
              <td style={tableCellStyle}>
                <button
                  style={DeleteButtonStyle}
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
                <button
                  style={UpdateButtonStyle}
                  onClick={() => handleUpdatePost(post)}
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

export default PostsList;
