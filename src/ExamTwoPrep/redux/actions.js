import axios from "axios";
import {
  ADD_CLIENT,
  DELETE_CLIENT,
  FAIL_REQUEST,
  FETCH_CLIENTS_REQUEST,
  GET_SINGLE_CLIENT,
  MAKE_REQUEST,
  UPDATE_CLIENT,
} from "./actionTypes";
import toast from "react-hot-toast";

//? GLOBAL REQUESTS
export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};

//? FETCH CLIENTS REQUEST
export const fetchClientsRequest = (clients) => {
  return {
    type: FETCH_CLIENTS_REQUEST,
    payload: clients,
  };
};

//? DELETE CLIENTE REQUEST
export const deleteClientRequest = () => {
  return {
    type: DELETE_CLIENT,
  };
};

//? ADD CLIENT REQUEST
export const addClientRequest = () => {
  return {
    type: ADD_CLIENT,
  };
};

//? UPDATE CLIENT REQUEST
export const updateClientRequest = () => {
  return {
    type: UPDATE_CLIENT,
  };
};

//? GET SINGLE CLIENT REQUEST
export const getSingleClientRequest = (client) => {
  return {
    type: GET_SINGLE_CLIENT,
    payload: client,
  };
};

//? FETCH CLIENTS DATA FROM THE JSON WEB SERVER

export const fetchClients = () => async (dispatch) => {
  try {
    dispatch(makeRequest());
    const res = await axios.get("http://localhost:3004/clients");
    dispatch(fetchClientsRequest(res.data));
  } catch (err) {
    dispatch(failRequest(err.message));
  }
};

//? DELETE A  CLIENT FROM THE JSON WEB SERVER
export const deleteClient = (ClientIdToDelete) => async (dispatch) => {
  try {
    dispatch(makeRequest);
    await axios.delete(`http://localhost:3004/clients/${ClientIdToDelete}`);
    dispatch(deleteClientRequest());
    toast.success("Client deleted successfully");
  } catch (err) {
    dispatch(failRequest(err.message));
    toast.error(err.message);
  }
};

//? ADD  A  CLIENT To THE JSON WEB SERVER

export const addClient = (client) => async (dispatch) => {
  try {
    dispatch(makeRequest());
    await axios.post(`http://localhost:3004/clients/`, client);
    dispatch(addClientRequest());
    toast.success("Client added successfully");
  } catch (err) {
    dispatch(failRequest(err.message));
    toast.error("Something went wrong");
  }
};

//? UPDATE A CLIENT THE JSON WEB SERVER
export const updateClient = (client, clientId) => async (dispatch) => {
  try {
    dispatch(makeRequest());
    await axios.put(`http://localhost:3004/clients/${clientId}`, client);
    dispatch(updateClientRequest());
    toast.success("Client updated successfully");
  } catch (err) {
    dispatch(failRequest(err.message));
    toast.error("Something went wrong");
  }
};

//? GET A SINGLE CLIENT THE JSON WEB SERVER

export const getSingleClient = (clientId) => async (dispatch) => {
  try {
    dispatch(makeRequest());
    const res = await axios.get(`http://localhost:3004/clients/${clientId}`);
    dispatch(getSingleClientRequest(res.data));
  } catch (err) {
    dispatch(failRequest(err.message));
  }
};
