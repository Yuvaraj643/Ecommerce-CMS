// src/Signup.jsx
import React from 'react';

const Signup = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Signup Page</h1>
      <form>
        <div>
          <label className="block">Name:</label>
          <input type="text" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Email:</label>
          <input type="email" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Password:</label>
          <input type="password" className="border p-2 w-full" />
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 mt-4">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
