import Axios from "../config/axios"
import { API_BASE_URL } from '../vite-env.d';

export const createUser = async (name) => {
    const response = await Axios.post(API_BASE_URL+"/users", {
        firstName,
        lastName,
        cuit,
        email,
        roleId,
    });
    return response.data;
}

export const getUserById = async (id) => {
    const response = await Axios.get(API_BASE_URL+"/users/"+id);
    return response.data;
}

export const updateUser = async (firstName, lastName, cuit, email, roleId) => {
    const response = await Axios.patch(API_BASE_URL+"/users/"+id, {
        firstName,
        lastName,
        cuit,
        email,
        roleId,
    });
    return response.data;
}

export const getUsers = async () => {
    const response = await Axios.get(API_BASE_URL+"/users");
    return response.data;
}

export const deleteUser = async (id) => {
    const response = await Axios.delete(API_BASE_URL+"/users/"+id);
    return response.data;
}