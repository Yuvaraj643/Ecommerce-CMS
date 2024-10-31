// src/InputField.jsx
import React from 'react';

const InputField = React.forwardRef(({ label, error, ...props }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        ref={ref}
        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
          error ? 'border-red-500' : ''
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
});

export default InputField;
