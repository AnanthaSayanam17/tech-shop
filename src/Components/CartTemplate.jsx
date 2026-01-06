import React from "react";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartTemplate = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();
  const originalTotal = cartItems.reduce(
    (acc, item) => acc + item.originalPrice * (item.quantity || 1),
    0
  );
  const finalTotal = cartItems.reduce(
    (acc, item) => acc + item.finalPrice * (item.quantity || 1),
    0
  );
  const discount = originalTotal - finalTotal;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 font-sans overflow-x-hidden">
      {cartItems.length === 0 ? (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Your Cart is Empty
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-md">
            Looks like you haven’t added anything to your cart yet.
          </p>

          <Link
            to="/products"
            style={{ textDecoration: "none" }}
            className="mt-4 inline-flex items-center gap-3 bg-[#d70000] hover:bg-red-700 transition
             px-10 py-4 rounded-sm font-bold text-white uppercase text-lg
             hover:gap-4"
          >
            <FaShoppingCart className="text-xl group-hover:scale-110 transition-transform" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* LEFT CART ITEMS */}
          <div className="w-full lg:w-[60%]">
            <div className="rounded-sm overflow-y-auto h-[500px] pr-4 no-scrollbar">
              {cartItems.map((product) => (
                <div key={product.id}>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 py-8 relative">
                    <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                      <img
                        src={product.images ? product.images[0] : product.image}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-3 items-center md:items-start">
                      <div className="flex justify-between items-start flex-wrap w-full">
                        <h3 className="text-lg md:text-xl font-medium max-w-[85%] leading-tight text-center md:text-left">
                          {product.title}
                        </h3>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors pt-1"
                        >
                          <FiTrash2 size={20} />
                        </button>
                      </div>

                      <div className="flex gap-3 items-center flex-wrap justify-center md:justify-start">
                        <span className="font-bold text-3xl">
                          ₹{product.finalPrice.toLocaleString()}
                        </span>
                        <span className="text-gray-500 line-through text-2xl font-bold">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex mt-2">
                        <div className="flex items-center bg-[#1a1a1a] border border-gray-800 rounded">
                          <button
                            onClick={() => decrementQuantity(product.id)}
                            disabled={product.quantity <= 1}
                            className="p-2 text-gray-400 hover:bg-gray-800 transition
                          disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <FiMinus size={14} />
                          </button>

                          <span className="px-4 py-1 text-red-600 font-bold text-lg border-x border-gray-800 min-w-[45px] text-center">
                            {product.quantity || 1}
                          </span>

                          <button
                            onClick={() => incrementQuantity(product.id)}
                            disabled={product.quantity >= 5}
                            className="p-2 text-gray-400 hover:bg-gray-800 transition
                          disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <FiPlus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="border-gray-800" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ORDER SUMMARY */}
          <div className="w-full lg:w-[40%] lg:pl-0 lg:pl-8 flex flex-col items-center lg:items-start">
            <div className="flex flex-col gap-6 sticky top-10 w-full">
              <div className="flex items-baseline gap-2 font-bold flex-wrap justify-center lg:justify-start w-full">
                <h2 className="text-2xl">Order Summary</h2>
                <span className="text-gray-400 text-lg">
                  ({cartItems.length} items)
                </span>
              </div>

              <div className="space-y-4 pt-4 w-full text-center lg:text-left">
                <div className="flex justify-between text-gray-400 text-lg">
                  <p>Original Price</p>
                  <p className="font-bold">₹{originalTotal.toLocaleString()}</p>
                </div>

                <div className="flex justify-between text-lg">
                  <p className="text-gray-400">Discount</p>
                  <p className="text-green-500 font-bold">
                    - ₹{discount.toLocaleString()}
                  </p>
                </div>

                <div className="flex justify-between text-lg">
                  <p className="text-gray-400">Delivery</p>
                  <p className="text-green-500 font-bold">Free</p>
                </div>
              </div>

              <hr className="border-gray-800 my-2 w-full" />

              <div className="flex justify-between items-center py-4 flex-wrap w-full text-center lg:text-left">
                <p className="text-2xl font-bold">Total Price</p>
                <p className="text-3xl font-bold">
                  ₹{finalTotal.toLocaleString()}
                </p>
              </div>

              <button className="w-full bg-[#d70000] hover:bg-red-700 py-4 rounded-sm font-bold text-white uppercase">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CartTemplate;
