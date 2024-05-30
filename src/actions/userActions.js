import axios from 'axios';
import { API_URL, LOGIN_API, REGISTER_API } from '../constants/api';

// Define action type constants
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}${LOGIN_API}`, userData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    console.error('Login error:', error);
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}${REGISTER_API}`, userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    console.error('Registration error:', error);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
