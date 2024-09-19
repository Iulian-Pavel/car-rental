import axios from 'axios';

const axiosInstance  = axios.create({
    baseURL: 'http://localhost:3001'
});

axiosInstance.interceptors.request.use((config) => {
    console.log("Request sent to ", config.url);
    config.headers["Content-Type"] = "application/json";
    return config;
}, (error) => {
    console.log("Error during request: ", error);
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
    console.log("Repsonse received ", response);
    return response;
}, (error) => {
    console.log("Error while receiving response ", response);
    return Promise.reject(error);
});

export default axiosInstance;