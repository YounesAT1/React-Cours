import { useState } from "react";
import { addPosts } from "../actions";
import { useDispatch } from "react-redux";
import axios from "axios";

const AddPost = () => {
  const initialPost = { id: 0, content: "", comment: [], likes: 0 };
  const API_URL = "http://localhost:3004/Posts";
  const [newPost, setNewPost] = useState(initialPost);
  const dispatch = useDispatch();

  const handleAddPost = () => {
    axios.post(API_URL, { ...newPost, id: Date.now() }).then((res) => {
      dispatch(addPosts(res.data));
      setNewPost(initialPost);
    });
  };

  return (
    <div>
      <h1> Add A post :</h1>
      <label htmlFor="content">Content : </label>
      <input
        type="text"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
      />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default AddPost;
