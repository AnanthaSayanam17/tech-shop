import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";

const TopProduct = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const limitReached = addToCart(product);

    if (limitReached) {
      toast.error("Maximum limit of 5 items reached!", {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
    } else {
      toast.success("Added to cart!", {
        duration: 2000,
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 4000);
    }
  };

  const { addToCart } = useCart();
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
        <p className="font-bold text-2xl ">
          ₹{product.finalPrice?.toLocaleString()}
        </p>
        <p className="font-semibold text-xl line-through text-gray-500">
          ₹{product.originalPrice?.toLocaleString()}
        </p>
      </div>

      <div className="mt-auto">
        <button
          className={`py-2.5 px-4 rounded-lg text-white font-semibold w-full transition-all duration-300 active:scale-95 ${
            isAdded
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          }`}
          onClick={(e) => handleAddToCart(e)}
        >
          {isAdded ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default TopProduct;
