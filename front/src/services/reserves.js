import Axios from "../config/Axios";
import { API_BASE_URL } from "../vite-env.d";

export const getBookings = async () => {
  const response = await Axios.get(API_BASE_URL + "/reserves?limit=100");
  return response.data;
};

export const getBooking = async (id) => {
  const response = await Axios.get(`${API_BASE_URL}/reserves/${id}`);
  return response.data;
};

export const deleteBooking = async (id) => {
  const response = await Axios.delete(API_BASE_URL + "/reserves/" + id);
  return response.data;
};

export const createBooking = async (id) => {
  const response = await Axios.post(API_BASE_URL + "/reserves", {
    packageId: Number(id),
  });
  return response.data;
};
