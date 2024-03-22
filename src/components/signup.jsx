import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-purple-700 to-blue-500">
      <div className="text-center p-14 rounded-lg shadow-lg bg-white bg-opacity-75">
        <h1 className="text-3xl mb-8 text-gray-800">Create an Account</h1>
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-left mb-2 text-black">
              Name:
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-left mb-2 text-black">
              Email:
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-left mb-2 text-black"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-700">Already have an account?</p>
        <a className="text-blue-500 hover:underline">Login here</a>
      </div>
    </div>
  );
};

export default Signup;
