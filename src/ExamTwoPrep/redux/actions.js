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
export const fetchClients = () => {
  return async (dispatch) => {
    dispatch(makeRequest());
    await axios
      .get("http://localhost:3004/clients")
      .then((res) => {
        const clients = res.data;
        dispatch(fetchClientsRequest(clients));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

//? DELETE A  CLIENT FROM THE JSON WEB SERVER
export const deleteClient = (ClientIdToDelete) => {
  return async (dispatch) => {
    dispatch(makeRequest());
    await axios
      .delete(`http://localhost:3004/clients/${ClientIdToDelete}`)
      .then(() => {
        dispatch(deleteClientRequest());
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

//? ADD  A  CLIENT To THE JSON WEB SERVER
export const addClient = (client) => {
  return async (dispatch) => {
    dispatch(makeRequest());
    await axios
      .post(`http://localhost:3004/clients/`, client)
      .then(() => {
        dispatch(addClientRequest());
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

//? UPDATE A CLIENT THE JSON WEB SERVER
export const updateClient = (client, clientId) => {
  return async (dispatch) => {
    dispatch(makeRequest());
    await axios
      .put(`http://localhost:3004/clients/${clientId}`, client)
      .then(() => {
        dispatch(updateClientRequest());
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

//? GET A SINGLE CLIENT THE JSON WEB SERVER
export const getSingleClient = (clientId) => {
  return async (dispatch) => {
    dispatch(makeRequest());
    await axios
      .get(`http://localhost:3004/clients/${clientId}`)
      .then((res) => {
        const client = res.data;
        dispatch(getSingleClientRequest(client));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};
