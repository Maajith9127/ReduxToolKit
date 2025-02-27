import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../app/slices/CartSlice.js";

const ProductDetails = () => {
  const { slug } = useParams(); // ✅ Get product ID from URL
  const products = useSelector((state) => state.MyProductSlice.products);
  const dispatch = useDispatch();

  // ✅ Find the product by ID
  const theProduct = products.find((product) => product.id === parseInt(slug));

  if (!theProduct) {
    return <div className="text-center text-red-500 mt-10 text-2xl">🚨 Product not found</div>;
  }

  // ✅ Add to Cart Handler
  const handleAddToCart = () => {
    dispatch(add(theProduct));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 relative z-0">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-2xl w-full relative z-10">
        {/* Product Image */}
        <div className="w-full flex justify-center relative">
          <img
            className="w-72 h-72 object-cover rounded-lg transform transition-all duration-300 
                       hover:scale-105 z-0" // ✅ Lower z-index to prevent overlay on navbar
            src={theProduct.images[0]}
            alt={theProduct.title}
          />
        </div>

        {/* Product Details */}
        <div className="mt-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">{theProduct.title}</h2>
          <p className="text-gray-600 mt-2">{theProduct.description}</p>
          <p className="text-indigo-600 font-bold text-xl mt-3">💲{theProduct.price}</p>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleAddToCart}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 
                       hover:bg-indigo-800 hover:shadow-lg hover:scale-105"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
