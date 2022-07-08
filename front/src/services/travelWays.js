import Axios from "../config/axios"
import { API_BASE_URL } from '../vite-env.d';

export const createTravelWay = async (name) => {
    const response = await Axios.post(API_BASE_URL+"/travelWays", {
        name,
    });
    return response.data;
}

export const getTravelWayById = async (id) => {
    const response = await Axios.get(API_BASE_URL+"/travelWays/"+id);
    return response.data;
}

export const updateTravelWay = async (name, id) => {
    const response = await Axios.patch(API_BASE_URL+"/travelWays/"+id, {
        name,
    });
    return response.data;
}

export const getTravelWays = async () => {
    const response = await Axios.get(API_BASE_URL+"/travelWays");
    return response.data;
}

export const deleteTravelWay = async (id) => {
    const response = await Axios.delete(API_BASE_URL+"/travelWays/"+id);
    return response.data;
}