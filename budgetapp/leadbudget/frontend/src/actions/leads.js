// any action that we want to fire off will go in here, where we make all of out http requests
import axios from "axios";

import { GET_LEADS } from "./types";

//GET LEADS
export const getLeads = () => dispatch => {
  axios
    .get("/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
