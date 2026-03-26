import React from 'react';
import PrimaryButton from '../Home/PrimaryButton.jsx';

const Hero = () => {
  return (
    <div className='relative z-[-1] bg-gradient-to-r from-cyan-100 via-violet-200 to-fuchsia-300'>
      <div className="container mx-auto py-16 sm:py-0 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          <div className='space-y-7 text-dark order-2 sm:order-1'>
            <h1 data-aos="fade-up" className='text-md'>
            You have brains in your head.  <span className='text-cyan-400 font-cursive text-4xl'>You have feet in your shoes.</span>  You can steer yourself in any direction you choose. You're on your own, and you know what you know. And you are the guy who'll decide where to go.
            </h1>
            <p data-aos="fade-up" className='lg:pr-64 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex a obcaecati iusto ad expedita provident ea asperiores placeat quas!
            </p>
            <div data-aos="fade-up" data-aos-delay="500">
              <PrimaryButton />
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500" className='relative z-30 order-1 sm:order-2'>
            <img src="https://th.bing.com/th/id/R.bb24e131e7b8c80565efd50e07658682?rik=H6VAKnl3Fg7vrw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png-sneaker-png-file-2500.png&ehk=hvQqGczjlxxqAq4A43bn3VJBmvSKbE9D497SKJ31nmw%3d&risl=&pid=ImgRaw&r=0"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

