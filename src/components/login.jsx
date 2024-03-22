import React from "react";
const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-purple-700 to-blue-500">
      <div className="text-center p-10 rounded-lg shadow-lg bg-white bg-opacity-75">
        <h1 className="text-3xl mb-8 text-gray-800">Login to Your Account</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left mb-2 text-gray-700"
            >
              Email:
            </label>
            <input
              id="email"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-left mb-2 text-gray-700"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-700">Don't have an account?</p>
        <a className="text-blue-500 hover:underline" href="/signup">
          Sign up here
        </a>
      </div>
    </div>
  );
};

export default Login;
