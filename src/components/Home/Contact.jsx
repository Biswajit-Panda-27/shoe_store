import React from 'react';
import { FaPhone, FaRegCopyright } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="300" className='text-white mt-20 p-10'>
      <div className='container mx-auto bg-pink-600 rounded-3xl px-4 py-10'>
        <h1 className='text-3xl font-bold text-yellow-50 text-center'>Contact Us</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6 mt-10'>
          <div className='text-center space-y-4'>
            <div className='flex justify-center'>
              <IoLocationSharp className='text-5xl'/>
            </div>
            <p>#92, 3rd Main, Patia, Post, <br/> Infocity, Bhubaneswar, 754021</p>
          </div>
          <div className='text-center space-y-4'>
            <div className='flex justify-center'>
              <MdEmail className='text-5xl'/>
            </div>
            <p>info@goodfood.com</p>
            <p>hr@goodfood.com</p>
          </div>
          <div className='text-center space-y-4'>
            <div className='flex justify-center'>
              <FaPhone className='text-5xl'/>
            </div>
            <p>+91 7809931447 - Whatsapp</p>
            <p>+91 7809931447 - Hiring Queries</p>
            <p>+91 7809931447 - Sales and Services</p>
          </div>
        </div>
        <div className='flex justify-between p-4 items-center'>
          <p className='flex'><FaRegCopyright className='mr-1'/> 2022, ALL rights reserved</p>
          <div className='flex items-center gap-6'>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
