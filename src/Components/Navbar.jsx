import React, { useState } from "react";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const searchData = [
  "JBL Headphones",
  "Boat Rockerz 510",
  "Sony WH-1000XM4",
  "Bose QuietComfort",
  "Apple AirPods Pro",
  "Realme Buds",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredResults = searchData.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 bg-black flex p-3 justify-between items-center font-bold text-2xl">
        <Link to="/" className="nav-link">
          Tech-Shop
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          <IoSearch
            className="cursor-pointer"
            onClick={() => setSearchOpen(true)}
          />
          <Link to="/cart">
            <IoCartOutline className="cursor-pointer" />
          </Link>
          <LuUserRound className="cursor-pointer" />
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
            <IoCartOutline className="cursor-pointer text-2xl" />
            <LuUserRound className="cursor-pointer text-2xl" />
          </div>
        )}
      </div>

      {/* SEARCH MODAL */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-start justify-center pt-24">
          <div className="bg-[#141414] w-[90%] max-w-xl rounded-lg p-6 relative">
            {/* Close */}
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <HiX size={24} />
            </button>

            {/* Input */}
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white outline-none focus:border-red-600"
            />

            {/* Results */}
            <div className="mt-4 max-h-64 overflow-y-auto">
              {query && filteredResults.length === 0 && (
                <p className="text-gray-400 text-center py-4">
                  No results found
                </p>
              )}

              {filteredResults.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-3 hover:bg-white/10 cursor-pointer rounded transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
