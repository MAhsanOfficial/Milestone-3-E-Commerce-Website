// import React from 'react'
// import Image from 'next/image'
// import { IoIosArrowForward } from 'react-icons/io'
// import { RiAddLargeLine, RiDeleteBinFill } from "react-icons/ri";
// import { CiPen } from "react-icons/ci";
// import { FaArrowRight } from "react-icons/fa6";



// const Cart = () => {
//   return (
//     <> 
//     <div className="w-[1240px] mt-[34px] ml-[100px] border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div><br />

//  <div className="w-[106px] h-[22px] ml-[100px] gap-3 flex">
//     <p className='text-slate-500 flex gap-1 text-base'>Home <IoIosArrowForward className='mt-1 '/></p>
//     <p className=' text-base'>Cart</p>
//    </div>
// <br />
// <h1 className='ml-[100px] font-bold text-[40px] leading-[48px] text-black'>YOUR CART</h1>
// <br />
// <div className="flex gap-5">
// <div className="w-[715px]  h-[538px] ml-[100px] rounded-[20px] border-[1px] py-5 px-6 gap-6">





//      <div className="w-[667px] h-[124px] gap-4 flex">
//         <Image src={'/images/category1.png'} className='w-[124px] h-[134px] rounded-[8.66px]' alt='img' height={124} width={124}/>
//      <div className="w-[527px] h-[124px] flex justify-between">
//      <div className="w-[227px] h-[118px] flex flex-col justify-between ">
//         <div className="w-[227px] h-[71px] gap-[2px]">
//             <h3 className='font-bold text-lg leading-[27px]'>Gradient Graphic T-shirt</h3>
//             <div className="w-[78px] h-[42px] gap-1">
//                 <p className='text-black flex text-sm leading-[18.9px]'>Size: <span className='text-slate-500 ml-1'>Large</span></p>
//                 <p className='text-black flex text-sm leading-[18.9px]'>Color: <span className='text-slate-500 ml-1'> Red</span></p>
//             </div>  
//         </div>
//         <p className='font-bold text-2xl leading-[32.4px]'>$145 </p>
//      </div>   
//      <div className="w-[225px] h-[127px] flex flex-col justify-between">
//      <RiDeleteBinFill className='ml-52 text-[#FF3333] w-[24px] h-[24px]' />   
//        <div className="w-[126px] relative h-[44px] rounded-[62px] ml-28 flex justify-between py-3 px-5 bg-[#F0F0F0]"><span>-</span><span>1</span><span><RiAddLargeLine /></span></div>
//      </div>
//      </div>
//      </div>


//      <div className="w-[667px] mt-[34px]  border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div><br />


//      <div className="w-[667px] h-[124px] gap-4 flex">
//         <Image src={'/images/category5.png'} className='w-[124px] h-[134px] rounded-[8.66px]' alt='img' height={124} width={124}/>
//      <div className="w-[527px] h-[124px] flex justify-between">
//      <div className="w-[227px] h-[118px] flex flex-col justify-between ">
//         <div className="w-[227px] h-[71px] gap-[2px]">
//             <h3 className='font-bold text-lg leading-[27px]'>Checkered Shirt</h3>
//             <div className="w-[78px] h-[42px] gap-1">
//                 <p className='text-black flex text-sm leading-[18.9px]'>Size: <span className='text-slate-500 ml-1'>Medium</span></p>
//                 <p className='text-black flex text-sm leading-[18.9px]'>Color: <span className='text-slate-500 ml-1'> Red</span></p>
//             </div>  
//         </div>
//         <p className='font-bold text-2xl leading-[32.4px]'>$180 </p>
//      </div>   
//      <div className="w-[225px] h-[127px] flex flex-col justify-between">
//      <RiDeleteBinFill className='ml-52 text-[#FF3333] w-[24px] h-[24px]' />   
//        <div className="w-[126px] relative h-[44px] rounded-[62px] ml-28 flex justify-between py-3 px-5 bg-[#F0F0F0]"><span>-</span><span>1</span><span><RiAddLargeLine /></span></div>
//      </div>
//      </div>
//      </div>


