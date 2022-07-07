import Axios from '../config/Axios';
import { API_BASE_URL } from '../vite-env.d';

export const getUsers = async () => {
    const response = await Axios.get(API_BASE_URL +"/users");
    return response.data;
}

export const getUser = async (id) => {
    const response = await Axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
}

export const deleteUser = async (id) => {
    const response = await Axios.delete(API_BASE_URL+"/users/"+id);
    return response.data;
}