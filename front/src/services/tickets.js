import Axios from "../config/axios";
import { API_BASE_URL } from "../vite-env.d";

export const createTicket = async (
  seat,
  departureDate,
  returnDate,
  travelWayId,
  amount
) => {
  const response = await Axios.post(API_BASE_URL + "/tickets", {
    seat,
    departureDate,
    returnDate,
    travelWayId,
    amount,
  });
  return response.data;
};

export const getTicketById = async (id) => {
  const response = await Axios.get(API_BASE_URL + "/tickets/" + id);
  return response.data;
};

export const updateTicket = async (
  seat,
  departureDate,
  returnDate,
  travelWayId,
  amount,
  id
) => {
  const response = await Axios.patch(API_BASE_URL + "/tickets/" + id, {
    seat,
    departureDate,
    returnDate,
    travelWayId,
    amount,
  });
  return response.data;
};

export const getTickets = async (page = 0, size = 12) => {
  const response = await Axios.get(
    API_BASE_URL + "/tickets?" + "page=" + (page + 1) + "&limit=" + size
  );
  return response.data;
};

export const deleteTicket = async (id) => {
  const response = await Axios.delete(API_BASE_URL + "/tickets/" + id);
  return response.data;
};
