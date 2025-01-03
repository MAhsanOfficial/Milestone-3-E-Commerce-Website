// 'use client'
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import { FaRegStar } from "react-icons/fa6";
// import Link from 'next/link';




// interface products {
//   id: number;
//   category: string;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   }
//   }

// const Products = () => {
//   const [loader, setloader] = useState(true);
//   const [data, setData] = useState<products[]>([]);

//   useEffect(() => {
//     async function fetchingData() {
//       const response = await fetch("https://api.escuelajs.co/api/v1/categories");
//       // console.log(response)
//       const data: products[] = await response.json();
//       setloader(false);
//       setData(data);
//       console.log(data);
//     }
//     fetchingData();
//   }, []);

//   if (loader) {
//     return (
//       <div className="w-full h-screen bg-white text-[#202020] flex justify-center items-center">
//         Loading...
//       </div>
//     );
//   } else {
  
//   return (
//     <>
//       <br /><br />
//       <h1 className='flex justify-center font-bold text-5xl '>NEW ARRIVALS</h1><br /><br />
//       <div className="flex flex-wrap justify-center gap-4 px-2 w-full">

//         <Link href={'/ProductDetails'}>
//           <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//             <Image src={'/images/product1.png'} alt='product1' width={295} height={298} className='rounded-[20px]' />
//             <br />
//             <h4 className='font-bold text-xl leading-[27px]'>T-SHIRT WITH TAPE DETAILS</h4>
//             <span className="flex w-[150px] h-[19px] gap-[13px]">
//               <FaRegStar className='text-[#FFC633]' />
//               <FaRegStar className='text-[#FFC633]' />
//               <FaRegStar className='text-[#FFC633]' />
//               <FaRegStar className='text-[#FFC633]' />
//               <span>4.5/5</span>
//             </span>
//             <h3 className='flex-col text-2xl'>$120</h3>
//           </div>
//         </Link>

//         <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//           <Image src={'/images/product2.png'} alt='product2' width={295} height={298} className='rounded-[20px]' />
//           <br />
//           <h4 className='font-bold text-xl leading-[27px]'>SKINNY FIT JEANS</h4>
//           <span className="flex w-[150px] h-[19px] gap-[13px]">
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <span>3.5/5</span>
//           </span>
//           <div className='flex gap-3'>
//             <h3 className='flex-col text-2xl'>$240</h3>
//             <h3 className='flex-col text-2xl text-gray-500'>$260</h3>
//             <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-20%</span>
//           </div>
//         </div>

//         <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//           <Image src={'/images/product3.png'} alt='product3' width={295} height={298} className='rounded-[20px]' />
//           <br />
//           <h4 className='font-bold text-xl leading-[27px]'>CHECKERED SHIRT</h4>
//           <span className="flex w-[150px] h-[19px] gap-[13px]">
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <span>4.5/5</span>
//           </span>
//           <h3 className='flex-col text-2xl'>$180</h3>
//         </div>

//         <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//           <Image src={'/images/product4.png'} alt='product4' width={295} height={298} className='rounded-[20px]' />
//           <br />
//           <h4 className='font-bold text-xl leading-[27px]'>SLEEVE STRIPED T-SHIRT</h4>
//           <span className="flex w-[150px] h-[19px] gap-[13px]">
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <span>4.5/5</span>
//           </span>
//           <div className='flex gap-3'>
//             <h3 className='flex-col text-2xl'>$130</h3>
//             <h3 className='flex-col text-2xl text-gray-500'>$160</h3>
//             <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-30%</span>
//           </div>
//         </div>
//       </div>
//       <br /><br /><br /><br /><br /><br />
//       <div className="flex justify-center">
//         <button className='rounded-[62px] h-[52px] w-[218px] border-gray-500 border'>View All</button>
//       </div>

//       <br /><br /><br />

//       <h1 className='flex justify-center font-bold text-5xl '>TOP SELLING</h1><br /><br />
//       <div className="flex flex-wrap justify-center gap-4 px-2 w-full">

