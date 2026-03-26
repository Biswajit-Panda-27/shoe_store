import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const PrimaryButton = () => {
    return (
        <div className='flex items-center group'>
            <button className='bg-pink-400 h-10 text-white px-3 py-2 cursor-pointer'>
                Pick your product according to your personality...
            </button>
            <FaArrowRight className='inline-block group-hover:translate-x-2 duration-200 p-2 text-base h-10 w-10 bg-pink-600 text-white cursor-pointer' />
        </div>
    );
};

export default PrimaryButton;
