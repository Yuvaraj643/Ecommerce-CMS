// src/components/TableDataCell.jsx
import React from 'react';

const TableDataCell = ({ children }) => {
  return (
    <td className="border border-gray-300 p-2">
      {children}
    </td>
  );
};

export default TableDataCell;
