import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../app/slices/CartSlice.js";
import { fetchProducts } from "../app/slices/ProductSlice.js";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.MyProductSlice.products);

  useEffect(() => {
    dispatch(fetchProducts()); // ✅ Fetch products when component mounts
  }, [dispatch]);

  // ✅ Add to cart function
  const handleAddToCart = (product, e) => {
    e.stopPropagation(); // ✅ Prevent card click from triggering navigation
    dispatch(add(product));
  };

  // ✅ Navigate to product details
  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative z-0">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        🛍️ Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative z-10"
            onClick={() => handleCardClick(product.id)}
          >
            {/* Product Image */}
            <div className="w-full h-64 flex justify-center items-center overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 z-0"
                src={product.images[0]}
                alt={product.title}
              />
            </div>

            {/* Product Details */}
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
              <p className="text-gray-600 flex-grow">{product.description}</p>
              <p className="text-indigo-600 font-bold text-lg mt-2">💲{product.price}</p>
            </div>

            {/* Add to Cart Button (Fixed Alignment) */}
            <div className="p-4 flex justify-center mt-auto">
              <button
                onClick={(e) => handleAddToCart(product, e)}
                className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 
                           hover:bg-indigo-800 hover:shadow-md hover:scale-105"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
