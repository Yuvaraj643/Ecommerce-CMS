// src/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 flex-1 min-w-[250px]">
        <h2 className="text-xl font-semibold">Total Products</h2>
        <p className="text-3xl font-bold mt-2">150</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 flex-1 min-w-[250px]">
        <h2 className="text-xl font-semibold">Total Orders</h2>
        <p className="text-3xl font-bold mt-2">75</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 flex-1 min-w-[250px]">
        <h2 className="text-xl font-semibold">Total Users</h2>
        <p className="text-3xl font-bold mt-2">200</p>
      </div>
    </div>
  );
};

export default Dashboard;
