import axios from "axios";
import Axios from "../config/axios";
import { API_BASE_URL } from "../vite-env.d";

export const fetchUser = async (username, password) => {
  return await axios.post(`${API_BASE_URL}/auth/login`, {
    username,
    password,
  });
};

export const getUser = async () => {
  return await axios.get(`${API_BASE_URL}/users/${id}`);
};

export const registerUser = async (
  firstName,
  lastName,
  cuit,
  email,
  password
) => {
  return await axios.post(`${API_BASE_URL}/auth/signup`, {
    firstName,
    lastName,
    cuit,
    email,
    password,
  });
};

export const getProfile = async () => {
  const response = Axios.get(`${API_BASE_URL}/auth/profile`);
  return response.data;
};
