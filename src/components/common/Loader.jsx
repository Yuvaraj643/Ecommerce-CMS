// src/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
      <div className="loader border-t-transparent border-solid border-4 rounded-full w-16 h-16 animate-spin border-blue-500"></div>
      <style jsx>{`
        .loader {
          border-top-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Loader;
