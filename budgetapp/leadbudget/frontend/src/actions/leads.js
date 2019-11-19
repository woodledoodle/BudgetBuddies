// any action that we want to fire off will go in here, where we make all of out http requests
import axios from "axios";

import { GET_LEADS, DELETE_LEADS } from "./types";

//GET LEADS
export const getLeads = () => dispatch => {
  axios
    .get("/api/budget/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
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
