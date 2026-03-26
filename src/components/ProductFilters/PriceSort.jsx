import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const PriceSort = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSortChange = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative p-4 flex items-center justify-center bg-white rounded-lg shadow-md">
      <motion.div animate={isOpen ? "open" : "closed"} className="relative w-full">
        <button
          onClick={handleToggle}
          className="flex items-center justify-between w-full px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
        >
          <span className="font-medium text-sm">Sort by Price</span>
          <motion.span variants={iconVariants} className="text-xl">
            <FiChevronDown />
          </motion.span>
        </button>

        {isOpen && (
          <motion.ul
            initial={wrapperVariants.closed}
            animate="open"
            variants={wrapperVariants}
            className="p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] transform -translate-x-1/2 w-full sm:w-48"
          >
            <li
              onClick={() => handleSortChange("lowToHigh")}
              className="p-2 text-sm cursor-pointer hover:bg-indigo-100 rounded-md transition-colors"
            >
              Low to High
            </li>
            <li
              onClick={() => handleSortChange("highToLow")}
              className="p-2 text-sm cursor-pointer hover:bg-indigo-100 rounded-md transition-colors"
            >
              High to Low
            </li>
          </motion.ul>
        )}
      </motion.div>
    </div>
  );
};

export default PriceSort;

const wrapperVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    scaleY: 0,
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