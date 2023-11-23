import { combineReducers } from "redux";
import { ContactsAndMessagesReducer, authReducer } from "./reducers";

const rootReducer = combineReducers({
  contactsAndMessages: ContactsAndMessagesReducer,
  auth: authReducer,
});

export default rootReducer;
