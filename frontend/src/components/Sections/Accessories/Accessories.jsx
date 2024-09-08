import React, { useState } from "react";
import image11 from "../../../Assets/image11.png";

const Accessories = () => {
  // State to manage the counter value
  const [quantity, setQuantity] = useState(1);

  // Function to increase the counter
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease the counter, with a minimum of 1
  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="flex flex-col p-8 w-full md:w-1/4 bg-gray-100 h-full">
          <h1 className="text-3xl font-serif mb-6">Search Products</h1>
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="w-full max-w-md mt-6">
            <h2 className="text-lg font-medium mb-3">Categories</h2>
            <div className="border-t border-b border-gray-300 py-3">
              <button className="w-full text-left flex justify-between items-center">
                <span>Accessories</span>
                <span>&#9660;</span> {/* Downward arrow */}
              </button>
            </div>

            <div className="border-b border-gray-300 py-3">
              <span>Deals</span>
            </div>
          </div>
        </div>

        {/* Right Section (Product Details) */}
        <div className="flex-1 flex flex-col md:flex-row p-6">
          {/* Image Section */}
          <div className="md:w-1/2 p-2 md:p-4">
            <img
              src={image11}
              alt="Accessories page"
              className="rounded-lg shadow-lg w-full md:w-[20vw] h-auto"
            />
          </div>

          {/* Product Details Section */}
          <div className="md:w-1/2 p-2 md:p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Horem ipsum dolor
            </h2>
            <p className="text-xl text-purple-600 mb-4">$8.49 - $135.99</p>

            <p className="text-gray-600 mb-4">
              <strong>Size:</strong> 4 x 32
            </p>

            <p className="text-gray-500 mb-4">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque.
            </p>

            {/* Stock and Quantity Section */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="inline-block bg-green-200 text-green-700 px-2 py-1 rounded-full text-sm">
                In stock
              </span>
              <div className="flex items-center space-x-2">
                <button
                  className="border px-2 py-1 text-lg"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  className="w-12 text-center border px-2 py-1"
                  readOnly
                />
                <button
                  className="border px-2 py-1 text-lg"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex space-x-4 mb-6">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md shadow hover:bg-purple-700 transition">
                Add to cart
              </button>
            </div>

            {/* Wishlist and Compare Section */}
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                <span className="text-sm">Add to wishlist</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                <span className="text-sm">Compare</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessories;
