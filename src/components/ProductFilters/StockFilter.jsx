// StockFilter.jsx
import React from "react";

const StockFilter = ({ onStockChange }) => {
  return (
    <div>
      <label>In Stock Only:</label>
      <input type="checkbox" onChange={(e) => onStockChange(e.target.checked)} />
    </div>
  );
};

export default StockFilter;
