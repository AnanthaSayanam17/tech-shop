import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { IoHome } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(20, 20, 20)",
        color: "rgb(169, 174, 194)",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 font-sans">
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-6">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#1a1a1a] border border-gray-800">
            <FiAlertTriangle className="text-[#d70000] text-4xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg">
            Sorry, the page you’re looking for doesn’t exist or may have been
            moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/"
              className="no-underline text-inherit inline-flex items-center justify-center gap-3
              bg-[#d70000] hover:bg-red-700 transition
              px-10 py-4 rounded-sm font-bold text-white uppercase text-lg hover:gap-4"
            >
              <IoHome className="text-xl transition-transform" />
              <span>Go to Home</span>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/products"
              className="no-underline text-inherit inline-flex items-center justify-center gap-3
              bg-[#d70000] hover:bg-red-700 transition
              px-10 py-4 rounded-sm font-bold text-white uppercase text-lg hover:gap-4"
            >
              <FaShoppingCart className="text-xl transition-transform" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
