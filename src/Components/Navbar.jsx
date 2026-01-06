import React, { useState } from "react";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import productsData from "../data/productsData";
import { useCart } from "../Context/CartContext";
import SignUp from "./SignUp";
import Login from "./Login";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(true);
  const [query, setQuery] = useState("");

  const { cartItems } = useCart();
  const cartCount = cartItems.length;
  const navigate = useNavigate();

  const filteredProducts =
    query.trim().length > 0
      ? productsData.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <>
      <div className="sticky top-0 z-50 bg-black flex p-3 justify-between items-center font-bold text-2xl">
        <Link to="/" className="nav-link">
          Tech-Shop
        </Link>
        <div className="hidden md:flex gap-10 items-center relative">
          <IoSearch
            className="cursor-pointer"
            onClick={() => setSearchOpen(true)}
          />
          <Link
            to="/cart"
            className="relative"
            style={{ color: "rgb(169, 174, 194)" }}
          >
            <IoCartOutline className="cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          <LuUserRound
            className="cursor-pointer"
            onClick={() => {
              setUserOpen(true);
              setSignupOpen(true);
            }}
          />
        </div>
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
        {open && (
          <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden">
            <IoSearch
              className="cursor-pointer text-2xl"
              onClick={() => {
                setSearchOpen(true);
                setOpen(false);
              }}
            />
            <Link to="/cart" className="relative">
              <IoCartOutline className="cursor-pointer text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <LuUserRound
              className="cursor-pointer text-2xl"
              onClick={() => {
                setUserOpen(true);
                setSignupOpen(true);
                setOpen(false);
              }}
            />
          </div>
        )}
      </div>
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-start justify-center pt-24">
          <div className="bg-[#141414] w-[90%] max-w-xl rounded-lg px-6 pb-6 pt-12 relative">
            <button
              onClick={() => {
                setSearchOpen(false);
                setQuery("");
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <HiX size={24} />
            </button>
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white outline-none focus:border-red-600"
              autoFocus
            />
            {query && filteredProducts.length > 0 && (
              <div className="mt-4 max-h-[300px] overflow-y-auto no-scrollbar space-y-2">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      navigate(`/products/${product.id}`);
                      setSearchOpen(false);
                      setQuery("");
                    }}
                    className="flex items-center gap-4 p-3 rounded cursor-pointer hover:bg-white/10 transition"
                  >
                    <img
                      src={product.images?.[0] || product.image}
                      alt={product.title}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <p className="font-medium">{product.title}</p>
                      <p className="text-sm text-gray-400">
                        ₹{product.finalPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {userOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center px-4">
          {signupOpen ? (
            <SignUp
              onClose={() => setUserOpen(false)}
              switchToLogin={() => setSignupOpen(false)}
            />
          ) : (
            <Login
              onClose={() => setUserOpen(false)}
              switchToSignup={() => setSignupOpen(true)}
            />
          )}
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
    </>
  );
};

export default Navbar;
