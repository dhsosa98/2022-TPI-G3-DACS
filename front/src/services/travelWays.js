import axios from 'axios';
import { API_BASE_URL } from '../vite-env.d';

export const getTravelWays = async () => {
    const response = await axios.get(`${API_BASE_URL}/travelWays?limit=4`);
    return response.data;
}

export const getTravelWay = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/travelWays/${id}`);
    return response.data;
}

