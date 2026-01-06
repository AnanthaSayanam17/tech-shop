import React from "react";
import CartProducts from "../Components/CartProducts";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Cart = () => {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        color: "rgb(169, 174, 194)",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <CartProducts />
      <Footer />
    </div>
  );
};

export default Cart;
