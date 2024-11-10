import React from 'react'
import Image from 'next/image';
import CategorySection from '../components/sections/CatgorySection';
import BookTripSection from '../components/sections/BookTripSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import NavBar from '../components/common/NavBar';

const HotelPage = () => {
  return (
    <>
      <div className="relative poppins  md:px-[9rem]">
      <NavBar/>
      </div>
         <div className="relative pt-[8rem] px-[9rem]">
          <CategorySection />
          <div className="absolute top-0 right-0">
            <Image
              src="/images/plusbg.png"
              alt="blob background shape"
              width={153}
              height={166}
            />
          </div>
        </div>
        <main className=' px-[9rem]   pt-[12rem]'>
        <BookTripSection />
       
        </main>
       <div className='px-[9rem]   p-[7rem]'>
       <TestimonialSection/>
       </div>
       
    </>
  )
}

export default HotelPage;