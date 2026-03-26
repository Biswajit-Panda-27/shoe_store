import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const RatingFilter = ({ onRatingChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative p-4 flex items-center justify-between bg-white rounded-lg shadow-lg">
      <motion.div animate={open ? "open" : "closed"} className="relative w-full">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-between w-full px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
        >
          <span className="font-medium text-sm">Filter by Rating</span>
          <motion.span variants={iconVariants} className="text-xl">
            <FiChevronDown />
          </motion.span>
        </button>

        {open && (
          <motion.ul
            initial={wrapperVariants.closed}
            animate={open ? "open" : "closed"}
            variants={wrapperVariants}
            className="p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-full sm:w-48 overflow-hidden"
            style={{ originY: "top", translateX: "-50%" }}
          >
            <Option setOpen={setOpen} onSelect={() => onRatingChange(0)} text="All Ratings" />
            <Option setOpen={setOpen} onSelect={() => onRatingChange(5)} text="5 Stars" />
            <Option setOpen={setOpen} onSelect={() => onRatingChange(4)} text="4 Stars & Up" />
            <Option setOpen={setOpen} onSelect={() => onRatingChange(3)} text="3 Stars & Up" />
          </motion.ul>
        )}
      </motion.div>
    </div>
  );
};

const Option = ({ text, onSelect, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        onSelect();
        setOpen(false);
      }}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium text-slate-700 whitespace-nowrap rounded-md hover:bg-indigo-100 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <span>{text}</span>
    </motion.li>
  );
};

export default RatingFilter;

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

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
