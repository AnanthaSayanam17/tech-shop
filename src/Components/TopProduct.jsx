import React from "react";

const TopProduct = ({ product }) => {
  const ratingStars = Array.from(
    { length: product.rateCount || 0 },
    (_, i) => i + 1
  );

  return (
    <div className="p-5 border border-gray-800 rounded-xl w-full bg-[#1a1a1a] flex flex-col hover:border-gray-600 transition-all duration-300 shadow-lg">
      <div className="flex justify-center items-center mb-5 h-48">
        <img
          src={product.images[0]}
          alt={product.title}
          className="max-w-full h-40 object-contain transform hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="my-4 flex gap-1">
        {ratingStars.map((star) => (
          <span key={star} className="text-red-600 text-lg">
            ★
          </span>
        ))}
      </div>

      <div className="mb-4">
        <p className="m-0 font-bold text-lg  truncate">{product.title}</p>
        <div className="text-gray-400 mt-1 h-10">{product.info}</div>
      </div>

      <hr className="m-0 mb-4 border-gray-700" />

      <div className="flex items-center gap-4 mb-4">
        <p className="font-bold text-xl ">
          ₹{product.finalPrice?.toLocaleString()}
        </p>
        <p className="font-semibold text-sm line-through text-gray-500">
          ₹{product.originalPrice?.toLocaleString()}
        </p>
      </div>

      <div className="mt-auto">
        <button className="bg-red-600 hover:bg-red-700 py-2.5 px-4 rounded-lg text-white font-semibold w-full transition-colors active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TopProduct;
