import React, { useState } from "react";
import { FaTrash } from "react-icons/fa"; // Import trash icon
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  // State to track quantity and total price
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Lorem ipsum dolor", price: 165.0, quantity: 2 },
    { id: 2, name: "Gorem ipsum dolor", price: 165.0, quantity: 2 },
  ]);

  const handleQuantityChange = (id, amount) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    setCartItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <div className="flex justify-between p-10 space-x-10">
      {/* Cart Items */}
      <div className="w-1/2 space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex space-x-4">
              <img
                src="https://via.placeholder.com/70"
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div className="space-y-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">Quantity</p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 border border-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 border border-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span className="font-semibold">
                ${item.price * item.quantity}
              </span>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

        {/* Total */}
        <div className="text-right mt-6 border-t border-gray-300 pt-4">
          <p className="font-bold text-lg">Total</p>
          <p className="text-lg">$440</p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="w-[35vw] h-[50vh] p-8 bg-purple-900 text-white rounded-lg space-y-6">
        <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
        <div className="flex space-x-4 items-center">
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" />
            <span className="text-sm">💳</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" />
            <span className="text-sm">Crypto</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" />
            <span className="text-sm">PayPal</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" />
            <span className="text-sm">Apple Pay</span>
          </label>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Card number</label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="XXXX"
                className="w-1/4 p-2 bg-white text-black rounded"
              />
              <input
                type="text"
                placeholder="XXXX"
                className="w-1/4 p-2 bg-white text-black rounded"
              />
              <input
                type="text"
                placeholder="XXXX"
                className="w-1/4 p-2 bg-white text-black rounded"
              />
              <input
                type="text"
                placeholder="XXXX"
                className="w-1/4 p-2 bg-white text-black rounded"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div>
              <label className="block text-sm mb-1">Expiry date</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="MM"
                  className="w-1/2 p-2 bg-white text-black rounded"
                />
                <input
                  type="text"
                  placeholder="YY"
                  className="w-1/2 p-2 bg-white text-black rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">CVV</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="XXX"
                  className="w-full p-2 bg-white text-black rounded"
                />
                <span className="absolute right-2 top-2 text-sm">?</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Name on card</label>
            <input
              type="text"
              placeholder="Jewel Thompson-Aduku"
              className="w-full p-2 bg-white text-black rounded"
            />
          </div>
        </form>

        <div className="flex justify-between">
          <p className="mt-4 text-center">
            <a href="#" className="text-sm text-gray-300 underline">
              Back
            </a>
          </p>
         <Link to="Success">
         <button className="w-[10vw] py-2 bg-purple-700 rounded text-white font-bold hover:bg-purple-600 transition">
            Pay now
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
