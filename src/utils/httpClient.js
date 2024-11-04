// src/http/httpClient.js
import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create an axios instance with default settings
const httpClient = axios.create({
    baseURL: API_BASE_URL,
});

// Add a request interceptor to set common headers
httpClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // or however you manage tokens
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        toast.error('Error with the request');
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle errors
httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const errorMessage = error.response?.data?.message || 'An error occurred';
        toast.error(errorMessage);
        return Promise.reject(error);
    }
);

export default httpClient;
