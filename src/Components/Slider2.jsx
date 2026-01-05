import React from "react";

const Slider1 = ({ product }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-full min-h-screen items-center justify-around px-6">
      <div className="md:mt-0">
        <div className="mb-1 md:mb-3">
          <p className="m-0 font-semibold text-xl md:text-2xl">
            {product.title}
          </p>
        </div>
        <div className="mb-3 md:mb-5">
          <h1 className="font-bold text-3xl md:text-5xl leading-[1.1] max-w-[20ch] md:max-w-[18ch] ">
            {product.tagline}
          </h1>
        </div>
        <div className="mb-3 md:mb-4">
          <div className="flex gap-6">
            <p className="font-bold text-2xl md:text-3xl">
              ₹{product.finalPrice?.toLocaleString()}
            </p>
            <p className="font-semibold text-xl md:text-2xl line-through opacity-50">
              ₹{product.originalPrice?.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="mb-3">
          <button className="bg-red-600 py-2 md:py-2.5 px-4 rounded text-white font-semibold">
            Shop Now
          </button>
        </div>
      </div>

      <div className="mb-4 md:mb-0">
        <img
          src={product.images[0]}
          alt=""
          className="w-[14rem] sm:w-[25rem] md:w-[35rem] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Slider1;
