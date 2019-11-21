// any action that we want to fire off will go in here, where we make all of out http requests
import axios from "axios";
import { createMessage, returnErrors } from "./messages.js"
import { GET_LEADS, DELETE_LEADS, ADD_LEADS, GET_LEAD } from "./types";

//GET LEADS
export const getLeads = () => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const token = localStorage.getItem('token')
  config.headers["Authorization"] = `Token ${token}`
  axios
    .get("/api/budget/", config)
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//DELETE LEAD
export const deleteLeads = id => dispatch => {
  axios
    //   console.log("this is id", id)
    .delete(`/api/budget/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEADS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD LEAD
export const addLeads = lead => dispatch => {
  console.log("ADFADFadsf")
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const token = localStorage.getItem('token')
  config.headers["Authorization"] = `Token ${token}`
  console.log("going to send")
  axios
    .post("/api/budget/", lead, config)
    .then(res => {
      console.log("DID THIS WORK")
      dispatch({
        type: ADD_LEADS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//test
export const getLead = id => dispatch => {
  axios
    .get(`/api/budget/${id}`)
    .then(res => {
      dispatch({
        type: GET_LEAD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
