// src/ProductForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../common/InputField';
import TextAreaField from '../common/TextAreaField';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  price: yup.number().positive('Price must be a positive number').required('Price is required'),
  stock: yup.number().min(0, 'Stock must be 0 or more').required('Stock is required'),
  description: yup.string().required('Description is required'),
  thumbnail: yup.mixed().required('Thumbnail is required'),
});

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [imageUrl,setImageUrl] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    formData.set("thumbnail", imageUrl);
    const productData = {
      name: formData.get('name'),
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
      description: formData.get('description'),
      thumbnail: imageUrl
    };
    console.log(productData,"productData")
    try {
      const response = await axios.post('http://localhost:5000/api/cms/products/add', productData);
      if (!response.ok) throw new Error('Failed to add product');
      const newProduct = await response.json();
      state.products.push(newProduct);
    } catch (err) {
      state.error = err.message;
    }
  };

  const uploadImage = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
    fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Product Name"
          {...register('name')}
          error={errors.name?.message}
          type="text"
        />
{/*         
        <InputField
          label="Category"
          {...register('category')}
          error={errors.category?.message}
          type="text"
        /> */}
        
        <InputField
          label="Price"
          {...register('price')}
          error={errors.price?.message}
          type="number"
        />

        <InputField
          label="Stock"
          {...register('stock')}
          error={errors.stock?.message}
          type="number"
        />

        <TextAreaField
          label="Description"
          {...register('description')}
          error={errors.description?.message}
          rows="3"
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
          <input
            // {...register('thumbnail')}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
              errors.thumbnail ? 'border-red-500' : ''
            }`}
            type="file"
            onChange={(e) => {
              uploadImage(e.target.files[0]);
            }}
          />
          {/* {errors.thumbnail && <p className="text-red-500 text-sm">{errors.thumbnail.message}</p>} */}
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
