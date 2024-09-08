import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex flex-1 justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <img
              className="mx-auto"
              style={{ width: "120px" }}
              src="https://i.imgur.com/ax0NCsK.gif"
              alt="Logo"
            />
            <h5 className="text-2xl text-indigo-600 mt-4">Welcome Back!</h5>
            <p className="text-gray-600 mt-2">Please, login into your account</p>
          </div>

          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
              <div className="text-right">
                <a className="text-sm text-indigo-600 hover:text-indigo-800" href="#!">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link to="/login">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 ml-[6rem] rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </Link>
            </div>
          </form>

          <div className="text-center mt-6">
            <Link to="/signup" className="text-indigo-600 hover:text-indigo-800">
              Create account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
