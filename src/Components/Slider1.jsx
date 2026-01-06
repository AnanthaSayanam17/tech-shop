import React from "react";

const Slider1 = ({ product }) => {
  if (!product) return null;
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="
  absolute top-[11rem] left-4 sm:top-[10rem] sm:left-10 md:top-[12rem] md:left-0 -translate-y-1/2 text-[8rem] sm:text-[7rem] md:text-[11rem] lg:text-[15rem] lg:top-[15rem] lg:left-20 font-bold text-white/10 select-none pl-0 sm:pl-4 md:pl-6
"
        >
          {product.type}
        </div>
      </div>
      <div className="relative z-10 flex flex-col-reverse md:flex-row h-full min-h-screen items-center justify-around px-6">
        <div className="md:mt-0">
          <div className="mb-1 md:mb-3">
            <p className="m-0 font-semibold text-xl md:text-2xl">
              {product.title}
            </p>
          </div>

          <div className="mb-3 md:mb-5">
            <h1 className="font-bold text-3xl md:text-5xl leading-[1.1] max-w-[20ch] md:max-w-[18ch]">
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
            <button className="bg-red-600 hover:bg-red-700 transition-colors py-2 md:py-2.5 px-6 rounded text-white font-semibold">
              Shop Now
            </button>
          </div>
        </div>

        <div className="mb-4 md:mb-0">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-[14rem] sm:w-[25rem] md:w-[35rem] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider1;
