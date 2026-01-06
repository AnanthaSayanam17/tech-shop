import React, { useState } from "react";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-black flex p-3 justify-between items-center font-bold text-2xl ">
      <Link to="/" className="nav-link">
        <div>Tech-Shop</div>
      </Link>
      <div className="hidden md:flex gap-10">
        <IoSearch className="cursor-pointer" />
        <Link to="/cart" className="nav-link">
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
          <IoSearch className="cursor-pointer text-2xl" />
          <IoCartOutline className="cursor-pointer text-2xl" />
          <LuUserRound className="cursor-pointer text-2xl" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
