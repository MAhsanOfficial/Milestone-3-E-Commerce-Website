import React from 'react'
import Image from 'next/image'
import { PiStarFourFill } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      
      <div className="w-full bg-[#F2F0F1] flex flex-col sm:flex-row h-auto sm:h-[663px]">

       
        <div className="w-full sm:w-[596px] p-6 sm:p-20 flex flex-col justify-center">
          <h1 className="font-black text-4xl sm:text-[60px] leading-[48px] sm:leading-[64px] w-full sm:w-[596px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-base sm:text-lg leading-[22px] text-gray-500 mt-4 w-full sm:w-[596px]">
            Browse through our diverse range of meticulously crafted garments, designed 
            to bring out your individuality and cater to your sense of style.
          </p>

          <PiStarFourFill className="w-10 h-10 sm:w-[56px] sm:h-[56px] ml-0 sm:ml-[620px] mt-4 sm:mt-8" />

          <button className="rounded-full text-white bg-black w-full sm:w-56 h-14 mt-6 sm:mt-8 hover:bg-slate-900">
            Shop Now
          </button>
        </div>

       
        <div className="flex justify-center sm:justify-end w-full sm:w-1/2 mt-8 sm:mt-0">
          <div className="relative w-full max-w-[404px] sm:max-w-[404px] sm:h-auto h-[504px]">
            <Image
              src="/images/hero-section.png"
              alt="hero-section"
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
          <PiStarFourFill className="w-24 h-24 sm:w-[104px] sm:h-[104px] mt-8 sm:mt-16 sm:mr-9" />
        </div>
      </div>

  
      <div className="bg-black h-[122px] flex flex-wrap justify-center sm:justify-between items-center p-6 sm:p-10 gap-5 sm:gap-28 w-full">
        <div className="relative w-[168.48px] h-[33.16px]">
          <Image src="/images/hero-sec1.png" layout="fill" objectFit="contain" alt="hero-sec1" />
        </div>
        <div className="relative w-[91px] h-[37.98px]">
          <Image src="/images/hero-sec2.png" layout="fill" objectFit="contain" alt="hero-sec2" />
        </div>
        <div className="relative w-[156px] h-[36px]">
          <Image src="/images/hero-sec3.png" layout="fill" objectFit="contain" alt="hero-sec3" />
        </div>
        <div className="relative w-[194px] h-[31.2px]">
          <Image src="/images/hero-sec4.png" layout="fill" objectFit="contain" alt="hero-sec4" />
        </div>
        {/* <div className="relative w-[206.79px] h-[33.5px]">
          <Image src="/images/hero-sec5.png" layout="fill" objectFit="contain" alt="hero-sec5" />
        </div> */}
      </div>
      
    </>
  )
}

export default Hero
