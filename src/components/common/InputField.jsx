// src/InputField.jsx
import React from 'react';

const InputField = React.forwardRef(({ label, error, ...props }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        ref={ref}
        className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none px-3 py-2 text-lg"
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
});

export default InputField;
