import Axios from "../config/axios";

export const getBookings = async (id) => {
    const response = await Axios.get(`${API_BASE_URL}/bookings/${id}`);
    return response.data;
}