import Axios from '../config/Axios';
import { API_BASE_URL } from '../vite-env.d';

export const getTickets = async () => {
    const response = await Axios.get(API_BASE_URL +"/tickets");
    return response.data;
}

export const getTicket = async (id) => {
    const response = await Axios.get(`${API_BASE_URL}/tickets/${id}`);
    return response.data;
}

export const deleteTicket = async (id) => {
    const response = await Axios.delete(API_BASE_URL+"/tickets/"+id);
    return response.data;
}