//      <div className="w-[667px] mt-[34px]  border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div><br />



//   <div className="w-[667px] h-[124px] gap-4 flex">
//         <Image src={'/images/category4.png'} className='w-[124px] h-[134px] rounded-[8.66px]' alt='img' height={124} width={124}/>
//      <div className="w-[527px] h-[124px] flex justify-between">
//      <div className="w-[227px] h-[118px] flex flex-col justify-between ">
//         <div className="w-[227px] h-[71px] gap-[2px]">
//             <h3 className='font-bold text-lg leading-[27px]'>Skinny Fit Jeans</h3>
//             <div className="w-[78px] h-[42px] gap-1">
//                 <p className='text-black flex text-sm leading-[18.9px]'>Size: <span className='text-slate-500 ml-1'>Large</span></p>
//                 <p className='text-black flex text-sm leading-[18.9px]'>Color: <span className='text-slate-500 ml-1'> Blue</span></p>
//             </div>  
//         </div>
//         <p className='font-bold text-2xl leading-[32.4px]'>$240 </p>
//      </div>   
//      <div className="w-[225px] h-[127px] flex flex-col justify-between">
//      <RiDeleteBinFill className='ml-52 text-[#FF3333] w-[24px] h-[24px]' />   
//        <div className="w-[126px] relative h-[44px] rounded-[62px] ml-28 flex justify-between py-3 px-5 bg-[#F0F0F0]"><span>-</span><span>1</span><span><RiAddLargeLine /></span></div>
//      </div>
//      </div>
//      </div>
// </div>


   
//    <div className="w-[505px] h-[458px] rounded-[20px] border-[1px] py-5 px-6 gap-6 ">

//     <h2 className='font-bold text-2xl leading-[32.4px]'>Order Summary</h2><br />

//     <div className="w-[457px] h-[193px] gap-5">
     
//   <div className="w-[457px] h-[27px] flex justify-between">
//     <p className='font-normal text-xl text-gray-400'>Subtotal</p>
//     <p className='font-bold leading-[27px] text-xl text-black '>$565</p>
//   </div><br />
//   <div className="w-[457px] h-[27px] flex justify-between">
//     <p className='font-normal text-xl text-gray-400'>Discount (-20%)</p>
//     <p className='font-bold leading-[27px] text-xl text-[#FF3333] '>-$113</p>
//   </div><br />
//   <div className="w-[457px] h-[27px] flex justify-between">
//     <p className='font-normal text-xl text-gray-400'>Delivery Fee</p>
//     <p className='font-bold leading-[27px] text-xl text-black '>$15</p>
//   </div><br />
//   <div className="w-[457px]   border-[1px] border-gray-200 max-w-screen-lg mx-auto"></div><br />
//   <div className="w-[457px] h-[27px] flex justify-between">
//     <p className='font-normal text-xl text-black'>Total</p>
//     <p className='font-bold leading-[27px] text-xl text-black '>$467</p>
//   </div>
//     </div>

// <br /><br />
// <div className="w-[457px] h-12 gap-3 flex">
// <div className="relative w-[326px]">
//   <CiPen className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//   <input type="text"  placeholder="Add promo code" className="w-full h-12 text-base leading-[21.6px] rounded-[62px] bg-[#F0F0F0] py-3 pl-12 pr-4 gap-3" />
// </div>
// <button className='bg-black text-white  rounded-[62px] py-3 px-4 gap-3 w-[119px] h-12 font-medium leading-[21.6px] text-base'>Apply</button>
// </div><br />

// <button className='w-[457px] h-[60px] rounded-[62px] py-5 px-[144px] gap-3 font-medium text-base leading-[21.6px]  bg-black text-[#FFFFFF] flex '>Go to Checkout <FaArrowRight  /></button>

//    </div>


// </div>
//     <br /><br />
//     </>
//   )
// }


// export default Cart























// import React from "react";
// import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";
// import { RiAddLargeLine, RiDeleteBinFill } from "react-icons/ri";
// import { CiPen } from "react-icons/ci";
// import { FaArrowRight } from "react-icons/fa6";

