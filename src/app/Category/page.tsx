// import React from 'react'
// import { IoIosArrowForward } from 'react-icons/io'
// import { HiAdjustmentsVertical } from "react-icons/hi2";
// import { TiTick } from "react-icons/ti";
// import { MdKeyboardArrowUp } from "react-icons/md";
// import Image from 'next/image';
// import { FaRegStar } from 'react-icons/fa';
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";


// const Category = () => {
//   return (
//     <>

// <div className="w-full mt-[34px] ml-[5%] border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div><br />

//    <div className="w-[123px] h-[22px] ml-[100px] gap-3 flex">
//     <p className='text-slate-500 flex gap-1 text-base'>Home <IoIosArrowForward className='mt-1 '/></p>
//     <p className=' text-base'>Casual</p>
//    </div>

// <br />
//     <div className="flex gap-3 ">

//    <div className="h-[1260px] w-[295px] ml-[100px] rounded-[20px] border border-gray-300 py-5 px-6 gap-6">

//    <div className="w-[247px] h-[27px] flex justify-between">
//     <h4 className='Filters font-bold text-xl'>Filters</h4>
//     <HiAdjustmentsVertical className='w-[20.25px] h-[18.75px] text-gray-400'/>
//    </div>
// <br />
//    <div className="w-[247px] border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div><br />

// <div className="w-[247px] h-[160px] gap-5">
   
//    <div className="w-[247px]  h-4 flex justify-between">
//    <p className='text-slate-500   text-base'>T-shirts</p>
//    <IoIosArrowForward className='mt-1 text-gray-500 '/>
//    </div><br />
//    <div className="w-[247px]  h-4 flex justify-between">
//    <p className='text-slate-500   text-base'>Shorts</p>
//    <IoIosArrowForward className='mt-1 text-gray-500 '/>
//    </div><br />
//    <div className="w-[247px]  h-4 flex justify-between">
//    <p className='text-slate-500   text-base'>Shirts</p>
//    <IoIosArrowForward className='mt-1 text-gray-500 '/>
//    </div><br />
//    <div className="w-[247px]  h-4 flex justify-between">
//    <p className='text-slate-500   text-base'>Hoodie</p>
//    <IoIosArrowForward className='mt-1 text-gray-500 '/>
//    </div><br />
//    <div className="w-[247px]  h-4 flex justify-between">
//    <p className='text-slate-500   text-base'>Jeans</p>
//    <IoIosArrowForward className='mt-1 text-gray-500 '/>
//    </div>
// </div>

//    <br /><br />
//    <div className="w-[247px] border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div><br />


// <div className="w-[247px] h-[90px] gap-5">
// <div className="w-[247px]  h-4 flex justify-between">
//    <p className='leading-[27px]  text-xl font-bold'>Price</p>
//    <MdKeyboardArrowUp className='mt-1 w-4 h-4 ' width={16} height={16}/>
//    </div>
// <br />
//   <div className="w-[247px] rounded-[20px] h-[6px]  border-[2px] border-[#F0F0F0] ">
//     <div className="w-[150.29px] border-[2px] ml-[43.13px] rounded-[20px] border-black "></div>
  
//     <div className="ml-44 rounded-[50px]   w-5 h-5 border-black border bg-black"></div>
  
//     <p className='font-medium text-sm leading-[18.9px] ml-[179px]'>$200</p>
//   </div>
//     <div className="ml-10 rounded-[50px]  w-5 h-5 border-black border bg-black"></div>
//     <p className='font-medium text-sm leading-[18.9px] ml-[37px]'>$50</p>
// </div>
//  <br />

// <div className="w-[247px] h-[137px] gap-5">

