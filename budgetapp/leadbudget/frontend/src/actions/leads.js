// any action that we want to fire off will go in here, where we make all of out http requests
import axios from "axios";
import { createMessage, returnErrors } from "./messages.js"
import { GET_LEADS, DELETE_LEADS, ADD_LEADS, GET_LEAD, UPDATE_LEADS, DELETE_RECORD, CREATE_RECORD } from "./types";

//GET LEADS
export const getLeads = () => (dispatch, getState) => {
  console.log("get leads is called")
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

        if(res.data.length <= 0) {
          let user_id = getState().auth.user.id;
          let balance = 0; 
          let owner = user_id;
          const budget = {balance, owner};
          axios
          .post("/api/budget/", budget, config)
          .then(res => {
            dispatch({
              type: ADD_LEADS,
              payload: res.data
            });
          })
          .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
        }
        dispatch({
          type: GET_LEADS,
          payload: res.data
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//DELETE LEAD
export const deleteLeads = id => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const token = localStorage.getItem('token')
  config.headers["Authorization"] = `Token ${token}`
  axios
    //   console.log("this is id", id)
    .delete(`/api/budget/${id}/`, config)
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
  console.log("in add LEADS")
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const token = localStorage.getItem('token')
  config.headers["Authorization"] = `Token ${token}`;
  axios
    .post("/api/budget/", lead, config)
    .then(res => {
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


//ADD LEAD
export const updateLeads = lead => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const token = localStorage.getItem('token')
  config.headers["Authorization"] = `Token ${token}`;
  axios
    .put("/api/budget/", lead, config)
    .then(res => {
      dispatch({
        type: ADD_LEADS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//get deleteRecord
export const deleteRecord = id => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const token = localStorage.getItem('token')
  config.headers["Authorization"] = `Token ${token}`
  axios
    //   console.log("this is id", id)
    .delete(`/api/record/${id}/`, config)
    .then(res => {
      dispatch({
        type: DELETE_RECORD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//CREATING A RECORD
export const createRecord = record => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const token = localStorage.getItem('token')
  config.headers["Authorization"] = `Token ${token}`;
  axios
    .post("/api/record/", record, config)
    .then(res => {
      dispatch({
        type: CREATE_RECORD,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};