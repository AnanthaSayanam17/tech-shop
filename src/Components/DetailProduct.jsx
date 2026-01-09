import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/productsData";
import { useCart } from "../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";

const DetailProduct = () => {
  const { id } = useParams();
  const product = productsData.find((p) => String(p.id) === String(id));

  const [activeImage, setActiveImage] = useState(product?.images[0] || "");
  const [isAdded, setIsAdded] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    if (product) {
      setActiveImage(product.images[0]);
      window.scrollTo(0, 0);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="text-center py-20 text-white">Product not found!</div>
    );
  }

  if (!product) {
    return <div className="text-center py-20">Product not found!</div>;
  }

  const handleAddToCart = () => {
    const limitReached = addToCart(product);
    if (limitReached) {
      toast.error("Maximum limit of 5 items reached!", {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
    } else {
      toast.success("Added to cart!", {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 4000);
    }
  };

  const discount = product.originalPrice - product.finalPrice;

  return (
    <div
      className="w-full px-4 py-12 min-h-screen flex items-start"
      style={{ backgroundColor: "rgb(20, 20, 20)", color: "rgb(169,174,194)" }}
    >
      <Toaster position="bottom-right" />

      <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto">
        <div className="hidden md:flex gap-6 flex-shrink-0 w-full lg:w-auto">
          <div className="flex flex-col gap-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.title}-${idx}`}
                className={`w-28 h-28 object-contain border-2 rounded cursor-pointer transition-all ${
                  activeImage === img
                    ? "border-red-600 scale-105"
                    : "border-gray-700 opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
          <div className="flex-1 flex justify-center items-center bg-[#1a1a1a] rounded-lg p-6 h-[500px] md:w-[500px]">
            <img
              src={activeImage}
              alt={product.title}
              className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:hidden w-full">
          <div className="flex justify-center items-center bg-[#1a1a1a] rounded-lg p-6 h-[350px] w-full">
            <img
              src={activeImage}
              alt={product.title}
              className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex flex-row gap-4 overflow-x-auto pb-2 mt-6">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.title}-${idx}`}
                className={`w-20 h-20 object-contain border-2 rounded cursor-pointer flex-shrink-0 transition-all ${
                  activeImage === img
                    ? "border-red-600 scale-105"
                    : "border-gray-700 opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-start py-4">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                {product.title}
              </h1>
              <p className="text-xl text-gray-400 font-medium tracking-wide">
                {product.info}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`text-xl ${
                        idx < product.rateCount
                          ? "text-red-600"
                          : "text-gray-700"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500 border-l border-gray-700 pl-3">
                  {product.ratings} Verified Ratings
                </span>
              </div>
            </div>

            <hr className="border-gray-800" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-bold">
                    ₹{product.finalPrice.toLocaleString()}
                  </span>
                  <span className="text-2xl text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-green-500 font-bold text-xl">
                  You save ₹{discount.toLocaleString()} (
                  {((discount / product.originalPrice) * 100).toFixed(0)}% Off)
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="px-6 py-2 text-sm font-bold uppercase tracking-widest bg-green-600 text-white rounded-sm cursor-default whitespace-nowrap flex items-center gap-2 shadow-lg shadow-green-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  In Stock
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-500 uppercase tracking-widest">
              ( Inclusive of all taxes )
            </p>

            <hr className="border-gray-800" />
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-xl tracking-wide">
                Offers and Discounts
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex-1 max-w-[180px] bg-[#1a1a1a] p-3 border border-gray-800 hover:border-gray-600 transition-colors rounded-sm group">
                  <p className="text-xl text-gray-400 leading-tight group-hover:text-gray-200">
                    No cost EMI on <br /> Credit Cards
                  </p>
                </div>
                <div className="flex-1 max-w-[180px] bg-[#1a1a1a] p-3 border border-gray-800 hover:border-gray-600 transition-colors rounded-sm group">
                  <p className="text-xl text-gray-400 leading-tight group-hover:text-gray-200">
                    Pay later & Avail <br /> Cashback
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={handleAddToCart}
                className={`w-full md:w-56 py-3.5 rounded-sm font-bold uppercase tracking-wider text-sm text-white transition-all transform active:scale-95 shadow-lg ${
                  isAdded ? "bg-green-600" : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {isAdded ? "✓ Added" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
