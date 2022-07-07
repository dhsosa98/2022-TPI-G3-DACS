import Axios from "../config/axios"
import { API_BASE_URL } from "../vite-env.d"
import axios from "axios";

export const createTicket = async (seat, depurateDate, returnDate, travelWayId, amount) => {
    const response = await Axios.post(API_BASE_URL+"/tickets", {
        seat,
        depurateDate,
        returnDate,
        travelWayId,
        amount,
    });
    return response.data;
}

export const getTicketById = async (id) => {
    const response = await Axios.get(API_BASE_URL+"/tickets/"+id);
    return response.data;
}

export const updateTicket = async (seat, depurateDate, returnDate, travelWayId, amount, id) => {
    const response = await Axios.patch(API_BASE_URL+"/tickets/"+id, {
        seat,
        depurateDate,
        returnDate,
        travelWayId,
        amount,
    });
    return response.data;
}

export const getTickets = async () => {
    const response = await Axios.get(API_BASE_URL+"/tickets");
    return response.data;
}

export const deleteTicket = async (id) => {
    const response = await Axios.delete(API_BASE_URL+"/tickets/"+id);
    return response.data;
}