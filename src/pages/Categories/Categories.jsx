// src/Products.jsx
import React, { useState } from 'react';
import ProductList from '../../components/Products/ProductsList';

const Categories = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    // Add more sample products if needed
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (product) => {
    // Logic to edit the product will be implemented here
    alert(`Editing product: ${product.name}`);
  };

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Products</h2>
      <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Categories;
