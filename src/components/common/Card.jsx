// Card.js
import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4 flex-1">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">View Details</button>
    </div>
  );
};

export default Card;