//         <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//           <Image src={'/images/product5.png'} alt='product5' width={295} height={298} className='rounded-[20px]' />
//           <br />
//           <h4 className='font-bold text-xl leading-[27px]'>VERTICAL STRIPED SHIRT</h4>
//           <span className="flex w-[150px] h-[19px] gap-[13px]">
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <span>5.0/5</span>
//           </span>
//           <div className='flex gap-3'>
//             <h3 className='flex-col text-2xl'>$212</h3>
//             <h3 className='flex-col text-2xl text-gray-500'>$232</h3>
//             <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-20%</span>
//           </div>
//         </div>

//         <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//           <Image src={'/images/product6.png'} alt='product6' width={295} height={298} className='rounded-[20px]' />
//           <br />
//           <h4 className='font-bold text-xl leading-[27px]'>COURAGE GRAPHIC T-SHIRT</h4>
//           <span className="flex w-[150px] h-[19px] gap-[13px]">
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <span>4.0/5</span>
//           </span>
//           <h3 className='flex-col text-2xl'>$145</h3>
//         </div>

//        {/* Product 7 */}
//   <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//     <Image src={'/images/product7.png'} alt='product1' width={295} height={298} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px] text-center'>LOOSE FIT BERMUDA SHORTS</h4>
//     <span className="flex w-[150px] h-[19px] gap-[13px] justify-center">
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <span>3.0/5</span>
//     </span>
//     <h3 className='flex-col text-2xl text-center'>$80</h3>
//   </div>

//   {/* Product 8 */}
//   <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//     <Image src={'/images/product8.png'} alt='product2' width={295} height={298} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px] text-center'>FADED SKINNY JEANS</h4>
//     <span className="flex w-[150px] h-[19px] gap-[13px] justify-center">
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <span>4.5/5</span>
//     </span>
//     <h3 className='flex-col text-2xl text-center'>$210</h3>
//   </div>
// </div>

// <br /><br /><br /><br /><br /><br />

// <div className="flex justify-center">
//   <button className='rounded-[62px] h-[52px] w-[218px] border-gray-500 border'>View All</button>
// </div>

// <br /><br /><br />



// </>
//   )
// }
// }


// export default Products












// import React from 'react'
// import Image from 'next/image'
// import { FaRegStar } from "react-icons/fa6";
// import Link from 'next/link';

// const Products = () => {
//   return (
//     <>
//       <br /><br />
//       <h1 className='flex justify-center font-bold text-5xl '>NEW ARRIVALS</h1><br /><br />
//       <div className="flex flex-wrap justify-center gap-4 px-2 w-full">

//         <Link href={'/ProductDetails'}>
//           <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//             <Image src={'/images/product1.png'} alt='product1' width={295} height={298} className='rounded-[20px]' />
//             <br />
//             <h4 className='font-bold text-xl leading-[27px]'>T-SHIRT WITH TAPE DETAILS</h4>
//             <span className="flex w-[150px] h-[19px] gap-[13px]">
//               <FaRegStar className='text-[#FFC633]' />
//               <FaRegStar className='text-[#FFC633]' />
//               <FaRegStar className='text-[#FFC633]' />
//               <FaRegStar className='text-[#FFC633]' />
//               <span>4.5/5</span>
//             </span>
//             <h3 className='flex-col text-2xl'>$120</h3>
//           </div>
//         </Link>

//         <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//           <Image src={'/images/product2.png'} alt='product2' width={295} height={298} className='rounded-[20px]' />
//           <br />
//           <h4 className='font-bold text-xl leading-[27px]'>SKINNY FIT JEANS</h4>
//           <span className="flex w-[150px] h-[19px] gap-[13px]">
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <span>3.5/5</span>
//           </span>
//           <div className='flex gap-3'>
//             <h3 className='flex-col text-2xl'>$240</h3>
//             <h3 className='flex-col text-2xl text-gray-500'>$260</h3>
//             <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-20%</span>
//           </div>
//         </div>

//         <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//           <Image src={'/images/product3.png'} alt='product3' width={295} height={298} className='rounded-[20px]' />
//           <br />
//           <h4 className='font-bold text-xl leading-[27px]'>CHECKERED SHIRT</h4>
//           <span className="flex w-[150px] h-[19px] gap-[13px]">
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <span>4.5/5</span>
//           </span>
//           <h3 className='flex-col text-2xl'>$180</h3>
//         </div>

