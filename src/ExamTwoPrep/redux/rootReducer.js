import {
  ADD_CLIENT,
  DELETE_CLIENT,
  FAIL_REQUEST,
  FETCH_CLIENTS_REQUEST,
  GET_SINGLE_CLIENT,
  MAKE_REQUEST,
  UPDATE_CLIENT,
} from "./actionTypes";

const initialState = {
  isLoading: true,
  clients: [],
  client: {},
  errMessage: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FAIL_REQUEST:
      return {
        ...state,
        isLoading: false,
        errMessage: action.payload,
      };

    case FETCH_CLIENTS_REQUEST:
      return {
        ...state,
        isLoading: false,
        errMessage: "",
        clients: action.payload,
      };

    case DELETE_CLIENT:
      return {
        ...state,
        isLoading: false,
      };

    case ADD_CLIENT:
      return {
        ...state,
        isLoading: false,
      };

    case GET_SINGLE_CLIENT:
      return {
        ...state,
        isLoading: false,
        client: action.payload,
      };

    case UPDATE_CLIENT:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
