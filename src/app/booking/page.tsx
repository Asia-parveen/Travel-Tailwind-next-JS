import React from 'react'
import TopSellingSection from '../components/sections/TopSellingSection'
import Hero from '../components/sections/Hero'
import BookTripSection from '../components/sections/BookTripSection'
import NavBar from '../components/common/NavBar'

const BookingPage = () => {
  return (
    <>
      <div className="relative poppins  md:px-[9rem]">
      <NavBar/>
      </div> 
        <main className='px:[2rem]  md:px-[9rem] pt-[7rem]'>
            <Hero/>
        </main>
        <div className='px-[9rem] pt-[5rem]'>
        <TopSellingSection />
        
        </div>
        <div className='px-[9rem] pt-[7rem]'>
        <BookTripSection />
        </div>
    </>
  )
}

export default BookingPage;
        
       
       
           

        
         