import { useState } from "react";

const ExThree = () => {
  const [post, setPost] = useState({
    userName: "",
    title: "",
    text: "",
  });

  const [postList, setPostList] = useState([]);
  const [alert, setAlert] = useState("");

  const getInputValue = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleAddPost = () => {
    if (post.text !== "" && post.userName !== "" && post.title !== "") {
      const newPost = {
        userName: post.userName,
        title: post.title,
        text: post.text,
      };
      setPostList((prevPost) => [...prevPost, newPost]);

      setPost({
        userName: "",
        title: "",
        text: "",
      });

      setAlert("Post added successfully");
    } else {
      setAlert("fil out all the infos");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Add a post :</h1>
        <label htmlFor="userName">user Name :</label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={post.userName}
          onChange={getInputValue}
        />
        <br />
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={getInputValue}
          value={post.title}
        />
        <br />
        <label htmlFor="text">Text : </label>
        <textarea
          name="text"
          value={post.text}
          id="text"
          cols="30"
          rows="10"
          onChange={getInputValue}
        ></textarea>
        <button onClick={handleAddPost}>Add post</button>
        {alert && <p>{alert}</p>}
        <table>
          <thead>
            <tr>
              <th>user Name</th>
              <th>title</th>
              <th>text</th>
            </tr>
          </thead>
          <tbody>
            {postList.map((post, index) => (
              <tr key={index}>
                <td>{post.userName}</td>
                <td>{post.title}</td>
                <td>{post.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ExThree;
