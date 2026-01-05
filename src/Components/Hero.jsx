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
        /* Ensure the dots sit on top of everything */
        .slick-dots {
          bottom: 15px !important; /* Moved slightly up */
          z-index: 100 !important;
          display: block !important;
        }

        /* Make dots easier to see/touch on mobile */
        .slick-dots li {
          margin: 0 5px !important;
          width: 12px !important;
          height: 12px !important;
        }

        .slick-dots li button:before {
          font-size: 10px !important;
          color: #888 !important;
          opacity: 0.7;
        }

        .slick-dots li.slick-active button:before {
          color: red !important;
          opacity: 1;
        }

        /* Prevent the slider from scrolling horizontally */
        .slick-list {
          overflow: hidden !important;
        }
      `}</style>
    </div>
  );
}
