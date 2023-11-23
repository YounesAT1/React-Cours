import { createStore } from "redux";
import rootReducer from "./CombinedReducer";

const store = createStore(rootReducer);

export default store;
