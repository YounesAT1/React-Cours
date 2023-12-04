import {
  ADD_CLIENT_SUCCESS,
  FETCH_CLIENTS_FAILURE,
  FETCH_CLIENTS_REQUEST,
  FETCH_CLIENTS_SUCCESS,
  LOG_IN,
  LOG_OUT,
  UPDATE_CLIENT_SUCCESS,
} from "./actionTypes";

const initialState = {
  users: [
    {
      id: Date.now(),
      email: "itsyounes@gmail.com",
      password: "123",
      name: "Younes",
      clients: [],
    },
  ],
  loggedInUser: null,
  message: "",
  loading: false,
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      const { email, password } = action.payload;
      const userFound = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (userFound) {
        return {
          ...state,
          loggedInUser: userFound,
          message: "Logged in successfully",
        };
      } else {
        return {
          ...state,
          message: "User not found",
        };
      }

    case LOG_OUT:
      return {
        ...state,
        loggedInUser: null,
      };

    case FETCH_CLIENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        clients: action.payload,
        error: null,
      };

    case FETCH_CLIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_CLIENT_SUCCESS:
      const loggedInUserId = state.loggedInUser.id;

      const userIndex = state.users.findIndex(
        (user) => user.id === loggedInUserId
      );

      if (userIndex !== -1) {
        const updatedUsers = [...state.users];
        updatedUsers[userIndex] = {
          ...updatedUsers[userIndex],
          clients: [...updatedUsers[userIndex].clients, action.payload],
        };

        return {
          ...state,
          users: updatedUsers,
        };
      }
      return state;

    case UPDATE_CLIENT_SUCCESS:
      const updatedClient = action.payload;

      const updatedClientIndex = state.loggedInUser.clients.findIndex(
        (client) => client.id === updatedClient.id
      );

      if (updatedClientIndex !== -1) {
        const updatedClients = [
          ...state.loggedInUser.clients.slice(0, updatedClientIndex),
          updatedClient,
          ...state.loggedInUser.clients.slice(updatedClientIndex + 1),
        ];

        const updatedLoggedInUser = {
          ...state.loggedInUser,
          clients: updatedClients,
        };

        return {
          ...state,
          loggedInUser: updatedLoggedInUser,
        };
      }
      return state;

    default:
      return state;
  }
};
