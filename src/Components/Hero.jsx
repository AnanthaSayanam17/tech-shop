import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    // bg-transparent ensures the dark color from Home.js shows through
    <div className="hero-slider-container w-full h-screen bg-transparent overflow-hidden">
      <Slider {...settings}>
        <div className="outline-none">
          <Slider1 />
        </div>
        <div className="outline-none">
          <Slider2 />
        </div>
        <div className="outline-none">
          <Slider3 />
        </div>
      </Slider>

      <style jsx global>{`
        /* 1. Remove all default background colors from Slick */
        .slick-slider,
        .slick-list,
        .slick-track,
        .slick-slide,
        .slick-slide > div {
          background: transparent !important;
        }

        /* 2. Change Dot Size and Color */
        .slick-dots li button:before {
          font-size: 8px !important; /* Smaller dots (default is 20px) */
          color: #a9aec2 !important; /* Your text color for inactive */
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          color: #dc2626 !important; /* Red for active */
          opacity: 1;
          font-size: 10px !important; /* Slightly larger active dot */
        }

        .slick-dots {
          bottom: 30px;
        }
      `}</style>
    </div>
  );
}
