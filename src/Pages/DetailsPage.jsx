import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DetailProduct from "../Components/DetailProduct";
import Specifications from "../Components/Specifications";
import RelatedProducts from "../Components/RelatedProducts";

const DetailsPage = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(20, 20, 20)",
        color: "rgb(169, 174, 194)",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <DetailProduct />
      <Specifications />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default DetailsPage;
