import React from "react";

const SignUp = ({ onClose, switchToLogin }) => {
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
          Sign Up
        </h2>
        <p className="text-gray-400 text-sm">
          Already have an account?{" "}
          <span className="text-red-600 cursor-pointer" onClick={switchToLogin}>
            Login
          </span>
        </p>

        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded outline-none"
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded outline-none"
        />

        <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-bold mt-2">
          Sign Up
        </button>

        <div className="flex items-center my-2">
          <hr className="flex-1 border-gray-600" />
          <span className="mx-2 text-gray-400 text-sm">or login with</span>
          <hr className="flex-1 border-gray-600" />
        </div>

        <div className="flex justify-between gap-4">
          <button className="flex-1 py-2 bg-blue-600 rounded font-bold hover:bg-blue-700">
            Facebook
          </button>
          <button className="flex-1 py-2 bg-red-500 rounded font-bold hover:bg-red-600">
            Google
          </button>
          <button className="flex-1 py-2 bg-sky-500 rounded font-bold hover:bg-sky-600">
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
