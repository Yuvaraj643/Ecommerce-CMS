// src/Products.jsx
import React, { useEffect, useState } from 'react';
import ProductList from '../../components/Products/ProductsList';
import { useNavigate } from 'react-router-dom';
import { deleteProduct, fetchProducts, toggleProductStatus } from '../../store/ProductStore';
import { toast } from 'react-toastify';
import Loader from '../../components/common/Loader';

const Products = () => {
  const [loader, setLoader] = useState(true);
  const [products , setProducts] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    try{
      setLoader(true)
      const response =await fetchProducts();
      setProducts(response?.list)
    } catch(error){
      toast.error(error)
    } finally{
      setLoader(false)
    }
  };


  const handleDelete = async(id) => {
    setLoader(true)
    try {
      const res = await deleteProduct(id);
      if(res?.success === true)
        getProductsList();
    } catch (error) {
      console.error("Failed to toggle product status:", error);
    }
    setLoader(false)
  };

  const handleEdit = (id) => {
    navigate(`/products/add-product?id=${id}`)
  };

  const handleAddProduct = () => {
    // Logic to add a product will be implemented here
    navigate('add-product');
  };

  const handleToggleStatus = async (prd_id,currentStatus) => {
    setLoader(true)
    try {
      const res = await toggleProductStatus(prd_id,!currentStatus);
      if(res.success === true)
        getProductsList();
    } catch (error) {
      console.error("Failed to toggle product status:", error);
    }
    setLoader(false)
  };


  return (
    <>
    {loader && <Loader />}
    <div className="w-full p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Manage Products</h2>
        <button
          onClick={handleAddProduct}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition duration-200"
        >
          <span className="mr-2">+</span> Add Product
        </button>
      </div>
      {products?.length > 0 && <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} onToggleStatus={handleToggleStatus} />}
    </div>
    </>
  );
};

export default Products;
