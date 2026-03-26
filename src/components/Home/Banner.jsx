import React from 'react';
import PrimaryButton from '../Home/PrimaryButton';

const Banner = () => {
  return (
    <div className='container mx-auto py-14 relative px-4'>
      <h1 data-aos="fade-up" data-aos-delay="300" className='py-8 tracking-wider text-2xl sm:text-4xl font-semibold text-dark text-center'>
        Thought About our product!?
      </h1>
      <div data-aos="fade-up" data-aos-delay="500" className='space-y-10'>
        
        {/* First Section: Verified Products */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
          <div className="flex flex-col justify-center">
            <p>
              We know that <span className='text-pink-400'>time Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt odio asperiores iusto mollitia pariatur cum nobis porro recusandae quos.</span> is the greatest value in the modern world... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea velit ducimus magnam veritatis nulla similique rem ratione reiciendis, minima possimus alias fugit esse sunt libero, deserunt modi neque, quae nam id ab. Quod esse error dicta maiores nihil quaerat nam?
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://th.bing.com/th/id/R.43406940fb961c5b7972e5bdfead7e40?rik=f1m4tAlgQP61Fg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fcertified%2fcertified_PNG24.png&ehk=ryfDcDg8VCgJUu3RTo4pxGh0zjUTokIWTw2FwGfolAQ%3d&risl=&pid=ImgRaw&r=0" // replace with your verified products image URL
              alt="Verified Products"
              className="rounded-lg shadow-md h-[260px] w-[300px]"
            />
          </div>
        </div>
        
        {/* Second Section: User's Choice */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
          <div className="flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/195/633/original/premium-quality-badge-with-blue-and-gold-color-png.png" // replace with your user's choice image URL
              alt="User's Choice"
              className="rounded-lg shadow-md h-[260px] w-[300px] "
            />
          </div>
          <div className="flex flex-col justify-center">
            <p>
              We know that <span className='text-pink-400'>time</span> is the greatest value in the modern world... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut laboriosam distinctio, molestiae omnis harum quos voluptas dignissimos nobis assumenda facere voluptatem earum nam at soluta voluptates pariatur. Alias, quis provident!
            </p>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div data-aos="fade-up" data-aos-delay="300" className='flex justify-center mt-10 md:mt-14'>
        <PrimaryButton />
      </div>
    </div>
  );
}

export default Banner;
