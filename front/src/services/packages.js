import axios from "axios";
import { API_BASE_URL } from "../vite-env.d";

export const getPackages = async (page, size) => {
  const response = await axios.get(`${API_BASE_URL}/packages`+"?page="+(page+1)+"&limit="+size);
  return response.data;
};

export const getPackage = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/packages/${id}`);
  return response.data;
};

export const deletePackage = async (id) => {
  const response = await Axios.delete(API_BASE_URL+"/packages/"+id);
  return response.data;
}