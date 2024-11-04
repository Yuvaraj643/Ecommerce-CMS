// src/ProductList.jsx
import React from 'react';
import TableHeaderCell from '../common/Table/TableHeaderCell';
import TableDataCell from '../common/Table/TableDataCell';

const ProductList = ({ products, onEdit, onDelete, onToggleStatus }) => {
  return (
    <div className="overflow-x-auto">
      <h3 className="text-lg font-semibold mb-4">Product List</h3>
      {products.length === 0 ? (
        <p className="mt-4 text-gray-600">No products available.</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-200 mt-4 rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <TableHeaderCell>Product Name</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Stock</TableHeaderCell>
              <TableHeaderCell>Edit</TableHeaderCell>
              <TableHeaderCell>Delete</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                <TableDataCell>{product.name}</TableDataCell>
                <TableDataCell>${product.price}</TableDataCell>
                <TableDataCell>{product.stock}</TableDataCell>
                <TableDataCell>
                  <button
                    onClick={() => onEdit(product?.prd_id)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-200"
                  >
                    Edit
                  </button>
                </TableDataCell>
                <TableDataCell>

                  <button
                    onClick={() => onDelete(product.prd_id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </TableDataCell>
                <TableDataCell>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={product.enabled}
                    onChange={() => onToggleStatus(product.prd_id, product.enabled)}
                    className="sr-only"
                  />
                  <div className={`w-10 h-5 rounded-full shadow-inner transition duration-300 ${product.enabled ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <div className={`dot absolute w-4 h-4 bg-white rounded-full shadow transition duration-300 transform ${product.enabled ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </label>
                </TableDataCell>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
