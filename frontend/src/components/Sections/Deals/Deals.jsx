import React from 'react';
import image11 from "../../../Assets/image11.png"


function Deals() {
  return (
    <>
      <div className="flex">
        {/* Left Sidebar */}
        <div className="flex flex-col items-center p-8 w-1/4 mt-[5rem]">
          <h1 className="text-3xl font-serif mb-6">Jorem ipsum dolor</h1>

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

        {/* Products Section */}
        <div className="flex flex-wrap justify-center w-3/4 mt-[5rem]">
          <div className="h-[35vh] w-[15vw] bg-[#E1BCF6] m-4">
            <img
              src={image11}
              className="h-[20vh] w-[10vw] mx-auto pt-8"
              alt="Product"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl">Yorem ipsum dolor</h3>
              <p>$8.49 - $135.99</p>
              <button className="mt-2 px-10 py-2 bg-purple-500 text-white rounded">Button</button>
            </div>
          </div>

          <div className="h-[35vh] w-[15vw] bg-[#E1BCF6] m-4">
            <img
              src={image11}
              className="h-[20vh] w-[10vw] mx-auto pt-8"
              alt="Product"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl">Dorem ipsum</h3>
              <p>$8.49 - $135.99</p>
              <button className="mt-2 px-10 py-2 bg-purple-500 text-white rounded">Button</button>
            </div>
          </div>

          <div className="h-[35vh] w-[15vw] bg-[#E1BCF6] m-4">
            <img
              src={image11}
              className="h-[20vh] w-[10vw] mx-auto pt-8"
              alt="Product"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl">Worem ipsum dolor</h3>
              <p>$8.49 - $135.99</p>
              <button className="mt-2 px-10 py-2 bg-purple-500 text-white rounded">Button</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deals;
