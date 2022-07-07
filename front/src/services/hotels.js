import axios from 'axios';
import { API_BASE_URL } from '../vite-env.d';

export const getHotels = async () => {
    const response = await axios.get(`${API_BASE_URL}/hotels?limit=12`);
    return response.data;
}

export const getHotel = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/hotels/${id}`);
    return response.data;
}

