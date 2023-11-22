import { ADD_COMMENT, ADD_LIKE, ADD_POST, FETCH_POSTS } from "./actions";

const initialState = {
  Posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        Posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        Posts: [...state.Posts, action.payload],
      };
    case ADD_COMMENT:
      const updatedPosts = state.Posts.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            comment: [...post.comment, action.payload.comment],
          };
        }
        return post;
      });
      return {
        ...state,
        Posts: updatedPosts,
      };
    case ADD_LIKE:
      const updatedPostsLikes = state.Posts.map((p) =>
        p.id === action.payload.id ? { ...p, likes: p.likes + 1 } : p
      );
      return {
        ...state,
        Posts: updatedPostsLikes,
      };
    default:
      return state;
  }
};

export default postReducer;
