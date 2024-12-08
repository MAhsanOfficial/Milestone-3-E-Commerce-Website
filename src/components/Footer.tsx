import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { TiSocialTwitter } from "react-icons/ti";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="bg-black w-full max-w-[1240px] h-[180px] mx-auto rounded-[20px] flex justify-between px-6 sm:px-16 py-9">
        <h2 className='font-bold text-[25px] sm:text-[40px] text-white w-full sm:w-[551px] h-[94px] leading-[45px]'>
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="w-full sm:w-[349px] h-[108px] gap-[14px]">
          <div className="relative w-full sm:w-[349px]">
            <TfiEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input 
              type="text" 
              placeholder="Enter your email address" 
              className="w-full h-12 rounded-[62px] py-3 pl-12 pr-6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input 
            type="text" 
            placeholder="Subscribe to Newsletter" 
            className="w-full sm:w-[349px] font-medium text-base leading-[21.6px] text-[#000000] text-center h-12 rounded-[62px] py-3 px-4 gap-3 mt-3"
          />
        </div>
      </div>

      <div className="w-full bg-[#F0F0F0] py-8">
        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 sm:px-16">
          <div className="flex flex-col gap-4">
            <h3 className='font-bold text-[33.45px] leading-[40.15px]'>SHOP.CO</h3>
            <p className='text-sm leading-[22px] text-slate-500'>
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex gap-3">
              <TiSocialTwitter className='bg-[#FFFFFF] text-black rounded-full w-7 h-7' />
              <BiLogoFacebookCircle className='text-black rounded-full w-7 h-7' />
              <FaInstagram className='bg-[#FFFFFF] text-black rounded-full w-7 h-7' />
              <DiGithubBadge className='bg-[#FFFFFF] text-black rounded-full w-7 h-7' />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className='font-medium text-base leading-[18px] tracking-[3px]'>COMPANY</h4>
            <p className='text-base text-gray-500'>About</p>
            <p className='text-base text-gray-500'>Features</p>
            <p className='text-base text-gray-500'>Works</p>
            <p className='text-base text-gray-500'>Career</p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className='font-medium text-base leading-[18px] tracking-[3px]'>HELP</h4>
            <p className='text-base text-gray-500'>Customer Support</p>
            <p className='text-base text-gray-500'>Delivery Details</p>
            <p className='text-base text-gray-500'>Terms & Conditions</p>
            <p className='text-base text-gray-500'>Privacy Policy</p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className='font-medium text-base leading-[18px] tracking-[3px]'>FAQ</h4>
            <p className='text-base text-gray-500'>Account</p>
            <p className='text-base text-gray-500'>Manage Deliveries</p>
            <p className='text-base text-gray-500'>Orders</p>
            <p className='text-base text-gray-500'>Payments</p>
          </div>
 
 <div className="bg-[#F0F0F0]">

          <div className="flex flex-col gap-4">
            <h4 className='font-medium text-base leading-[18px] tracking-[3px]'>RESOURCES</h4>
            <p className='text-base text-gray-500'>Free eBooks</p>
            <p className='text-base text-gray-500'>Development Tutorial</p>
            <p className='text-base text-gray-500'>How to - Blog</p>
            <p className='text-base text-gray-500'>Youtube Playlist</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 "></div>

      <div className="flex justify-between bg-[#F0F0F0] items-center py-4 px-6 sm:px-16">
        <p className='text-sm text-gray-400'>Shop.co © 2000-2023, All Rights Reserved</p>

        <div className="flex gap-3">
          <div className="w-[46.61px] h-[30.03px] border-[#D6DCE5] rounded-[5.38px] bg-[#FFFFFF]">
            <Image src={'/images/card1.png'} alt='cards' width={32.54} height={10.51} className='py-2' />
          </div>
          <div className="w-[46.61px] h-[30.03px] border-[#D6DCE5] rounded-[5.38px] bg-[#FFFFFF]">
            <Image src={'/images/card2.png'} alt='cards' width={32.54} height={10.51} className='py-1' />
          </div>
          <div className="w-[46.61px] h-[30.03px] border-[#D6DCE5] rounded-[5.38px] bg-[#FFFFFF]">
            <Image src={'/images/card3.png'} alt='cards' width={32.54} height={10.51} className='py-2'/>
          </div>
          <div className="w-[46.61px] h-[30.03px] border-[#D6DCE5] rounded-[5.38px] bg-[#FFFFFF]">
            <Image src={'/images/card4.png'} alt='cards' width={32.54} height={10.51}className='py-2' />
          </div>
          <div className="w-[46.61px] h-[30.03px] border-[#D6DCE5] rounded-[5.38px] bg-[#FFFFFF]">
            <Image src={'/images/card5.png'} alt='cards' width={32.54} height={10.51} className='py-2 '/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
