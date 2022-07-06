import axios from 'axios';
import { API_BASE_URL } from '../vite-env.d';

export const getShows = async () => {
    const response = await axios.get(`${API_BASE_URL}/shows?limit=8`);
    return response.data;
}

export const getShow = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/shows/${id}`);
    return response.data;
}

