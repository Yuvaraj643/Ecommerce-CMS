// src/Login.jsx
import React from 'react';

const Login = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login Page</h1>
      <form>
        <div>
          <label className="block">Email:</label>
          <input type="email" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Password:</label>
          <input type="password" className="border p-2 w-full" />
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 mt-4">Login</button>
      </form>
    </div>
  );
};

export default Login;
