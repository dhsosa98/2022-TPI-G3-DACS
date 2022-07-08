import Axios from "../config/axios";
import { API_BASE_URL } from "../vite-env.d";

export const createSales = async (sale) => {
    const response = await Axios.post(API_BASE_URL+"/sales", sale);
    return response.data;
}