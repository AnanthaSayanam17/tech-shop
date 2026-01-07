import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "./Slider1";
import productsData from "../data/productsData";

export default function Hero() {
  const heroProducts = useMemo(() => {
    return productsData.filter((item) => item.tag === "hero-product");
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    cssEase: "linear",
  };

  if (heroProducts.length === 0) return null;

  return (
    <div className="hero-slider-container w-full h-screen bg-transparent overflow-hidden">
      <Slider {...settings}>
        <div className="outline-none">
          <Slider1 product={heroProducts[0]} />
        </div>
        {heroProducts[1] && (
          <div className="outline-none">
            <Slider1 product={heroProducts[1]} />
          </div>
        )}
        {heroProducts[2] && (
          <div className="outline-none">
            <Slider1 product={heroProducts[2]} />
          </div>
        )}
      </Slider>

      <style jsx global>{`
        .slick-dots {
          bottom: 25px !important;
          z-index: 100 !important;
        }
        .slick-dots li button:before {
          font-size: 10px !important;
          color: #888 !important;
        }
        .slick-dots li.slick-active button:before {
          color: red !important;
        }
      `}</style>
    </div>
  );
}
