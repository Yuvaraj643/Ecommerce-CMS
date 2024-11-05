import { toast } from 'react-toastify';
import httpClient from '../utils/httpClient'; 

// Login function to authenticate user
export const login = async (email, password) => {
    try {
        // Send login request to the backend
        const response = await httpClient.post('/api/auth/admin-login', {
            email,
            password
        });
        const { token } = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('userRole', response.data.user.role);
        return response.data;

    } catch (error) {
        // Handle errors (e.g., wrong credentials, server errors)
        toast.error('Login failed: ' + (error.response?.data?.error || 'An error occurred'));
        throw error;
    }
};

// Logout function to clear authentication data
export const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    // Optionally, redirect the user to a login page or homepage
};
