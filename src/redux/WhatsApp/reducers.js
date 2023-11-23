import { ADD_CONTACT, ADD_MESSAGE, LOGIN_SUCCESS, LOGOUT } from "./actions";

const initialContactsAndMessagesState = {
  contacts: [],
};

const initialState = {
  isLoggedIn: false,
  user: { id: 0, userName: "", phoneNumber: "" },
};

const ContactsAndMessagesReducer = (
  state = initialContactsAndMessagesState,
  action
) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContact = action.payload;
      return {
        ...state,
        contacts: [...state.contacts, newContact],
      };
    case ADD_MESSAGE:
      const { contactId, message } = action.payload;
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === contactId) {
            return {
              ...contact,
              messages: [
                ...contact.messages,
                { id: Date.now(), text: message.text },
              ],
            };
          }
          return contact;
        }),
      };

    default:
      return state;
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: { id: 0, userName: "", phoneNumber: "" },
      };
    default:
      return state;
  }
};

export { ContactsAndMessagesReducer, authReducer };
