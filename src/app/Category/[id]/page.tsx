

'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation'; // Using 'useParams' to access dynamic route params
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the 'id' from the dynamic route params
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching product');
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading product details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="text-center text-gray-500">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-mono underline font-bold text-gray-800 mb-6">{product.title}</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <p className="text-2xl  underline font-bold text-gray-800 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-md text-gray-500">Category: {product.category}</p>
            <Link href="/Category" className='p-5'>
              <button className="mt-6 text-yellow-400 bg-red-500 rounded-lg  hover:text-yellow-800">
                Back to Category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