//         <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//           <Image src={'/images/product4.png'} alt='product4' width={295} height={298} className='rounded-[20px]' />
//           <br />
//           <h4 className='font-bold text-xl leading-[27px]'>SLEEVE STRIPED T-SHIRT</h4>
//           <span className="flex w-[150px] h-[19px] gap-[13px]">
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <span>4.5/5</span>
//           </span>
//           <div className='flex gap-3'>
//             <h3 className='flex-col text-2xl'>$130</h3>
//             <h3 className='flex-col text-2xl text-gray-500'>$160</h3>
//             <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-30%</span>
//           </div>
//         </div>
//       </div>
//       <br /><br /><br /><br /><br /><br />
//       <div className="flex justify-center">
//         <button className='rounded-[62px] h-[52px] w-[218px] border-gray-500 border'>View All</button>
//       </div>

//       <br /><br /><br />

//       <h1 className='flex justify-center font-bold text-5xl '>TOP SELLING</h1><br /><br />
//       <div className="flex flex-wrap justify-center gap-4 px-2 w-full">

//         <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//           <Image src={'/images/product5.png'} alt='product5' width={295} height={298} className='rounded-[20px]' />
//           <br />
//           <h4 className='font-bold text-xl leading-[27px]'>VERTICAL STRIPED SHIRT</h4>
//           <span className="flex w-[150px] h-[19px] gap-[13px]">
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <span>5.0/5</span>
//           </span>
//           <div className='flex gap-3'>
//             <h3 className='flex-col text-2xl'>$212</h3>
//             <h3 className='flex-col text-2xl text-gray-500'>$232</h3>
//             <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-20%</span>
//           </div>
//         </div>

//         <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//           <Image src={'/images/product6.png'} alt='product6' width={295} height={298} className='rounded-[20px]' />
//           <br />
//           <h4 className='font-bold text-xl leading-[27px]'>COURAGE GRAPHIC T-SHIRT</h4>
//           <span className="flex w-[150px] h-[19px] gap-[13px]">
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <FaRegStar className='text-[#FFC633]' />
//             <span>4.0/5</span>
//           </span>
//           <h3 className='flex-col text-2xl'>$145</h3>
//         </div>

//        {/* Product 7 */}
//   <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//     <Image src={'/images/product7.png'} alt='product1' width={295} height={298} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px] text-center'>LOOSE FIT BERMUDA SHORTS</h4>
//     <span className="flex w-[150px] h-[19px] gap-[13px] justify-center">
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <span>3.0/5</span>
//     </span>
//     <h3 className='flex-col text-2xl text-center'>$80</h3>
//   </div>

//   {/* Product 8 */}
//   <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//     <Image src={'/images/product8.png'} alt='product2' width={295} height={298} className='rounded-[20px]' />
//     <br />
//     <h4 className='font-bold text-xl leading-[27px] text-center'>FADED SKINNY JEANS</h4>
//     <span className="flex w-[150px] h-[19px] gap-[13px] justify-center">
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <FaRegStar className='text-[#FFC633]' />
//       <span>4.5/5</span>
//     </span>
//     <h3 className='flex-col text-2xl text-center'>$210</h3>
//   </div>
// </div>

// <br /><br /><br /><br /><br /><br />

// <div className="flex justify-center">
//   <button className='rounded-[62px] h-[52px] w-[218px] border-gray-500 border'>View All</button>
// </div>

// <br /><br /><br />



// </>
//   )
// }

// export default Products






// 'use client'

// "use client";
// import { useEffect, useState } from "react";
// import { Poppins } from "next/font/google";
// import Image from "next/image";
// const PoppinsPro = Poppins({
//   weight: ["400", "600", "700"],
//   subsets: ["latin"],
// });
// import { FaStar } from "react-icons/fa";

// interface products {
//   id: number;
//   category: {
//     id: number,
//     name: string,
//     image: string,
//     creationAt: string,
//     updatedAt: string
//   },
//   updatedAt:string,
//   creationAt:string
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }
// function Client() {
//   const [loader, setloader] = useState(true);
//   const [data, setData] = useState<products[]>([]);

