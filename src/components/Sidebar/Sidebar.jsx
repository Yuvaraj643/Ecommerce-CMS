import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-xl font-semibold mb-4">CMS</h2>
      <ul>
        <li className="mb-2">
          <a href="/dashboard" className="hover:bg-gray-700 block p-2 rounded">Dashboard</a>
        </li>
        <li className="mb-2">
          <a href="/products" className="hover:bg-gray-700 block p-2 rounded">Products</a>
        </li>
        <li className="mb-2">
          <a href="/categories" className="hover:bg-gray-700 block p-2 rounded">Categories</a>
        </li>
        <li className="mb-2">
          <a href="/orders" className="hover:bg-gray-700 block p-2 rounded">Orders</a>
        </li>
        <li className="mb-2">
          <a href="/users" className="hover:bg-gray-700 block p-2 rounded">Users</a>
        </li>
        <li className="mb-2">
          <a href="/settings" className="hover:bg-gray-700 block p-2 rounded">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
