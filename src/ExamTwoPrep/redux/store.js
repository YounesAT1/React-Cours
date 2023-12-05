import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { combineReducers } from "redux";

const Reducer = combineReducers({ clients: rootReducer });
const store = configureStore({
  reducer: Reducer,
  middleware: () => [thunk, logger],
});

export default store;
