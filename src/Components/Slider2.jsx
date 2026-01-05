import React from "react";

const Slider1 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-full min-h-screen items-center justify-around px-6">
      <div className="md:mt-0">
        <div className="mb-1 md:mb-3">
          <p className="m-0 font-semibold text-xl md:text-2xl">
            JBL Live 660NC
          </p>
        </div>
        <div className="mb-3 md:mb-5">
          <p className="font-bold text-3xl md:text-5xl">
            Keep The Noise <br /> Out, Or In. You <br /> Choose
          </p>
        </div>
        <div className="mb-3 md:mb-4">
          <div className="flex gap-6">
            <p className="font-bold text-2xl md:text-3xl">₹9,999</p>
            <p className="font-semibold text-xl md:text-2xl line-through">
              ₹14,999
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
          src={"images/products/jbl660nc-1.png"}
          alt=""
          className="w-[14rem] sm:w-[25rem] md:w-[35rem] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Slider1;
