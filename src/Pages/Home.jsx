import React from "react";
import Hero from "../Components/Hero";
import Slider1 from "../Components/Slider1";

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
      </div>
    </>
  );
};

export default Home;
