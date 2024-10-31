// src/ProductList.jsx
import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  
  return (
    <div>
      <h3 className="text-lg font-semibold">Product List</h3>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-200 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Product Name</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Stock</th>
              <th className="border border-gray-300 p-2">Actions</th>

            </tr>
          </thead>
          <tbody>
            {products.map((product,index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{product.name}</td>
                <td className="border border-gray-300 p-2">${product.price}</td>
                <td className="border border-gray-300 p-2">{product.stock}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => onEdit(product)}
                    className="bg-yellow-500 text-white py-1 px-2 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(product.id)}
                    className="bg-red-500 text-white py-1 px-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
