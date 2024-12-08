





import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import { AiFillCheckCircle } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Rating = () => {
  return (
    <>
    <br /><br /><br />
      <div className="ml-6 md:ml-[100px] flex gap-6 items-center">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[57.6px]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-4 ml-auto">
          <FaArrowLeft className="w-[24px] h-[24px] mt-[19.88px]" />
          <FaArrowRight className="w-[24px] h-[24px] mt-[19.88px]" />
        </div>
      </div>
      
      <br /><br />

      <div className="flex flex-wrap justify-center gap-6">
        
   
        <div className="w-full sm:w-[380px] h-[240px] border rounded-[20px] border-gray-500 py-7 px-8">
          <div className="flex flex-col justify-between w-[336px]">
            <div className="flex gap-[6.49px]">
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
            </div>
            <br />
            <div className="flex items-center">
              <p className="font-bold text-xl">Sarah M.</p>
              <AiFillCheckCircle className="text-green-600 w-[19.5px] h-[19.5px]" />
            </div>
            <br />
            <p className="text-gray-500 text-base"> 
              "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            </p>
          </div>
        </div>

        <div className="w-full sm:w-[380px] h-[239.58px] border rounded-[20px] border-gray-500 py-7 px-8">
          <div className="flex flex-col justify-between w-[336px]">
            <div className="flex gap-[6.49px]">
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
            </div>
            <br />
            <div className="flex items-center">
              <p className="font-bold text-xl">Alex K.</p>
              <AiFillCheckCircle className="text-green-600 w-[19.5px] h-[19.5px]" />
            </div>
            <br />
            <p className="text-gray-500 text-base">
              "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
            </p>
          </div>
        </div>

        {/* Third Review Card */}
        <div className="w-full sm:w-[380px] h-[239.58px] border rounded-[20px] border-gray-500 py-7 px-8">
          <div className="flex flex-col justify-between w-[336px]">
            <div className="flex gap-[6.49px]">
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
              <FaRegStar className="text-[#FFC633]" />
            </div>
            <br />
            <div className="flex items-center">
              <p className="font-bold text-xl">James L.</p>
              <AiFillCheckCircle className="text-green-600 w-[19.5px] h-[19.5px]" />
            </div>
            <br />
            <p className="text-gray-500 text-base">
              "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
            </p>
          </div>
        </div>

      </div>

      <br /><br /><br /><br />
    </>
  )
}

export default Rating
