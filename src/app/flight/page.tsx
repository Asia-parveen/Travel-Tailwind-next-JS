import React from 'react'
import TopSellingSection from '../components/sections/TopSellingSection'
import LogoGroupSection from '../components/sections/LogoGroupSection'
import NewsLetterSection from '../components/sections/NewsLetterSection'
import NavBar from '../components/common/NavBar'

const FlightPage = () => {
  return (
    <>
      <div className="relative poppins  md:px-[9rem]">
      <NavBar/>
      </div>
        <main className='px-[9rem] pt-[8rem]'>
        <TopSellingSection />
        <LogoGroupSection />
       
        </main>
        <div className='px-[9rem] pt-[10rem]'>
        <NewsLetterSection />
        </div>
    </>
  )
}

export default FlightPage;