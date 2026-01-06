import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import AllProducts from "../Pages/AllProducts";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/*" element={<h2>Page NOt Found</h2>} />
      </Routes>
    </div>
  );
};

export default Routing;
