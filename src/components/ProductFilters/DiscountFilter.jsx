import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";

const DiscountFilter = ({ onDiscountChange }) => {
  const [discount, setDiscount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const discountOptions = [10, 20, 30, 40, 50, 60];

  const handleDiscountChange = (selectedDiscount) => {
    setDiscount(selectedDiscount);
    onDiscountChange(selectedDiscount);
    setIsOpen(false); // Close dropdown after selecting an option
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
          <span className="font-medium text-sm">Discount: {discount}% or more</span>
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-xl">
            <RiArrowDropDownLine />
          </motion.span>
        </button>

        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={wrapperVariants}
            className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-10"
          >
            {discountOptions.map((option) => (
              <motion.button
                key={option}
                onClick={() => handleDiscountChange(option)}
                variants={itemVariants}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  discount === option ? "bg-blue-500 text-white" : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {option}% or more
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default DiscountFilter;

// Animation Variants
const wrapperVariants = {
  open: {
    scaleY: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  closed: {
    scaleY: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 0.2,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};