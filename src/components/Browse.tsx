'use client'
import Image from 'next/image'
import React from 'react'

const Browse = () => {
  return (
    <>

      <div className="w-full max-w-screen-xl h-auto rounded-[40px] mx-auto bg-[#F0F0F0] p-6"><br />
        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl flex justify-center mb-6'>
          BROWSE BY DRESS STYLE
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          
          <div className="w-full sm:w-[407px] sm:h-[289px] md:w-[407px] md:h-[289px]">
            <Image 
              src={'/images/browse-img1.png'} 
              alt='Browse 1' 
              width={407} 
              height={289} 
              className='rounded-[20px]'
            />
          </div>

          <div className="w-full sm:w-[684px] sm:h-[289px] md:w-[684px] md:h-[289px]">
            <Image 
              src={'/images/browse-img2.png'} 
              alt='Browse 2' 
              width={684} 
              height={289} 
              className='rounded-[20px]'
            />
          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-6">

          {/* Second Row */}
          <div className="w-full sm:w-[684px] sm:h-[289px] md:w-[684px] md:h-[289px]">
            <Image 
              src={'/images/browse-img3.png'} 
              alt='Browse 3' 
              width={684} 
              height={289} 
              className='rounded-[20px]'
            />
          </div>

          <div className="w-full sm:w-[407px] sm:h-[289px] md:w-[407px] md:h-[289px]">
            <Image 
              src={'/images/browse-img4.png'} 
              alt='Browse 4' 
              width={407} 
              height={289} 
              className='rounded-[20px]'
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Browse
