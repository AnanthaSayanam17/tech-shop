import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="bg-black d-flex p-3 justify-between items-center font-bold text-2xl mt-3 mb-5">
      <div>Tech-Shop</div>
      <div className="d-flex gap-10">
        <IoSearch className="hover:cursor-pointer" />
        <IoCartOutline className="hover:cursor-pointer" />
        <LuUserRound className="hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
