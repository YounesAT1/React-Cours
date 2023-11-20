export const addProduct = (product) => ({
  type: "ADD_PRODUCT",
  payload: product,
});

export const updateProduct = (id, updatedProduct) => ({
  type: "UPDATE_PRODUCT",
  payload: { id, updatedProduct },
});

export const deleteProduct = (id) => ({
  type: "DELETE_PRODUCT",
  payload: id,
});
