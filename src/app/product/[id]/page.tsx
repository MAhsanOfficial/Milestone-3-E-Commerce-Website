// import React from "react";
// import axios from "axios";

// // Define the Product interface with details
// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
// }

// const ProductDetails = async ({ params }: { params: { id: string } }) => {
//   const { id } = params;

//   // Fetch product details from the API
//   try {
//     const response = await axios.get(
//       `https://api.escuelajs.co/api/v1/products/${id}`
//     );
//     const product: Product = response.data;

//     return (
//       <div className="p-5">
//         <div className="bg-white p-5 rounded-lg shadow-md">
//           <img
//             className="w-full h-56 object-cover rounded-md mb-4"
//             src={product.images[0]} // Display the first image
//             alt={product.title}
//           />
//           <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
//           <p className="text-lg font-bold text-gray-700">${product.price}</p>
//           <p className="text-sm text-gray-700 mt-4">{product.description}</p>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching product details:", error);
//     return <p>Product not found!</p>;
//   }
// };

// export default ProductDetails;








import React from "react";
import axios from "axios";

// Define the Product interface with details
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch product details from the API
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    const product: Product = response.data;

    return (
      <div className="p-5">
        <div className="bg-white p-5 rounded-lg shadow-md">
          {/* Loop through the images array and display each image */}
          <div className="flex gap-4 mb-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                className="w-32 h-32  flex flex-col object-cover rounded-md"
                src={image}
                alt={`Product ${product.id} - Image ${index + 1}`}
              />
            ))}
          </div>
          <h3 className="text-2xl font-mono font-semibold mb-2">{product.title}</h3>
          <p className="text-lg  underline font-bold text-gray-700">${product.price}</p>
          <p className="text-sm text-gray-700 mt-4">{product.description}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return <p>Product not found!</p>;
  }
};

export default ProductDetails;

