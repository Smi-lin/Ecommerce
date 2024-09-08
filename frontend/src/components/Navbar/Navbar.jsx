import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-full bg-[#bba7a7]">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-8 h-[5rem] mb-[5rem]">
        {/* Left side: Logo */}
        <Link to="/">
          <h1 className="text-[#BB66E6] text-3xl font-bold">Brand Name</h1>
        </Link>

        {/* Center: Search bar */}
        <div className="relative w-[40vw]">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full h-[3rem] pl-12 pr-8 rounded-full border-[2px] border-[#ffe5d9] outline-none text-gray-700"
          />
          <IoSearchOutline
            size={24}
            className="absolute left-4 top-[50%] translate-y-[-50%] text-gray-500 cursor-pointer"
          />
        </div>

        {/* Right side: Conditional Rendering */}
        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            // After login (Second image)
            <>
              <Link to="/profile">
                <button
                  type="submit"
                  className="rounded-full text-white bg-[#BB66E6] w-[3rem] h-[3rem] flex items-center justify-center"
                >
                  <FaRegUser size={24} />
                </button>
              </Link>
              <Link to="/cart">
              <MdOutlineShoppingCart
                size={30}
                className="text-black cursor-pointer"
              />
              </Link>
            </>
          ) : (
            // Before login (First image)
            <>
              <Link to="/login">
                <button
                  type="submit"
                  className="rounded-md text-white bg-[#BB66E6] w-[8rem] h-[3rem] font-semibold"
                  onClick={() => setIsLoggedIn(true)} // Set logged in status
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  type="submit"
                  className="rounded-md text-black bg-white border-[#BB66E6] w-[8rem] h-[3rem] font-semibold"
                >
                  Sign Up
                </button>
              </Link>

              <MdOutlineShoppingCart
                size={30}
                className="text-black cursor-pointer"
              />

            </>
          )}
        </div>
      </div>

      {/* Text Links Below Navbar */}
      <div className="w-full bg-[#ffe5d9] text-[2rem]">
        <div className="flex justify-center gap-16 py-4">
          {isLoggedIn ? (
            <>
              <Link to="/">
                <p className="text-black cursor-pointer">Home</p>
              </Link>
              <Link to="/accessories">
                <p className="text-black cursor-pointer">Accessories</p>
              </Link>
              <Link to="/deals">
                <p className="text-black cursor-pointer">Deals</p>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <p className="text-black cursor-pointer">Home</p>
              </Link>
              <Link to="/recommended">
                <p className="text-black cursor-pointer">Recommended</p>
              </Link>
              <Link to="/deals">
                <p className="text-black cursor-pointer">Deals</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