// const Cart = () => {
//   return (
//     <>
//       {/* Breadcrumb */}
//       <div className="w-full px-4 md:px-10 mt-4">
//         <div className="flex gap-2 items-center text-gray-500 text-base">
//           <p>Home</p>
//           <IoIosArrowForward />
//           <p className="text-black">Cart</p>
//         </div>
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl md:text-5xl font-bold px-4 md:px-10 mt-4">
//         YOUR CART
//       </h1>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-10 mt-6">
//         {/* Cart Items */}
//         <div className="flex-1 space-y-6">
//           {/* Item 1 */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border rounded-lg">
//             <Image
//               src="/images/category1.png"
//               alt="Gradient Graphic T-shirt"
//               width={120}
//               height={120}
//               className="rounded-lg"
//             />
//             <div className="flex-1">
//               <h3 className="font-bold text-lg">Gradient Graphic T-shirt</h3>
//               <p className="text-gray-500 text-sm">
//                 Size: <span className="text-black">Large</span>
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Color: <span className="text-black">White</span>
//               </p>
//               <p className="font-bold mt-2 text-xl">$145</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <RiDeleteBinFill className="text-red-500 text-xl cursor-pointer" />
//               <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
//                 <span className="cursor-pointer">-</span>
//                 <span className="px-4">1</span>
//                 <RiAddLargeLine className="cursor-pointer" />
//               </div>
//             </div>
//           </div>

//           {/* Item 2 */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border rounded-lg">
//             <Image
//               src="/images/category5.png"
//               alt="Checkered Shirt"
//               width={120}
//               height={120}
//               className="rounded-lg"
//             />
//             <div className="flex-1">
//               <h3 className="font-bold text-lg">Checkered Shirt</h3>
//               <p className="text-gray-500 text-sm">
//                 Size: <span className="text-black">Medium</span>
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Color: <span className="text-black">Red</span>
//               </p>
//               <p className="font-bold mt-2 text-xl">$180</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <RiDeleteBinFill className="text-red-500 text-xl cursor-pointer" />
//               <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
//                 <span className="cursor-pointer">-</span>
//                 <span className="px-4">1</span>
//                 <RiAddLargeLine className="cursor-pointer" />
//               </div>
//             </div>
//           </div>

//           {/* Item 3 */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border rounded-lg">
//             <Image
//               src="/images/category4.png"
//               alt="Skinny Fit Jeans"
//               width={120}
//               height={120}
//               className="rounded-lg"
//             />
//             <div className="flex-1">
//               <h3 className="font-bold text-lg">Skinny Fit Jeans</h3>
//               <p className="text-gray-500 text-sm">
//                 Size: <span className="text-black">Large</span>
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Color: <span className="text-black">Blue</span>
//               </p>
//               <p className="font-bold mt-2 text-xl">$240</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <RiDeleteBinFill className="text-red-500 text-xl cursor-pointer" />
//               <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
//                 <span className="cursor-pointer">-</span>
//                 <span className="px-4">1</span>
//                 <RiAddLargeLine className="cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="w-full lg:w-[400px] p-6 border rounded-lg">
//           <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
//           <div className="flex justify-between mb-2">
//             <p className="text-gray-500">Subtotal</p>
//             <p className="font-bold">$565</p>
//           </div>
//           <div className="flex justify-between mb-2">
//             <p className="text-gray-500">Discount (-20%)</p>
//             <p className="text-red-500 font-bold">-$113</p>
//           </div>
//           <div className="flex justify-between mb-4">
//             <p className="text-gray-500">Delivery Fee</p>
//             <p className="font-bold">$15</p>
//           </div>
//           <div className="border-t border-gray-200 my-2"></div>
//           <div className="flex justify-between">
//             <p className="text-lg font-bold">Total</p>
//             <p className="text-lg font-bold">$467</p>
//           </div>

//           {/* Promo Code */}
//           <div className="flex mt-6">
//             <div className="relative flex-1">
//               <CiPen className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Add promo code"
//                 className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
//               />
//             </div>
//             <button className="ml-2 bg-black text-white px-4 rounded-full">
//               Apply
//             </button>
//           </div>