//   <div className="h-[27px] w-[247px] flex justify-between">
//  <p className='leading-[27px]  text-xl font-bold'>Colors</p>
//    <MdKeyboardArrowUp className='mt-1 w-4 h-4 ' width={16} height={16}/>
//   </div><br />
//   <div className="w-[247px] h-[90px] gap-4">
//    <div className="w-[247px] h-[37px] flex justify-between">
//     <span className='w-[37px] h-[37px] border-[2px] rounded-[50%] bg-[#00C12B]'></span>
//     <span className='w-[37px] h-[37px] border-[2px] rounded-[50%] bg-[#F50606]'></span>
//     <span className='w-[37px] h-[37px] border-[2px] rounded-[50%] bg-[#F5DD06]'></span>
//     <span className='w-[37px] h-[37px] border-[2px] rounded-[50%] bg-[#F57906]'></span>
//     <span className='w-[37px] h-[37px] border-[2px] rounded-[50%] bg-[#06CAF5]'></span>
//    </div><br />
//    <div className="w-[247px] h-[37px] flex justify-between">
//     <span className='w-[37px] h-[37px] border-[2px] rounded-[50%] py-2 px-2  bg-[#063AF5]'><TiTick className='text-white' /></span>
//     <span className='w-[37px] h-[37px] border-[2px] rounded-[50%] bg-[#7D06F5]'></span>
//     <span className='w-[37px] h-[37px] border-[2px] rounded-[50%] bg-[#F506A4]'></span>
//     <span className='w-[37px] h-[37px] border-[2px] rounded-[50%] bg-[#FFFFFF]'></span>
//     <span className='w-[37px] h-[37px] border-[2px] rounded-[50%] bg-[#000000]'></span>
//    </div>
//   </div>
// </div><br />
//   <div className="w-[247px] border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div><br />


// <div className="w-[247px] h-[247px] gap-5">
// <div className="h-[27px] w-[247px] flex justify-between">
//  <p className='leading-[27px]  text-xl font-bold'>Size</p>
//    <MdKeyboardArrowUp className='mt-1 w-4 h-4' width={16} height={16}/>
//   </div><br />

//   <div className="w-[247px] h-[244px] gap-2 "> 
//     <div className="flex">
//     <span className='w-[110px] h-[39px] rounded-[62px] py-[10px] px-5 gap-3 bg-[#F0F0F0] text-gray-500 text-sm leading-[18.9px]' >XX-Small</span>
//     <span className='w-24 ml-2 h-[39px] rounded-[62px] py-[10px] px-5 gap-3 bg-[#F0F0F0] text-gray-500 text-sm leading-[18.9px]' >X-Small</span>
//     </div> 
//     <div className="flex py-2">
//     <span className='w-[74px] h-[39px] rounded-[62px] py-[10px] px-5 gap-3 bg-[#F0F0F0] text-gray-500 text-sm leading-[18.9px]' >Small</span>
//     <span className='w-[90px] ml-2 h-[39px] rounded-[62px] py-[10px] px-5 gap-3 bg-[#F0F0F0] text-gray-500 text-sm leading-[18.9px]' >Medium</span>
//     </div>
//     <div className="flex py-2">
//     <span className='w-[76px] bg-black text-white h-[39px] font-medium rounded-[62px] py-[10px] px-5 gap-3 text-sm leading-[18.9px]' >Large</span>
//     <span className='w-24 h-[39px] ml-2 rounded-[62px] py-[10px] px-5 gap-3 bg-[#F0F0F0] text-gray-500 text-sm leading-[18.9px]' >X-Large</span>
//     </div>
//     <div className="flex py-2">
//     <span className='w-[110px]  h-[39px] rounded-[62px] py-[10px] px-5 gap-3 bg-[#F0F0F0] text-gray-500 text-sm leading-[18.9px]' >XX-Large</span>
//     <span className='w-[110px] ml-2 h-[39px] rounded-[62px] py-[10px] px-5 gap-3 bg-[#F0F0F0] text-gray-500 text-sm leading-[18.9px]' >3X-Large</span>
//     </div>
//     <div className="flex py-1">
//     <span className='w-[110px]  h-[39px] rounded-[62px] py-[10px] px-5 gap-3 bg-[#F0F0F0] text-gray-500 text-sm leading-[18.9px]' >4X-Large</span>
//     </div>
//   </div>
// </div>
// <br /><br /><br />
// <div className="w-[247px] border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div><br />
//  <div className="w-[247px] h-[171px] gap-5">
//  <div className="h-[27px]  w-[247px] flex justify-between">
//  <p className='leading-[27px]  text-xl font-bold'>Dress Style</p>
//    <MdKeyboardArrowUp className='mt-1 w-4 h-4' width={16} height={16}/>
//   </div>
//      <br />
//    <div className="w-[247px]  h-4 flex justify-between">
//    <p className='text-slate-500   text-base'>Casual</p>
//    <IoIosArrowForward className='mt-1 text-gray-500 '/>
//    </div>
//    <div className="w-[247px]  py-5 h-4 flex justify-between">
//    <p className='text-slate-500   text-base'>Formal</p>
//    <IoIosArrowForward className='mt-1 text-gray-500 '/>
//    </div>
//    <div className="w-[247px]  h-4 py-5 flex justify-between">
//    <p className='text-slate-500   text-base'>Party</p>
//    <IoIosArrowForward className='mt-1 text-gray-500 '/>
//    </div>
//    <div className="w-[247px]  h-4 py-5 flex justify-between">
//    <p className='text-slate-500   text-base'>Gym</p>
//    <IoIosArrowForward className='mt-1 text-gray-500 '/>
//    </div><br />
//  </div>

