import axios from 'axios';
import { toast } from 'react-toastify';

export const uploadImage = async (image) => {
  try {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const response = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, data);
    
    // Return the response data
    return response;
  } catch (error) {
    toast.error('Error uploading image');
    throw error;
  }
};
