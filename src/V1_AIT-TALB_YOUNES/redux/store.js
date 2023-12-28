import { createStore } from "redux";
import { recetteReducer } from "./reducer";

export const store = createStore(recetteReducer);
