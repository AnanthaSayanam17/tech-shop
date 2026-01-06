import React from "react";

const CartTemplate = () => {
  return (
    <div className="mx-4 md:mx-10 my-16 flex flex-col lg:flex-row gap-8">
      {/* Cart Item */}
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-xl w-full lg:w-[65%]"
        style={{ backgroundColor: "rgb(22, 24, 26)" }}
      >
        {/* Product Image */}
        <img
          src="/images/products/boat110-1.png"
          alt=""
          className="w-[8rem] md:w-[10rem] object-contain"
        />

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-3">
          <p className="font-semibold text-lg md:text-2xl leading-snug">
            JBL Live 660NC Wireless OverEar NC Headphones
          </p>

          <div className="flex gap-4 items-center">
            <p className="font-bold text-xl md:text-3xl">₹14,999</p>
            <p className="font-semibold text-lg md:text-2xl line-through opacity-50">
              ₹21,999
            </p>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-6 mt-2">
            <button className="border px-4 py-1 text-xl hover:bg-white/10">
              -
            </button>
            <span className="text-red-600 text-xl font-semibold">1</span>
            <button className="border px-4 py-1 text-xl hover:bg-white/10">
              +
            </button>
          </div>
        </div>

        {/* Delete */}
        <button className="text-red-500 hover:text-red-600 text-sm md:text-base">
          Delete
        </button>
      </div>

      {/* Order Summary */}
      <div
        className="w-full lg:w-[35%] p-6 rounded-xl"
        style={{ backgroundColor: "#141414" }}
      >
        <div className="flex mb-4 gap-5 font-bold text-[1.5rem]">
          <p className="font-bold text-[1.5rem]">Order Summary</p>
          <p className="opacity-70">( 4 items )</p>
        </div>

        <div className="flex justify-between mb-2">
          <h5>Original Price</h5>
          <h6>₹45,547</h6>
        </div>

        <div className="flex justify-between mb-2 ">
          <h5>Discount</h5>
          <p className="text-green-500">-₹4,547</p>
        </div>

        <div className="flex justify-between mb-4 ">
          <h5>Delivery</h5>
          <p className="text-green-500">Free</p>
        </div>

        <hr className="border-white/10 mb-4" />

        <div className="flex justify-between text-[2rem] font-bold">
          <p>Total Price</p>
          <p>₹40,999</p>
        </div>
      </div>
    </div>
  );
};

export default CartTemplate;
