import axios from 'axios';
import { API_BASE_URL } from '../vite-env.d';

export const getTravelWays = async () => {
    const response = await axios.get(`${API_BASE_URL}/travelways?limit=4`);
    return response.data;
}

export const getTravelWay = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/travelways/${id}`);
    return response.data;
}

