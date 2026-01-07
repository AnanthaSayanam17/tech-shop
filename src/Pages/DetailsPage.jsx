import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/productsData";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DetailProduct from "../Components/DetailProduct";
import Specifications from "../Components/Specifications";
import RelatedProducts from "../Components/RelatedProducts";

const DetailsPage = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) return null;

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
      <RelatedProducts currentProduct={product} />

      <Footer />
    </div>
  );
};

export default DetailsPage;
