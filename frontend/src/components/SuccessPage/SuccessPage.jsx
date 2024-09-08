import React from 'react';

const SuccessPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-purple-900 text-white rounded-sm p-10 shadow-lg h-[40vh] w-[30vw] flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Payment Successful
      </h2>
      <button className="bg-white text-purple-900 font-medium py-3 px-6 rounded-lg shadow-md transition duration-300 hover:bg-gray-100">
        Keep Shopping
      </button>
    </div>
  </div>
  
  );
};

export default SuccessPage;
