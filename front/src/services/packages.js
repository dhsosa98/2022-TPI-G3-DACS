import Axios from "../config/axios"
import { API_BASE_URL } from "../vite-env.d"

export const createPackage = async (name, quantPeople, ticketId, hotelId, insurancesId, showId, total) => {
    const response = await Axios.post(API_BASE_URL+"/packages", {
      name, 
      quantPeople, 
      ticketId, 
      hotelId, 
      insurancesId, 
      showId, 
      total,
    });
    return response.data;
}

export const getPackageById = async (id) => {
    const response = await Axios.get(API_BASE_URL+"/packages/"+id);
    return response.data;
}

export const updatePackage = async (name, quantPeople, ticketId, hotelId, insurancesId, showId, total, id) => {
    const response = await Axios.patch(API_BASE_URL+"/packages/"+id, {
      name, 
      quantPeople, 
      ticketId, 
      hotelId, 
      insurancesId, 
      showId, 
      total,
    });
    return response.data;
}

export const getPackages = async () => {
  const response = await axios.get(`${API_BASE_URL}/packages?limit=100`);
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