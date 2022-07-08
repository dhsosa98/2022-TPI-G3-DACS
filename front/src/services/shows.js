import { API_BASE_URL } from "../vite-env.d";
import Axios from "../config/axios";

export const createShow = async (name, seat, dateShow, amount) => {
  const response = await Axios.post(API_BASE_URL + "/shows", {
    name,
    seat,
    dateShow,
    amount,
  });
  return response.data;
};

export const getShowById = async (id) => {
  const response = await Axios.get(API_BASE_URL + "/shows/" + id);
  return response.data;
};

export const updateShow = async (name, seat, dateShow, amount, id) => {
  const response = await Axios.patch(API_BASE_URL + "/shows/" + id, {
    name,
    seat,
    dateShow,
    amount,
  });
  return response.data;
};

export const getShows = async (page = 0, size = 12) => {
  const response = await Axios.get(
    API_BASE_URL + "/shows" + "?page=" + (page + 1) + "&limit=" + size
  );
  return response.data;
};

export const deleteShow = async (id) => {
  const response = await Axios.delete(API_BASE_URL + "/shows/" + id);
  return response.data;
};
