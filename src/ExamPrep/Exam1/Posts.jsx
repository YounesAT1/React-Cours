/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./Post.css";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: 0,
        userName: "",
        image: "",
        text: "",
        likes: 0,
      },
      postsList: [],
      alert: "",
      currentPage: 1,
      postsPerPage: 2,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      post: {
        ...this.state.post,
        [name]: value,
      },
    });
  };

  handleAddPost = () => {
    const { userName, image, text, id } = this.state.post;

    if (userName !== "" && image !== "" && text !== "") {
      const newPost = {
        userName: userName,
        image: image,
        text: text,
        likes: 0,
        id: id + 1,
      };

      this.setState({
        postsList: [...this.state.postsList, newPost],
        post: {
          userName: "",
          image: "",
          text: "",
          likes: 0,
          id: id + 1,
        },
        alert: "",
      });
    } else {
      this.setState({
        alert: "Please fill out all information",
      });
    }
  };

  handleDeletePost = (idToDelete) => () => {
    const { postsList } = this.state;
    this.setState({
      postsList: postsList.filter((post) => post.id !== idToDelete),
    });
  };

  handleDisplayPostData = (postToUpdate) => () => {
    this.setState({
      post: postToUpdate,
    });
  };

  handleConfirmUpdatePost = () => {
    const { postsList, post } = this.state;
    const updatedPostsList = postsList.map((existingPost) => {
      if (existingPost.id === post.id) {
        return { ...post };
      } else {
        return existingPost;
      }
    });

    this.setState({
      postsList: updatedPostsList,
      post: {
        userName: "",
        image: "",
        text: "",
        likes: 0,
        id: post.id,
      },
    });
  };

  handleIncrementLikes = (postId) => () => {
    const updatedPostsList = this.state.postsList.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.likes + 1,
        };
      } else {
        return post;
      }
    });

    this.setState({
      postsList: updatedPostsList,
    });
  };

  handlePageChange = (newPage) => {
    this.setState({
      currentPage: newPage,
    });
  };

  render() {
    const { userName, text, image } = this.state.post;
    const { alert, postsList, currentPage, postsPerPage } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postsList.slice(indexOfFirstPost, indexOfLastPost);

    const totalPosts = postsList.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    return (
      <>
        <div className="container">
          <div className="form">
            <label htmlFor="userName">User name:</label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={userName}
              onChange={this.handleInputChange}
            />
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={this.handleInputChange}
            />
            <label htmlFor="text">Text:</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={this.handleInputChange}
            />
            <button className="action-button" onClick={this.handleAddPost}>
              Add
            </button>
            <button
              className="action-button"
              onClick={this.handleConfirmUpdatePost}
            >
              Edit
            </button>
            {alert !== "" && <p className="alert">{alert}</p>}
          </div>
          {postsList.length !== 0 && (
            <div className="posts">
              <h1>Posts</h1>
              {currentPosts.map((post, index) => (
                <div className="post-card" key={index}>
                  <div className="upperPart">
                    <img
                      src={post.image}
                      alt="picture"
                      width={300}
                      height={300}
                    />
                    <p>{post.userName}</p>
                  </div>
                  <div className="middlePart">
                    <p>{post.text}</p>
                  </div>
                  <div className="lowerPart">
                    <button
                      className="action-button"
                      onClick={this.handleIncrementLikes(post.id)}
                    >
                      Likes: {post.likes}
                    </button>
                    <button
                      className="action-button"
                      onClick={this.handleDeletePost(post.id)}
                    >
                      Remove
                    </button>
                    <button
                      className="action-button"
                      onClick={this.handleDisplayPostData(post)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
              <div className="pagination">
                <button
                  className="action-button"
                  onClick={this.handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <button
                  className="action-button"
                  onClick={this.handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Posts;
