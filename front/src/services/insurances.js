import Axios from "../config/axios"
import { API_BASE_URL } from "../vite-env.d"

export const createInsurance = async (name, amount) => {
    const response = await Axios.post(API_BASE_URL+"/insurances", {
        name,
        amount,
    });
    return response.data;
}

export const getInsuranceById = async (id) => {
    const response = await Axios.get(API_BASE_URL+"/insurances/"+id);
    return response.data;
}

export const updateInsurance = async (name, amount, id) => {
    const response = await Axios.patch(API_BASE_URL+"/insurances/"+id, {
        name,
        amount,
    });
    return response.data;
}

export const getInsurances = async () => {
    const response = await Axios.get(API_BASE_URL+"/insurances");
    return response.data;
}

export const deleteInsurance = async (id) => {
    const response = await Axios.delete(API_BASE_URL+"/insurances/"+id);
    return response.data;
}