//    <br /><br />
//    <button className='w-[247px] h-12 rounded-[62px] py-[10px] px-[54px] gap-3 bg-black text-white font-medium text-sm leading-[18.9px]'>Apply Filter</button>
//    </div>

   
//    <h3 className='font-bold text-[32px] leading-[43.2px]'>Casual</h3>
//   <br/><br />
//        <div className="ml-60 mt-12 justify-between h-4 gap-3 flex ">
//         <p className='text-base leading-[21.6px] text-gray-400'>Showing 1-10 of 100 Products</p>
//         <p> Sort by: <span className='text-black font-medium text-base leading-[21.6px]'>Most Popular</span></p>
//       </div> 
     

// <div className="grid grid-cols-1  gap-64 md:grid-cols-2 lg:grid-cols-3 mt-52 relative right-[420px]  justify-center">
//   {/* Product 1 */}
//   <div className="h-[441px] w-[255px] rounded-[20px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col">
//     <Image src={'/images/category1.png'} alt='product1' width={215} height={208} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px]'>Gradient Graphic T-shirt</h4>
//     <span className="flex  h-[18.49px] gap-[5px]">
//       <FaRegStar className='text-[#FFC633]' width={18} height={18}/>
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <span className='text-sm'>3.5/5</span>
//     </span>
//     <h3 className='flex-col text-2xl font-bold leading-[32.4px]'>$145</h3>
//   </div>

//   {/* Product 2 */}
//   <div className="h-[441px] w-[255px] rounded-[20px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col">
//     <Image src={'/images/category2.png'} alt='product2' width={215} height={208} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px]'>Polo with Tipping Details</h4>
//     <span className="flex  h-[18.49px] gap-[5px]">
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <span className='text-sm'>4.5/5</span>
//     </span>
//     <h3 className='flex-col text-2xl font-bold leading-[32.4px]'>$145</h3>
//   </div>

//   {/* Product 3 */}
//   <div className="h-[441px] w-[255px] rounded-[20px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col">
//     <Image src={'/images/category3.png'} alt='product3' width={215} height={208} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px]'>Black Striped T-shirt</h4>
//     <span className="flex  h-[18.49px]  gap-[5px]">
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <span className='text-sm'>5.0/5</span>
//     </span>
//     <div className='flex gap-3 mb-10'>
//       <h3 className='flex-col text-2xl font-bold'>$120</h3>
//       <h3 className='flex-col text-2xl text-gray-500'>$160</h3>
//       <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-30%</span>
//     </div>
//   </div>

        
//   <div className="h-[441px] w-[255px] rounded-[20px] md:w-[250px] relative bottom-64 lg:w-[280px] xl:w-[296px] flex flex-col">
//     <Image src={'/images/category4.png'} alt='product4' width={215} height={208} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px]'>Skinny Fit Jeans</h4>
//     <span className="flex  h-[18.49px] gap-[5px]">
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <span className='text-sm'>3.5/5</span>
//     </span>
//     <div className='flex gap-3 mb-10'>
//       <h3 className='flex-col text-2xl font-bold'>$240</h3>
//       <h3 className='flex-col text-2xl text-gray-500'>$260</h3>
//       <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-30%</span>
//     </div>
//    </div>


//   <div className="h-[441px] w-[255px] rounded-[20px] relative bottom-64 md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col">
//     <Image src={'/images/category5.png'} alt='product5' width={215} height={208} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px]'>Checkered Shirt</h4>
//     <span className="flex  h-[18.49px] gap-[5px]">
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <span className='text-sm'>4.5/5</span>
//     </span>
//     <h3 className='flex-col text-2xl font-bold leading-[32.4px]'>$180</h3>
//   </div>


