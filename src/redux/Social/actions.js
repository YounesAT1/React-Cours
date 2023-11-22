export const ADD_POST = "ADD_PODT";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_LIKE = "ADD_LIKE";
export const FETCH_POSTS = "FETCH_POSTS";

export const addPosts = (Post) => ({
  type: ADD_POST,
  payload: Post,
});

export const AddComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    payload: {
      id: postId,
      comment: comment,
    },
  };
};

export const addLike = (id, post) => ({
  type: ADD_LIKE,
  payload: { id, post },
});

export const fetchPosts = (posts) => ({
  type: FETCH_POSTS,
  payload: posts,
});