//   useEffect(() => {
//     async function fetchingData() {
//       const response = await fetch("");
//       // console.log(response)
//       const data: products[] = await response.json();
//       setloader(false);
//       setData(data);
//       console.log(data);
//     }
//     fetchingData();
//   }, []);

//   if (loader) {
//     return (
//       <div className="w-full h-screen bg-white text-[#202020] flex justify-center items-center">
//         Loading...
//       </div>
//     );
//   } else {
//     return (
//       <>
//         <div className="flex justify-center  tracking-[2px] font-mono font-extrabold text-[18px] sm:text-[35px] bg-blue-100">
//           <h1>DATA FETCHED SUCSSESFULLY</h1>
//         </div>
//         <div className="flex justify-center  tracking-[2px] font-mono font-extrabold text-[18px] sm:text-[35px] bg-blue-100">
//           <h1>Total Products : {data.length}</h1>
//         </div>
//         <div
//           className={` pt-20 ${PoppinsPro.className} px-2 w-full h-min-screen  grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 bg-blue-100 grid-rows-[repeat(auto,500px)] gap-x-4 gap-y-10 `}
//         >
//           {data.map(
//             (
            
//               {
//                 id,
//                 category: {
//                   id,
//                   name,
//                   image,
//                   creationAt,
//                   updatedAt
//                 },
//                 updatedAt,
//                 creationAt,
//                 title,
//                 description,
//                 price,
//                 image,
//                 rating: {
//                   rate,
//                   count
//                 }
//               }
                   
//          : products,
        
//             ) => (
//               <div
//                 key={id}
//                 id="shadow2"
//                 className="rounded-[10px] w-[90%] sm:w-full h-full bg-white flex justify-between flex-col items-center px-0 p-4 "
//               >
//                 <div
//                   className={`${id === 7 || id === 8 ? "pt-8" : "pt-0"} h-auto`}
//                 >
//                   <Image
//                     src={image}
//                     alt={title}
//                     width={100}
//                     height={100}
//                     className={`${
//                       id === 7 || id === 8
//                         ? "w-[250px] h-[260px]"
//                         : "w-[250px] md:w-[300px] h-[300px] md:h-[400px]"
//                     } `}
//                   ></Image>
//                 </div>
//                 <div className="w-full sm:w-full h-[200px] border-t-[1px]  border-t-[#000000]  pt-3 mt-3">
//                   <div className="px-3">
//                     <p className="text-[12px] font-[600] uppercase text-[#2b2c2c] cursor-pointer hover:underline">
//                       {category}
//                     </p>
//                     <h1 className="pt-2 text-[#020817] text-[20px] font-sans font-[600] line-clamp-1">
//                       {title}
//                     </h1>
//                     <p className="pt-2 truncate max-w-[400px]">{description}</p>
//                     <div className="flex justify-between pt-2">
//                       <p className="font-[600]">${price}</p>
//                       <div className="flex ">
//                         <FaStar className="text-[#FFC107]" size={20} />
//                         <p className="text-black font-[600] ml-1">{rate}</p>
//                         <p className="mt-2 ml-1 text-[12px]">({count})</p>
//                       </div>
//                     </div>
//                     <button className="mt-3 rounded-lg h-[35px] text-white text-[16px] w-[100px] bg-black">
//                       Buy now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </>
//     );
//   }
// }

// export default Client;









// 'use client'
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { FaRegStar } from "react-icons/fa6";
// import Link from 'next/link';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   category: {
//     name: string;
//   };
//   rating?: {
//     rate: number;
//     count: number;
//   };
// }

