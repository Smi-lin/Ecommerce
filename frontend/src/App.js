import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Deals from "./components/Sections/Deals/Deals";
import Accessories from "./components/Sections/Accessories/Accessories";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Payment from "./components/Payment/Payment";
import SuccessPage from "./components/SuccessPage/SuccessPage";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Payment />} />
        <Route path="/checkout/Success" element={<SuccessPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
