import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import image11 from "../../Assets/image11.png";

const CheckoutPage = ({item}) => {
  // State to track cart items
  const [quantity, setQuantity] = useState(item ? item.quantity : 1);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dorem ipsum dolor",
      description: "Korem ipsum dolor",
      price: 165.0,
      quantity: 2,
    },
    {
      id: 2,
      name: "Corem ipsum dolor",
      description: "Gorem ipsum dolor",
      price: 165.0,
      quantity: 2,
    },
  ]);



 
  // Increment and decrement quantity
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);



  return (
    <div className="flex justify-between p-10 space-x-10">
      {/* Cart Items */}
      <div className="flex justify-between p-10 space-x-10">
      {/* Cart Items */}
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg space-y-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            {/* Product Info */}
            <div className="flex items-center space-x-4">
              <img
                src={image11}
                alt="Product"
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button onClick={decrementQuantity} className="border border-gray-300 text-gray-600 px-2 py-1 rounded-md hover:bg-gray-100">
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity} className="border border-gray-300 text-gray-600 px-2 py-1 rounded-md hover:bg-gray-100">
                  +
                </button>
              </div>
              <div className="text-xl font-medium">$160</div>
            </div>

            {/* Delete Button */}
            <button className="text-red-500">
              <FiTrash2 className="h-6 w-6" />
            </button>
          </div>
        ))}

        {/* Total Section */}
        <div className="flex justify-between items-center text-2xl font-semibold mt-8 pt-4 border-t">
          <span>Total</span>
          <span>$360</span>
        </div>
      </div>

      {/* Rest of your component */}
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

        {/* Payment Form */}
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
              placeholder="John Doe"
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
          <button className="w-[10vw] py-2 bg-purple-700 rounded text-white font-bold hover:bg-purple-600 transition">
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