// const Products = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     // Fetch products from the API
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://api.escuelajs.co/api/v1/products');
//         const data = await response.json();
//         setProducts(data.slice(0, 8)); // Limit to the first 8 products
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <br /><br />
//       <h1 className='flex justify-center font-bold text-5xl '>NEW ARRIVALS</h1><br /><br />
//       <div className="flex flex-wrap justify-center gap-4 px-2 w-full">
//         {products.map((product) => (
//           <Link href={`/ProductDetails/${product.id}`} key={product.id}>
//             <div className="h-[444px] w-[296px] md:w-[250px] lg:w-[280px] xl:w-[296px] flex flex-col items-center">
//               <Image 
//                 src={product.images[0]} 
//                 alt={product.title} 
//                 width={295} 
//                 height={298} 
//                 className='rounded-[20px]' 
//               />
//               <br />
//               <h4 className='font-bold text-xl leading-[27px] text-center'>
//                 {product.title.length > 30 ? `${product.title.slice(0, 30)}...` : product.title}
//               </h4>
//               <span className="flex w-[150px] h-[19px] gap-[13px] justify-center">
//                 <FaRegStar className='text-[#FFC633]' />
//                 <FaRegStar className='text-[#FFC633]' />
//                 <FaRegStar className='text-[#FFC633]' />
//                 <FaRegStar className='text-[#FFC633]' />
//                 <span>4.5/5</span>
//               </span>
//               <h3 className='flex-col text-2xl text-center'>${product.price}</h3>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <br /><br /><br /><br /><br /><br />
//       <div className="flex justify-center">
//         <button className='rounded-[62px] h-[52px] w-[218px] border-gray-500 border'>View All</button>
//       </div>

//       <br /><br /><br />
//     </>
//   );
// };

// export default Products;














// 'use client'
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";

// // Define the Product interface with an images array
// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   images: string[]; // Array of image URLs
// }

// const Products: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     // Fetching products from the API
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://api.escuelajs.co/api/v1/products");
//         setProducts(response.data.slice(0, 8)); // Get only 8 products
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products", error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-5">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {products.map((product, index) => (
//             <div key={product.id} className="bg-white p-5 rounded-lg shadow-md">
//               <div className="flex flex-wrap gap-4">
//                 {/* Display multiple images if available */}
//                 {product.images.map((image, index) => (
//                   <img
//                     key={index}
//                     className="w-32 h-32 object-cover rounded-md"
//                     src={image}
//                     alt={`Product ${product.id} - Image ${index + 1}`}
//                   />
                  
//                 ))}
//                 <Link href={'/'}><button>Buy</button></Link>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
//               <p className="text-lg font-bold text-gray-700">${product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {products.length > 4 && (
//         <div className="flex justify-center mt-6">
//           <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
//             Load More Products
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;







'use client'
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";

// // Define the Product interface with an images array
// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   images: string[]; // Array of image URLs
// }

// const Products: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     // Fetching products from the API
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://api.escuelajs.co/api/v1/products");
//         setProducts(response.data.slice(0, 8)); // Get only 8 products
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products", error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-5">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white p-5 rounded-lg shadow-md">
//               <div className="flex flex-wrap gap-4">
//                 {/* Display multiple images if available */}
//                 {product.images.map((image, index) => (
//                   <img
//                     key={index}
//                     className="w-32 h-32 object-cover rounded-md"
//                     src={image}
//                     alt={`Product ${product.id} - Image ${index + 1}`}
//                   />
//                 ))}
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
//               <p className="text-lg font-bold text-gray-700">${product.price}</p>
//               <div className="flex justify-center mt-4">
//                 {/* Link to the product details page using the product id */}
//                 <Link href={`/product/${product.id}`}>
//                   <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
//                     Buy
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {products.length > 4 && (
//         <div className="flex justify-center mt-6">
//           <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
//             Load More Products
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;





import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

// Define the Product interface with an images array
interface Product {
  id: number;
  title: string;
  price: number;
  images: string[]; // Array of image URLs
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetching products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProducts(response.data.slice(0, 8)); // Get only 8 products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div id="new-arrival">
    <div className="p-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-5 rounded-lg shadow-md">
              <div className="flex flex-wrap gap-4">
                {/* Display only the first image of the product */}
                {product.images.length > 0 && (
                  <img
                    className="w-32 h-32 object-cover rounded-md"
                    src={product.images[0]} // Only the first image
                    alt={`Product ${product.id} - Image 1`}
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-lg font-bold text-gray-700">${product.price}</p>
              <div className="flex justify-center mt-4">
                {/* Link to the product details page using the product id */}
                <Link href={`/product/${product.id}`}>
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
                    Buy
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {products.length > 4 && (
        <div className="flex justify-center mt-6">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Load More Products
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Products;