//   <div className="h-[441px] w-[255px] rounded-[20px] relative bottom-64 md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col">
//     <Image src={'/images/category6.png'} alt='product6' width={215} height={208} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px]'>Sleeve Striped T-shirt</h4>
//     <span className="flex  h-[18.49px] gap-[5px]">
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <span className='text-sm'>4.5/5</span>
//     </span>
//     <div className='flex gap-3 mb-10'>
//       <h3 className='flex-col text-2xl font-bold'>$130</h3>
//       <h3 className='flex-col text-2xl text-gray-500'>$160</h3>
//       <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-30%</span>
//     </div>
//   </div>



//   <div className="h-[441px] w-[255px] rounded-[20px] relative bottom-[500px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col">
//     <Image src={'/images/category7.png'} alt='product6' width={215} height={208} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px]'>Verticle Striped Shirt</h4>
//     <span className="flex  h-[18.49px] gap-[5px]">
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633] ' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633] ' />
//       <FaRegStar className='text-[#FFC633] ' />
//       <FaRegStar className='text-[#FFC633]' />
//       <span className='text-sm'>5.0/5</span>
//     </span>
//     <div className='flex gap-3 mb-10'>
//       <h3 className='flex-col text-2xl font-bold'>$212</h3>
//       <h3 className='flex-col text-2xl text-gray-500'>$232  </h3>
//       <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-20%</span>
//     </div>
//   </div>




//   <div className="h-[441px] w-[255px] rounded-[20px] md:w-[250px] relative bottom-[500px] lg:w-[280px] xl:w-[296px] flex flex-col">
//     <Image src={'/images/category8.png'} alt='product4' width={215} height={208} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px]'>Courage Graphic T-shirt</h4>
//     <span className="flex h-[18.49px] gap-[5px]">
//       <FaRegStar className='text-[#FFC633] ' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]  ' />
//       <FaRegStar className='text-[#FFC633]  ' />
//       <span className='text-sm'>4.0/5</span>
//     </span>
//     <h3 className='flex-col text-2xl font-bold leading-[32.4px]'>$145</h3>
//   </div>


//   <div className="h-[441px]  w-[255px] rounded-[20px] relative bottom-[500px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col">
//     <Image src={'/images/category9.png'} alt='product5' width={215} height={208} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px]'>Loose Fit Bermuda Shorts</h4>
//     <span className="flex h-[18.49px] gap-[5px]">
//       <FaRegStar className='text-[#FFC633] w-[18.49px] h-[18.49px]' />
//       <FaRegStar className='text-[#FFC633] w-[18.49px] h-[18.49px]' />
//       <FaRegStar className='text-[#FFC633] w-[18.49px] h-[18.49px]' />
//       <span className='text-sm'>3.0/5</span>
//     </span>
//     <h3 className='flex-col text-2xl font-bold leading-[32.4px]'>$80</h3>
//   </div>

//   </div>


//    </div>


   
{/* <div className="w-[920px] flex h-10 gap-[216px] ml-[415px] relative bottom-[450px]">

  <div className="w-[110px] flex h-9 rounded-lg border-[1px] py-2 px-[14px] gap-2 border-gray-400">
  <FaArrowLeftLong />
  <p className='font-medium text-sm leading-[20px]'>Previous</p>
  </div>
  
  <div className="w-[292px] h-10 gap-[2px] flex">
     <span className='w-10 h-10 rounded-lg p-4 bg-slate-100 font-medium text-sm  flex items-center'>1</span>
     <span className='w-10 h-10 rounded-lg p-4 font-medium text-sm  flex items-center'>2</span>
     <span className='w-10 h-10 rounded-lg p-4  font-medium text-sm  flex items-center'>3</span>
     <span className='w-10 h-10 rounded-lg p-4 font-medium text-sm  flex items-center'>...</span>
     <span className='w-10 h-10 rounded-lg p-4 font-medium text-sm  flex items-center'>8</span>
     <span className='w-10 h-10 rounded-lg p-4 font-medium text-sm  flex items-center'>9</span>
     <span className='w-10 h-10 rounded-lg p-4 font-medium text-sm  flex items-center'>10</span>
  </div>

  <div className="w-[86px] flex h-9 rounded-lg border-[1px] py-2 px-[14px] gap-2 border-gray-400">
  <p className='font-medium text-sm leading-[20px]'>Next</p>
  <FaArrowRightLong />
  </div>

</div> */}



