// 'use client';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Link from 'next/link';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   image: string;
//   description: string;
// }

// const CategoryPage = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setProducts(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching products');
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-10">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">Product Category</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div key={product.id} className="border rounded-lg p-4 bg-white shadow-md">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
//               <p className="text-lg text-gray-500 mb-4">${product.price.toFixed(2)}</p>
//               <Link href={`/Category/${product.id}`}>
//                 <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-800 transition duration-300">
//                   View Details
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;












// app/Category/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const CategoryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add product to the cart
  const addToCart = (product: Product) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Product Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 bg-white shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
              <p className="text-lg text-gray-500 mb-4">${product.price.toFixed(2)}</p>
              <Link href={`/Category/${product.id}`}>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-800 transition duration-300">
                  View Details
                </button>
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 text-white py-2 px-4 mt-4 rounded-md hover:bg-green-800 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryPage;
