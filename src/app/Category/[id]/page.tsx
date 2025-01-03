
'use client';  

import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const fetchProduct = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (params.id) {
        const productData = await fetchProduct(params.id);
        if (productData) {
          setProduct(productData);
        } else {
          alert('Product not found');
        }
      }
    };
    loadProduct();
  }, [params.id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg text-gray-500 mb-4">
              Category: <span className="font-semibold">{product.category}</span>
            </p>
            <p className="text-2xl font-semibold text-indigo-600">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