// <br /><br />
//     </>
//   )
// }

// export default Category




























import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { TiTick } from "react-icons/ti";
import { MdKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Category = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full mt-8 border-b-[1px] border-gray-300 max-w-screen-lg mx-auto"></div>
      <div className="flex gap-3 mt-4 px-4 sm:px-8 lg:px-16">
        <p className="text-slate-500 flex items-center text-sm sm:text-base">
          Home <IoIosArrowForward className="mx-1" />
        </p>
        <p className="text-sm sm:text-base">Casual</p>
      </div>

      <div className="flex flex-col  lg:flex-row gap-8 px-4 sm:px-8 lg:px-16 mt-6">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-[300px] h-[1220px] border border-gray-300 rounded-2xl p-4 space-y-6">
          {/* Filters Header */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg sm:text-xl">Filters</h4>
            <HiAdjustmentsVertical className="text-gray-400" />
          </div>
          <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>
          {/* Categories */}
          <div className="space-y-4">
            <h5 className="text-base font-bold">Categories</h5>
            <div className="flex justify-between items-center">
              <p className="text-slate-500 text-sm sm:text-base">T-shirts</p>
              <IoIosArrowForward className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-slate-500 text-sm sm:text-base">Shorts</p>
              <IoIosArrowForward className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-slate-500 text-sm sm:text-base">Shirts</p>
              <IoIosArrowForward className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-slate-500 text-sm sm:text-base">Hoodie</p>
              <IoIosArrowForward className="text-gray-500" />
            </div>
          </div>
          <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>
          {/* Price Slider */}
          <div>
            <div className="flex justify-between items-center">
              <h5 className="text-base font-bold">Price</h5>
              <MdKeyboardArrowUp className="w-4 h-4" />
            </div>
            <div className="mt-2 relative">
              <div className="w-full h-1 bg-gray-200 rounded-full">
                <div className="absolute left-1/4 right-1/4 h-1 bg-black rounded-full"></div>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>
          </div>
          <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>
          {/* Colors */}
          <div>
            <div className="flex justify-between items-center">
              <h5 className="text-base font-bold">Colors</h5>
              <MdKeyboardArrowUp className="w-4 h-4" />
            </div>
            <div className="grid grid-cols-5 gap-2 mt-3">
              <div className="w-8 h-8 rounded-full border-2 bg-[#00C12B]"></div>
              <div className="w-8 h-8 rounded-full border-2 bg-[#F50606]"></div>
              <div className="w-8 h-8 rounded-full border-2 bg-[#F5DD06]"></div>
              <div className="w-8 h-8 rounded-full border-2 bg-[#F57906]"></div>
              <div className="w-8 h-8 rounded-full border-2 bg-[#06CAF5]"></div>
              <div className="w-8 h-8 rounded-full border-2 bg-[#063AF5] flex items-center justify-center">
                <TiTick className="text-white" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 bg-[#7D06F5]"></div>
              <div className="w-8 h-8 rounded-full border-2 bg-[#F506A4]"></div>
              <div className="w-8 h-8 rounded-full border-2 bg-[#FFFFFF]"></div>
              <div className="w-8 h-8 rounded-full border-2 bg-[#000000]"></div>
            </div>
          </div>
          <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>

          {/* Sizes */}
          <div>
            <div className="flex justify-between items-center">
              <h5 className="text-base font-bold">Size</h5>
              <MdKeyboardArrowUp className="w-4 h-4" />
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-5 py-2 rounded-[62px] w-[106px] h-[39px] text-sm border bg-gray-200 text-gray-500">
                XX-Small
              </span>
              <span className="px-3 w-[88px] h-[39px] py-2 rounded-[62px] text-sm border bg-gray-200 text-gray-500">
                X-Small
              </span>
              <span className="px-4 w-[74px] h-[39px] py-2 rounded-[62px]  bg-gray-200  text-sm border text-gray-500">
                Small
              </span>
              <span className="px-4 py-2 rounded-[62px] w-[90px] h-[39px] text-sm border bg-gray-200 text-gray-500">
                Medium
              </span>
              <span className="px-4 py-2 rounded-[62px] w-[76px] h-[39px] text-sm border  bg-black text-white">
                Large
              </span>
              <span className="px-3 py-2 rounded-[62px] w-[89px] h-[39px] text-sm border bg-gray-200 text-gray-500">
                X-Large
              </span>
              <span className="px-4 py-2 rounded-[62px] w-[98px] h-[39px] text-sm border bg-gray-200 text-gray-500">
                XX-Large
              </span>
              <span className="px-3 py-2 rounded-[62px] w-[97px] h-[39px] text-sm border bg-gray-200 text-gray-500">
                3X-Large
              </span>
              <span className="px-4 py-2 rounded-[62px] w-[10 8px] h-[39px] text-sm border bg-gray-200 text-gray-500">
                4 X-Large
              </span>
            </div>
          </div>
          <div className=" w-full max-w-[247px] sm:max-w-[320px]  md:max-w-[480px] lg:max-w-screen-md xl:max-w-screen-lg  border border-gray-300 mx-auto"></div>
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg sm:text-xl">Dress Style</h4>
            <MdKeyboardArrowUp />

          </div>

          {/* Categories */}
          <div className="space-y-4">
           
            <div className="flex justify-between items-center">
              <p className="text-slate-500 text-sm sm:text-base">Casual</p>
              <IoIosArrowForward className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-slate-500 text-sm sm:text-base">Formal</p>
              <IoIosArrowForward className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-slate-500 text-sm sm:text-base">Party</p>
              <IoIosArrowForward className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-slate-500 text-sm sm:text-base">Gym</p>
              <IoIosArrowForward className="text-gray-500" />
            </div>
          </div>
          <button className='w-[247px] h-12 rounded-[62px] py-[10px] px-[54px] gap-3 bg-black text-white font-medium text-sm leading-[18.9px]'>Apply Filter</button>
        </div>




        {/* Product List */}
        <div className="flex-1">
          <h3 className="font-bold text-2xl sm:text-3xl">Casual</h3>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-500 text-sm sm:text-base">
              Showing 1-9 of 100 Products
            </p>
            <p className="text-sm sm:text-base">
              Sort by: <span className="font-medium text-black">Most Popular</span>
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Product 1 */}
            <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
              <Image
                src="/images/category1.png"
                alt="Product 1"
                width={295}
                height={298}
                className="rounded-lg"
              />
              <h4 className="font-bold text-lg">Gradient Graphic T-shirt</h4>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span className="text-sm text-gray-500">3.5/5</span>
              </div>
              <div className="text-2xl font-bold">$145</div>
            </div>
            {/* Product 2 */}
            <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
              <Image
                src="/images/category2.png"
                alt="Product 2"
                width={295}
                height={298}
                className="rounded-lg"
              />
              <h4 className="font-bold text-lg">Polo with Tipping Details</h4>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span className="text-sm text-gray-500">4.5/5</span>
              </div>
              <div className="text-2xl font-bold">$180</div>
            </div>
            {/* Product 3 */}
            <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
              <Image
                src="/images/category3.png"
                alt="Product 3"
                width={295}
                height={298}
                className="rounded-lg"
              />
              <h4 className="font-bold text-lg">Black Striped T-shirt</h4>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span className="text-sm text-gray-500">5.0/5</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-3 mb-10">
  <h3 className="text-xl sm:text-2xl font-bold">$120</h3>
  <h3 className="text-xl sm:text-2xl text-gray-500">$150</h3>
  <span className="
    bg-pink-300 
    w-[58px] 
    h-7 
    flex items-center justify-center 
    py-[3px] px-[9px] 
    text-xs sm:text-sm 
    text-red-500 
    rounded-full
  ">
    -30%
  </span>
</div>

             
            </div>
            {/* Product 4 */}
            <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
              <Image
                src="/images/category4.png"
                alt="Product 4"
                width={295}
                height={298}
                className="rounded-lg"
              />
              <h4 className="font-bold text-lg">SKINNY FIT JEANS</h4>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span className="text-sm text-gray-500">3.5/5</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-10">
  <h3 className="text-xl sm:text-2xl font-bold">$240</h3>
  <h3 className="text-xl sm:text-2xl text-gray-500">$260</h3>
  <span className="
    bg-pink-300 
    w-[58px] 
    h-7 
    flex items-center justify-center 
    py-[3px] px-[9px] 
    text-xs sm:text-sm 
    text-red-500 
    rounded-full
  ">
    -20%
  </span>
</div>

            </div>
            {/* Product 5 */}
            <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
              <Image
                src="/images/category5.png"
                alt="Product 5"
                width={295}
                height={298}
                className="rounded-lg"
              />
              <h4 className="font-bold text-lg">Cheackered Shirt</h4>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span className="text-sm text-gray-500">4.5/5</span>
              </div>
              <div className="text-2xl font-bold">$180</div>
            </div>
            {/* Product 6 */}
            <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
              <Image
                src="/images/category6.png"
                alt="Product 6"
                width={295}
                height={298}
                className="rounded-lg"
              />
              <h4 className="font-bold text-lg">Sleeve Striped T-shirt</h4>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span className="text-sm text-gray-500">5.0/5</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-10">
  <h3 className="text-xl sm:text-2xl font-bold">$130</h3>
  <h3 className="text-xl sm:text-2xl text-gray-500">$160</h3>
  <span className="
    bg-pink-300 
    w-[58px] 
    h-7 
    flex items-center justify-center 
    py-[3px] px-[9px] 
    text-xs sm:text-sm 
    text-red-500 
    rounded-full
  ">
    -30%
  </span>
</div>

            </div>
            {/* Product 7 */}
            <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
              <Image
                src="/images/category7.png"
                alt="Product 7"
                width={295}
                height={298}
                className="rounded-lg"
              />
              <h4 className="font-bold text-lg">Verticle Striped Shirt</h4>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span className="text-sm text-gray-500">5.0/5</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-10">
  <h3 className="text-xl sm:text-2xl font-bold">$212</h3>
  <h3 className="text-xl sm:text-2xl text-gray-500">$232</h3>
  <span className="
    bg-pink-300 
    w-[58px] 
    h-7 
    flex items-center justify-center 
    py-[3px] px-[9px] 
    text-xs sm:text-sm 
    text-red-500 
    rounded-full 
  ">
    -20%
  </span>
</div>

            </div>
            {/* Product 8 */}
            <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
              <Image
                src="/images/category8.png"
                alt="Product 8"
                width={295}
                height={298}
                className="rounded-lg"
              />
              <h4 className="font-bold text-lg">Courage Graphic T-shirt</h4>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span className="text-sm text-gray-500">4.0/5</span>
              </div>
              <div className="text-2xl font-bold">$145</div>
            </div>
            {/* Product 9 */}
            <div className="border rounded-lg p-4 space-y-2 hover:shadow-lg">
              <Image
                src="/images/category9.png"
                alt="Product 9"
                width={295}
                height={298}
                className="rounded-lg"
              />
              <h4 className="font-bold text-lg">Loose Fit Bermuda Shorts</h4>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span className="text-sm text-gray-500">3.0/5</span>
              </div>
              <div className="text-2xl font-bold">$80</div>
            </div>
          </div>
          <br />
          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0 relative">
  {/* Previous Button */}
  <div className="flex items-center h-9 rounded-lg border border-gray-400 py-2 px-4 gap-2">
    <FaArrowLeftLong />
    <p className="font-medium text-sm leading-[20px]">Previous</p>
  </div>

  {/* Pagination Numbers */}
  <div className="flex flex-wrap justify-center gap-2">
    <span className="w-10 h-10 rounded-lg p-2 bg-slate-100 font-medium text-sm flex items-center justify-center">1</span>
    <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">2</span>
    <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">3</span>
    <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">...</span>
    <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">8</span>
    <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">9</span>
    <span className="w-10 h-10 rounded-lg p-2 font-medium text-sm flex items-center justify-center">10</span>
  </div>

  {/* Next Button */}
  <div className="flex items-center h-9 rounded-lg border border-gray-400 py-2 px-4 gap-2">
    <p className="font-medium text-sm leading-[20px]">Next</p>
    <FaArrowRightLong />
  </div>
</div>

        </div>
      </div>



<br />
    </>
  );
};

export default Category;
