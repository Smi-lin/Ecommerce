// Cart.jsx
import React, { useState } from "react";
import image11 from "../../Assets/image11.png";
import { GoTrash } from "react-icons/go";
import Wishlist from "../Wishlist/Wishlist";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  // Increment and Decrement Quantity
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center">
        <img
          src={image11} // Using the imported image
          alt={item.title}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">Vorem Ipsum Dolor</h2>
        </div>
      </div>
      <div className="flex flex-col items-center space-x-4">
        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={decrementQuantity}
            className="border border-gray-300 text-gray-600 px-2 py-1 rounded-md hover:bg-gray-100"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="border border-gray-300 text-gray-600 px-2 py-1 rounded-md hover:bg-gray-100"
          >
            +
          </button>
        </div>
        {/* Price Below Quantity */}
        <span className="text-lg font-semibold mt-2">$160</span>
      </div>
      <button className="text-red-500 hover:text-red-700">
        <GoTrash />
      </button>
    </div>
  );
};

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      title: "Vorem Ipsum Dolor",
      image: image11,
      quantity: 2,
      price: 160,
    },
    {
      id: 2,
      title: "Vorem Ipsum Dolor",
      image: image11,
      quantity: 2,
      price: 160,
    },
  
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Carts</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="flex justify-end mt-6 mb-[9rem]">
        <div className="text-right">
          <p className="text-lg">
            Total: <span className="font-semibold">$360</span>
          </p>
         <Link to="/checkout">
         <button className="mt-4 px-6 py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600">
            Proceed to Checkout
          </button>
         </Link>
        </div>
      </div>

      <Wishlist/>
    </div>
  );
};

export default Cart;
