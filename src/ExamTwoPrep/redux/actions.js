import axios from "axios";
import {
  DELETE_CLIENT,
  FETCH_CLIENTS_FAILURE,
  FETCH_CLIENTS_REQUEST,
  FETCH_CLIENTS_SUCCESS,
  ADD_CLIENT_FAILURE,
  ADD_CLIENT_REQUEST,
  ADD_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAILURE,
  UPDATE_CLIENT_REQUEST,
  UPDATE_CLIENT_SUCCESS,
  LOG_IN,
  LOG_OUT,
} from "./actionTypes";

//? FETCH
export const fetchClientsRequest = () => ({
  type: FETCH_CLIENTS_REQUEST,
});

export const fetchClientsSuccess = (clients) => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: clients,
});

export const fetchClientsFailure = (error) => ({
  type: FETCH_CLIENTS_FAILURE,
  payload: error,
});

export const fetchClients = () => {
  return async (dispatch) => {
    dispatch(fetchClientsRequest());
    try {
      const response = await axios.get("http://localhost:3004/clients");
      dispatch(fetchClientsSuccess(response.data));
    } catch (error) {
      dispatch(fetchClientsFailure(error.message || "Failed to fetch clients"));
    }
  };
};

//?LOG IN
export const userLogInAction = (email, password) => ({
  type: LOG_IN,
  payload: { email, password },
});

//?LOG OUT
export const userLogOutAction = () => ({
  type: LOG_OUT,
});

//?ADD CLIENT
export const addClientRequest = () => ({
  type: ADD_CLIENT_REQUEST,
});

export const addClientSuccess = (client) => ({
  type: ADD_CLIENT_SUCCESS,
  payload: client,
});

export const addClientFailure = (error) => ({
  type: ADD_CLIENT_FAILURE,
  payload: error,
});

export const addClient = (clientData, loggedInUserId) => {
  return async (dispatch) => {
    dispatch(addClientRequest());
    try {
      const response = await axios.post("http://localhost:3004/clients", {
        ...clientData,
        loggedInUserId,
      });
      dispatch(addClientSuccess(response.data));
    } catch (error) {
      dispatch(addClientFailure(error.message || "Failed to add client"));
    }
  };
};

//? UPDATE CLIENT
export const updateClientRequest = () => ({
  type: UPDATE_CLIENT_REQUEST,
});

export const updateClientSuccess = (client) => ({
  type: UPDATE_CLIENT_SUCCESS,
  payload: client,
});

export const updateClientFailure = (error) => ({
  type: UPDATE_CLIENT_FAILURE,
  payload: error,
});

export const updateClient = (clientId, updatedClientData) => {
  return async (dispatch) => {
    dispatch(updateClientRequest());
    try {
      const response = await axios.put(
        `http://localhost:3004/clients/${clientId}`,
        updatedClientData
      );
      dispatch(updateClientSuccess(response.data));
    } catch (error) {
      dispatch(updateClientFailure(error.message || "Failed to update client"));
    }
  };
};

//? DELETE CLIENT
export const deleteClientAction = (clientIdToDelete) => ({
  type: DELETE_CLIENT,
  payload: clientIdToDelete,
});
