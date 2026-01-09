import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import AllProducts from "../Pages/AllProducts";
import DetailsPage from "../Pages/DetailsPage";
import ErrorPage from "../Components/ErrorPage";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<DetailsPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
