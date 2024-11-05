import { toast } from 'react-toastify';
import httpClient from '../utils/httpClient'; 

// Login function to authenticate user
export const login = async (payload) => {
    try {
        // Send login request to the backend
        const response = await httpClient.post('/auth/admin-login', payload);
        if(response.data.success === true){
            const token  = response.data.token;
            toast.success(response.data.message);
            localStorage.setItem('token', token);
            localStorage.setItem('userRole', response.data.user.role);
        }
        return response.data;

    } catch (error) {
        // Handle errors (e.g., wrong credentials, server errors)
        toast.error('Login failed: ' + (error.response?.data?.error || 'An error occurred'));
        throw error;
    }
};

// Logout function to clear authentication data
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    // Optionally, redirect the user to a login page or homepage
};
