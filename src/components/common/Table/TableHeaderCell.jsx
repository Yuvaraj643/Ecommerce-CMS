// src/components/TableHeaderCell.jsx
import React from 'react';

const TableHeaderCell = ({ children }) => {
  return (
    <th className="border border-gray-300 p-2 text-left">
      {children}
    </th>
  );
};


export default TableHeaderCell;
