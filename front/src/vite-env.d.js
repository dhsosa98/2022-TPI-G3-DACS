const API_PORT = import.meta.env.VITE_API_PORT || 4000;
let  API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `http://localhost:${API_PORT}/api`;
if (import.meta.env.PROD){
    API_BASE_URL = `/api`;
}
export { API_BASE_URL };



