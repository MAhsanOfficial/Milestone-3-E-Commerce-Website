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
//       <div className="w-full px-4 md:px-8 lg:px-10 mt-4">
//         <div className="flex gap-2 items-center text-gray-500 text-sm md:text-base">
//           <p>Home</p>
//           <IoIosArrowForward />
//           <p className="text-black">Cart</p>
//         </div>
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl md:text-5xl font-bold px-4 md:px-8 lg:px-10 mt-4">
//         YOUR CART
//       </h1>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-10 mt-6">
//         {/* Cart Items */}
//         <div className="flex-1 border-[1px] rounded-[20px] space-y-6">
//           {/* Item 1 */}
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4  rounded-lg">
//             <Image
//               src="/images/category1.png"
//               alt="Gradient Graphic T-shirt"
//               width={124}
//               height={124}
//               className="rounded-lg"
//             />
//             <div className="flex-1 text-center sm:text-left">
//               <h3 className="font-bold text-lg">Gradient Graphic T-shirt</h3>
//               <p className="text-gray-500 text-sm">
//                 Size: <span className="text-black">Large</span>
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Color: <span className="text-black">White</span>
//               </p>
//               <p className="font-bold mt-2 text-xl">$145</p>
//             </div>
//             <div className="flex flex-col items-center sm:items-end">
//               <RiDeleteBinFill className="text-red-500 relative bottom-16  text-xl cursor-pointer" />
//               <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
//                 <span className="cursor-pointer">-</span>
//                 <span className="px-4">1</span>
//                 <RiAddLargeLine className="cursor-pointer" />
//               </div>
//             </div>
//           </div>
//           <div className=" mt-[34px]  border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div>

//           {/* Item 2 */}
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 rounded-lg">
//             <Image
//               src="/images/category5.png"
//               alt="Checkered Shirt"
//               width={124}
//               height={124}
//               className="rounded-lg"
//             />
//             <div className="flex-1 text-center sm:text-left">
//               <h3 className="font-bold text-lg">Checkered Shirt</h3>
//               <p className="text-gray-500 text-sm">
//                 Size: <span className="text-black">Medium</span>
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Color: <span className="text-black">Red</span>
//               </p>
//               <p className="font-bold mt-2 text-xl">$180</p>
//             </div>
//             <div className="flex flex-col items-center sm:items-end">
//               <RiDeleteBinFill className="text-red-500 relative bottom-16  text-xl cursor-pointer" />
//               <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
//                 <span className="cursor-pointer">-</span>
//                 <span className="px-4">1</span>
//                 <RiAddLargeLine className="cursor-pointer" />
//               </div>
//             </div>
//           </div>
//           <div className=" mt-[34px]  border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div>
//           {/* Item 3 */}
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4  rounded-lg">
//             <Image
//               src="/images/category4.png"
//               alt="Skinny Fit Jeans"
//               width={124}
//               height={124}
//               className="rounded-lg"
//             />
//             <div className="flex-1 text-center sm:text-left">
//               <h3 className="font-bold text-lg">Skinny Fit Jeans</h3>
//               <p className="text-gray-500 text-sm">
//                 Size: <span className="text-black">Large</span>
//               </p>
//               <p className="text-gray-500 text-sm">
//                 Color: <span className="text-black">Blue</span>
//               </p>
//               <p className="font-bold mt-2 text-xl">$240</p>
//             </div>
//             <div className="flex flex-col items-center sm:items-end">
//               <RiDeleteBinFill className="text-red-500 relative bottom-16  text-xl cursor-pointer" />
//               <div className="flex items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
//                 <span className="cursor-pointer">-</span>
//                 <span className="px-4">1</span>
//                 <RiAddLargeLine className="cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="w-full lg:w-[400px] p-6 border rounded-lg h-[458px]">
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
//       <br /><br />
//     </>
//   );
// };

// export default Cart;












// app/Cart/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch the cart from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartItems);
  }, []);

  // Remove item from the cart
  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-700">Your cart is empty.</p>
        <button
          onClick={() => router.push('/Category')}
          className="bg-indigo-600 text-white py-2 px-4 mt-4 rounded-md hover:bg-indigo-800 transition duration-300"
        >
          Go to Category
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
        <div className="space-y-6">
          {cart.map((product) => (
            <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg shadow-md">
              <div className="flex items-center">
                <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded-lg" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-gray-500">${product.price.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-800 transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-right">
          <button
            onClick={() => router.push('/Category')}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-800 transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
