import axios from 'axios';
import { API_BASE_URL } from '../vite-env.d';

export const createShow = async (name, seat, dateShow, amount) => {
    const response = await Axios.post(API_BASE_URL+"/shows", {
        name,
        seat,
        dateShow,
        amount,
    });
    return response.data;
}

export const getShowById = async (id) => {
    const response = await Axios.get(API_BASE_URL+"/shows/"+id);
    return response.data;
}

export const updateShow = async (name, seat, dateShow, amount, id) => {
    const response = await Axios.patch(API_BASE_URL+"/shows/"+id, {
        name,
        seat,
        dateShow,
        amount,
    });
    return response.data;
}

export const getShows = async (id) => {
    const response = await Axios.get(API_BASE_URL+"/shows");
    return response.data;
}