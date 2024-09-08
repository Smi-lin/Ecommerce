import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[200px] text-black bg-white mb-[8rem]">
        <div className="flex justify-center items-center gap-[12rem] p-4">
          <h1 className="text-[2rem] flex-shrink-0 mr-8">Brand Name</h1>

          <div className="flex-shrink-0 mr-8">
            <h4 className="text-[1.3rem] mb-2">QUICK NAV</h4>
            <p className="mb-1">Home</p>
            <p className="mb-1">Categories</p>
            <p className="mb-1">Accessories</p>
          </div>
          <div className="flex-shrink-0 mr-8">
            <h4 className="text-[1.3rem] mb-2">CONNECT</h4>
            <p className="mb-1">Instagram</p>
            <p className="mb-1">Facebook</p>
            <p className="mb-1">Whatsapp</p>
          </div>
          <div className="flex-shrink-0 mr-8">
            <h4 className="text-[1.3rem] mb-2">LEGAL STUFF</h4>
            <p className="mb-1">Contact</p>
            <p className="mb-1">Privacy Policy</p>
            <p className="mb-1">Terms and Conditions</p>
          </div>
          <div className="flex-shrink-0">
            <h4 className="text-[1.3rem] mb-2">HOW TO REACH US</h4>
            <p className="mb-1">Phone: [+234]999-999-99</p>
            <p className="mb-1">Email: joinus@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
