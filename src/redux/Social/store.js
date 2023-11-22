import { createStore } from "redux";
import postReducer from "./reducers";

export const store = createStore(postReducer);
