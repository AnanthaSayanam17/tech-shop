import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AllProduct from "../Components/AllProduct";

const AllProducts = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(20, 20, 20)",
        color: "rgb(169, 174, 194)",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <AllProduct />
      <Footer />
    </div>
  );
};

export default AllProducts;
