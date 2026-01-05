import React from "react";

const Slider1 = () => {
  return (
    <div className="d-flex h-[40rem] items-center justify-around">
      <div>
        <div className="mb-3">
          <p className="m-0 font-semibold text-2xl">JBL Live 660NC</p>
        </div>
        <div className="mb-5">
          <p className="font-bold text-5xl">
            Keep The Noise <br /> Out, Or In. You <br /> Choose
          </p>
        </div>
        <div className="mb-4">
          <div className="d-flex gap-6">
            <p className="font-bold text-3xl">₹9,999</p>
            <p className="font-semibold text-2xl line-through">₹14,999</p>
          </div>
        </div>
        <div className="mb-3">
          <button className="bg-red-600 py-2.5 px-4 rounded text-white font-semibold">
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <img
          src={"images/products/jbl660nc-1.png"}
          alt=""
          className="w-[35rem]"
        />
      </div>
    </div>
  );
};

export default Slider1;
