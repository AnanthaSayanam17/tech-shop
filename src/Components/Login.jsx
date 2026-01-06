import React from "react";

const Login = ({ onClose, switchToSignup }) => {
  return (
    <div className="bg-[#141414] w-full max-w-md rounded-lg p-6 relative text-white">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      <div className="flex flex-col gap-4">
        <h2
          className="text-2xl font-bold"
          style={{ color: "rgb(169, 174, 194)" }}
        >
          Login
        </h2>
        <p className="text-gray-400 text-sm">
          Don't have an account?{" "}
          <span
            className="text-red-600 cursor-pointer"
            onClick={switchToSignup}
          >
            Sign Up
          </span>
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded outline-none"
        />

        <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-bold mt-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
