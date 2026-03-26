import React from 'react';
import { FaBus } from 'react-icons/fa6';

const WhyChoose = () => {
    return (
        <div className='py-14 md:py-28 bg-gray-50'>
            <div className='container mx-auto max-w-screen-xl px-4'>
                {/* heading section */}
                <h1 data-aos="fade-up" data-aos-delay="300" className='pb-16 tracking-wider text-2xl font-semibold text-dark text-center'>Why Choose Us</h1>

                {/* card section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                        {/* 1st card */}
                        <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                            <p data-aos="fade-up" data-aos-delay="300" className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quaerat voluptatem, neque maiori.</p>
                            <p className='text-5xl rotate-90 text-pink-400 text-center translate-x-5'>....</p>
                            <FaBus className='text-5xl text-pink-400' />
                        </div>

                        {/* 2nd card */}
                        <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                            <FaBus className='text-5xl text-cyan-400' />
                            <p className='text-5xl rotate-90 text-cyan-400 text-center translate-x-5'>....</p>
                            <p data-aos="fade-up" data-aos-delay="300" className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quaerat voluptatem, neque maiori.</p>
                        </div>

                        {/* 3rd card */}
                        <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                            <p data-aos="fade-up" data-aos-delay="300" className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quaerat voluptatem, neque maiori.</p>
                            <p className='text-5xl rotate-90 text-pink-400 text-center translate-x-5'>....</p>
                            <FaBus className='text-4xl text-pink-400' />
                        </div>

                        {/* 4th card */}
                        <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                            <FaBus className='text-5xl text-cyan-400' />
                            <p className='text-5xl rotate-90 text-cyan-400 text-center translate-x-5'>....</p>
                            <p data-aos="fade-up" data-aos-delay="300" className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quaerat voluptatem, neque maiori.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;

