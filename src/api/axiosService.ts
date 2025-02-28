import axios, { AxiosInstance } from "axios";

const axiosService: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
});

export default axiosService;