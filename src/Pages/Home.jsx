import React from "react";
import Hero from "../Components/Hero";
import Slider1 from "../Components/Slider1";
import TopProducts from "../Components/TopProducts";
import Navbar from "../Components/Navbar";
import OurAdvantages from "../Components/OurAdvantages";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(20, 20, 20)",
          color: "rgb(169, 174, 194)",
          overflowX: "hidden",
        }}
      >
        <Hero />
        <TopProducts />
        <Navbar />
        <OurAdvantages />
        <Footer />
      </div>
    </>
  );
};

export default Home;
