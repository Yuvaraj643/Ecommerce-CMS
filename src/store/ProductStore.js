import { toast } from 'react-toastify';
import httpClient from '../utils/httpClient';

export const fetchProducts = async () => {
    try {
        const response = await httpClient.get(`/cms/products`);
        return response.data;
    } catch (error) {
        toast.error('Error fetching products')
        throw error;
    }
};

export const createProduct = async (payload) => {
    try {
        const response = await httpClient.post(`/cms/products/add`, payload);
        return response.data;
    } catch (error) {
        toast.error('Error creating product')
    }
};

export const toggleProductStatus = async (prd_id,currentStatus) => {
    try {
      const response = await httpClient.patch(`/cms/products/${prd_id}/status`,{ enabled : currentStatus});
      if(response.data?.success === true)
        toast.success(response?.data?.message);
      return response.data
    } catch (error) {
      toast.error('Error updating product status');
    }
};

export const deleteProduct = async (prd_id) => {
    try{
        const response = await httpClient.delete(`/cms/products/delete/${prd_id}`)
        if(response.data?.success === true)
            toast.success(response?.data?.message);
        return response.data
    } catch (error) {
        toast.error('Error Updating Product status');
    }
}

export const getProductDetails = async (prd_id) => {
    try{
        const response = await httpClient.get(`/products/${prd_id}`)
        return response.data
    } catch (error) {
        toast.error('Error while retreiving Product Details')
    }
}

export const updateProduct = async (payload) => {
    try{
        const response = await httpClient.put(`/cms/products/update/${payload.id}`,payload.productData)
        if(response.data?.success === true)
            toast.success(response?.data?.message);
        return response.data
    } catch (error) {
        toast.error('Error Updating the Product')
    }
}

// Add more functions as needed
