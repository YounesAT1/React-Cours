export const ADD_CONTACT = "ADD_CONTACT";
export const ADD_MESSAGE = "ADD_MESSAGE";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const addContactAction = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const addMessageAction = (contactId, messageText) => ({
  type: ADD_MESSAGE,
  payload: {
    message: { id: Date.now(), text: messageText },
    contactId,
  },
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const logout = () => ({
  type: LOGOUT,
});
