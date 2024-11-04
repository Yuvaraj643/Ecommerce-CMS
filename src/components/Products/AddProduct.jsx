// src/ProductForm.jsx
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../common/InputField';
import TextAreaField from '../common/TextAreaField';
import { toast } from 'react-toastify';
import { createProduct, getProductDetails, updateProduct } from '../../store/ProductStore';
import { uploadImage } from '../../store/CommonStore';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loader from '../common/Loader';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  price: yup
    .number()
    .transform((value, originalValue) => (originalValue === "" ? undefined : value)) // Handle empty strings
    .positive('Price must be a positive number')
    .required('Price is required'),
  stock: yup
    .number()
    .transform((value, originalValue) => (originalValue === "" ? undefined : value)) // Handle empty strings
    .min(0, 'Stock must be 0 or more')
    .required('Stock is required'),
  discount: yup
    .number()
    .transform((value, originalValue) => (originalValue === "" ? undefined : value)) // Handle empty strings
    .min(0, 'Stock must be 0 or more')
    .required('Stock is required'),
  description: yup.string().required('Description is required'),
  // thumbnail: yup.mixed().required('Thumbnail is required'),
});

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [prdDetails, setProdDetails] = useState({})

  const [imgObj, setImgObj] = useState()
  const [imgPreview, setImgPreview] = useState();
  const [loader, setLoader] = useState(false)
  let [searchParams] = useSearchParams();
  const id = searchParams.get('id')
  const navigate = useNavigate()

  useEffect(() => {
    if (id)
      getDetails(id)
  }, [id])

  const getDetails = async (id) => {
    try {
      setLoader(true)
      const response = await getProductDetails(id)
      if (response?.success === true) {
        setProdDetails(response?.data)
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during fetching Product Details.")
    } finally {
      setLoader(false)
    }
  }

  const onSubmit = async (data) => {
    try {
      setLoader(true);
      // Upload the image and get the URL
      let response = imgObj ? await uploadImage(imgObj) : id
      if (response.data?.secure_url || id) {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });

        if (response.data?.secure_url) formData.set("thumbnail", response.data?.secure_url)
        const productData = {
          name: formData.get('name'),
          price: Number(formData.get('price')),
          stock: Number(formData.get('stock')),
          discount : Number(formData.get('discount')),
          description: formData.get('description'),
          thumbnail: response.data?.secure_url	 // Use the image URL here
        };
        if (response.data?.secure_url) productData.thumbnail = response.data?.secure_url
        const res = id ? await updateProduct({id,productData}) :  await createProduct(productData);
        if (res?.success === true) {
          toast.success(`Product ${id ? 'updated' : 'created'} successfully!`);
          navigate('/products')
        }
      } else {
        toast.error("Image upload failed, no URL received.");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during submission.");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (prdDetails) {
      reset({
        name: prdDetails.name,
        price: prdDetails.price,
        stock: prdDetails.stock,
        discount: prdDetails.discount,
        description: prdDetails.description,
        thumbnail: null, // Reset the thumbnail field; file input won't be pre-filled
      });
      setImgPreview(prdDetails.thumbnail);
    }
  }, [prdDetails, reset]);


  return (
    <div className="p-12 bg-white shadow-md rounded-lg mt-10 w-1/3">
      {loader && <Loader />}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Product Name"
          {...register('name')}
          error={errors.name?.message}
          type="text"
        />

        <InputField
          label="Price"
          {...register('price')}
          error={errors.price?.message}
          type="number"
        />

        <InputField
          label="Discount in Percentage"
          {...register('discount')}
          error={errors.discount?.message}
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

        {imgPreview ? (
          <>
            <img src={imgPreview} alt="Preview" className="h-32 w-32 object-cover" />
            <input
              {...register('thumbnail')}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.thumbnail ? 'border-red-500' : ''
                }`}
              type="file"
              onChange={(e) => {
                setImgObj(e.target.files[0]);
              }}
            />
          </>
        ) : (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
            <input
              {...register('thumbnail')}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.thumbnail ? 'border-red-500' : ''
                }`}
              type="file"
              onChange={(e) => {
                setImgObj(e.target.files[0]);
              }}
            />
            {errors.thumbnail && <p className="text-red-500 text-sm">{errors.thumbnail.message}</p>}
          </div>
        )}

        < button
          type="submit"
        className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
        Submit
      </button>
    </form>
    </div >
  );
};

export default ProductForm;
