import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const PriceRangeFilter = ({ onPriceRangeChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = () => {
    onPriceRangeChange({ minPrice, maxPrice });
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative p-4 flex items-center justify-center bg-white rounded-lg shadow-md">
      <motion.div animate={isOpen ? "open" : "closed"} className="relative w-full">
        <button
          onClick={handleToggle}
          className="flex items-center justify-between w-full px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
        >
          <span className="font-medium text-sm">Price Range</span>
          <motion.span variants={iconVariants} className="text-xl">
            <FiChevronDown />
          </motion.span>
        </button>

        {isOpen && (
          <motion.div
            initial={wrapperVariants.closed}
            animate="open"
            variants={wrapperVariants}
            className="p-4 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] transform -translate-x-1/2 w-full sm:w-64"
          >
            <div className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Min: ₹{minPrice}</label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="10"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full mt-1 appearance-none h-2 bg-gray-300 rounded-full focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Max: ₹{maxPrice}</label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full mt-1 appearance-none h-2 bg-gray-300 rounded-full focus:outline-none"
                />
              </div>
            </div>
            <button
              onClick={handleFilter}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Apply Filter
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PriceRangeFilter;

const wrapperVariants = {
  open: {
    scaleY: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};