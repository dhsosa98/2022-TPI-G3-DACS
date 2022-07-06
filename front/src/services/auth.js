import axios from "axios";
import { API_BASE_URL } from "../vite-env.d";

export const fetchUser = async (username, password) => {
    return await axios.post(`${API_BASE_URL}/auth/login`, {
        username,
        password,
    });
}

export const getUser = async () => {
    return await axios.get(`${API_BASE_URL}/users/${id}`);
}

export const registerUser = async ( firstname, lastname, ciut, username, password) => {
    return await axios.post(`${API_BASE_URL}/auth/signup`, {
        firstname,
        lastname,
        ciut,
        username,
        password,
    });
}
