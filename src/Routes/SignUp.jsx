import React from "react";
import nightImg from "../assets/night.jpg";

const SignUp = () => {
  return (
    <div>
      <div
        className="h-72 bg-cover bg-center flex items-center justify-center text-white text-4xl md:text-5xl font-bold tracking-wide"
        style={{ backgroundImage: `url(${nightImg})` }}
      >
        Sign Up
      </div>
      <div className="flex justify-center px-4 py-16">

        <form className="w-full max-w-md bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col gap-4">

          <h2 className="text-2xl font-bold text-center mb-2">
            Create Account
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="mt-2 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Create Account
          </button>

        </form>

      </div>

    </div>
  );
};

export default SignUp;