//           {/* Checkout Button */}
//           <button className="w-full mt-4 bg-black text-white py-3 rounded-full flex justify-center items-center gap-2">
//             Go to Checkout <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;




















import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { RiAddLargeLine, RiDeleteBinFill } from "react-icons/ri";
import { CiPen } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

const Cart = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full px-4 md:px-8 lg:px-10 mt-4">
        <div className="flex gap-2 items-center text-gray-500 text-sm md:text-base">
          <p>Home</p>
          <IoIosArrowForward />
          <p className="text-black">Cart</p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold px-4 md:px-8 lg:px-10 mt-4">
        YOUR CART
      </h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-10 mt-6">
        {/* Cart Items */}
        <div className="flex-1 border-[1px] rounded-[20px] space-y-6">
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4  rounded-lg">
            <Image
              src="/images/category1.png"
              alt="Gradient Graphic T-shirt"
              width={124}
              height={124}
              className="rounded-lg"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-lg">Gradient Graphic T-shirt</h3>
              <p className="text-gray-500 text-sm">
                Size: <span className="text-black">Large</span>
              </p>
              <p className="text-gray-500 text-sm">
                Color: <span className="text-black">White</span>
              </p>
              <p className="font-bold mt-2 text-xl">$145</p>
            </div>
            <div className="flex flex-col items-center sm:items-end">
              <RiDeleteBinFill className="text-red-500 relative bottom-16  text-xl cursor-pointer" />
              <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
                <span className="cursor-pointer">-</span>
                <span className="px-4">1</span>
                <RiAddLargeLine className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" mt-[34px]  border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 rounded-lg">
            <Image
              src="/images/category5.png"
              alt="Checkered Shirt"
              width={124}
              height={124}
              className="rounded-lg"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-lg">Checkered Shirt</h3>
              <p className="text-gray-500 text-sm">
                Size: <span className="text-black">Medium</span>
              </p>
              <p className="text-gray-500 text-sm">
                Color: <span className="text-black">Red</span>
              </p>
              <p className="font-bold mt-2 text-xl">$180</p>
            </div>
            <div className="flex flex-col items-center sm:items-end">
              <RiDeleteBinFill className="text-red-500 relative bottom-16  text-xl cursor-pointer" />
              <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
                <span className="cursor-pointer">-</span>
                <span className="px-4">1</span>
                <RiAddLargeLine className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" mt-[34px]  border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div>
          {/* Item 3 */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4  rounded-lg">
            <Image
              src="/images/category4.png"
              alt="Skinny Fit Jeans"
              width={124}
              height={124}
              className="rounded-lg"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-lg">Skinny Fit Jeans</h3>
              <p className="text-gray-500 text-sm">
                Size: <span className="text-black">Large</span>
              </p>
              <p className="text-gray-500 text-sm">
                Color: <span className="text-black">Blue</span>
              </p>
              <p className="font-bold mt-2 text-xl">$240</p>
            </div>
            <div className="flex flex-col items-center sm:items-end">
              <RiDeleteBinFill className="text-red-500 relative bottom-16  text-xl cursor-pointer" />
              <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
                <span className="cursor-pointer">-</span>
                <span className="px-4">1</span>
                <RiAddLargeLine className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[400px] p-6 border rounded-lg h-[458px]">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-bold">$565</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-500">Discount (-20%)</p>
            <p className="text-red-500 font-bold">-$113</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-500">Delivery Fee</p>
            <p className="font-bold">$15</p>
          </div>
          <div className="border-t border-gray-200 my-2"></div>
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">$467</p>
          </div>

          {/* Promo Code */}
          <div className="flex mt-6">
            <div className="relative flex-1">
              <CiPen className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100"
              />
            </div>
            <button className="ml-2 bg-black text-white px-4 rounded-full">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-4 bg-black text-white py-3 rounded-full flex justify-center items-center gap-2">
            Go to Checkout <FaArrowRight />
          </button>
        </div>
      </div>
      <br /><br />
    </>
  );
};

export default Cart;
