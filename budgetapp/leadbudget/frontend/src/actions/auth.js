import axios from 'axios';
import { returnErrors } from './messages';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILED
} from './types';


//Check Token and Load user
export const loadUser = () => (dispatch, getState) => {
    // user loading
    dispatch({ type: USER_LOADING });
    // get token from state comes form local storage
    const token = getState().auth.token;
    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // if token add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}

//login user
export const login = (username, password) => (dispatch) => {

    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // request body stringify
    const body = JSON.stringify({ username, password })

    axios
        .post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}
//logout
export const logout = () => (dispatch, getState) => {

    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const token = localStorage.getItem('token')
    config.headers["Authorization"] = `Token ${token}`;
    axios
        .post("/api/auth/logout", null, config)
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//register
export const register = (newUser) => (dispatch) => {

    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // request body stringify
    console.log("PARSEW: ", newUser)
    const body = JSON.stringify(newUser)
    console.log("register", body)
    axios
        .post('/api/auth/register', body, config)
        .then(res => {
            console.log("payload", res.data)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAILED
            })
        })
}
