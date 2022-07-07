import Axios from "../config/axios"
import { API_BASE_URL } from "../vite-env.d"
import axios from "axios";

export const createHotel = async (name, address, phone) => {
    const response = await Axios.post(API_BASE_URL+"/hotels", {
        name,
        address,
        phone,
    });
    return response.data;
}

export const getHotelById = async (id) => {
    const response = await Axios.get(API_BASE_URL+"/hotels/"+id);
    return response.data;
}

export const updateHotel = async (name, address, phone, id) => {
    const response = await Axios.patch(API_BASE_URL+"/hotels/"+id, {
        name,
        address,
        phone,
    });
    return response.data;
}

export const getHotels = async () => {
    const response = await Axios.get(API_BASE_URL+"/hotels");
    return response.data;
}

export const deleteHotel = async (id) => {
    const response = await Axios.delete(API_BASE_URL+"/hotels/"+id);
    return response.data;
}