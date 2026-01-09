import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";
import productsData from "../data/productsData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const FeaturedProducts = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const filtered = productsData.filter(
      (item) => item.tag === "featured-product"
    );
    const infiniteArray = [...filtered, ...filtered, ...filtered];
    setFeatured(infiniteArray);
  }, []);

  if (featured.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-20 overflow-hidden">
      <h2 className="text-2xl font-bold mb-24 text-center tracking-wider relative z-10">
        Featured Products
      </h2>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          onSlideChange={(swiper) => {
            const dots = document.querySelectorAll(".custom-dot");
            if (dots.length > 0) {
              const activeDotIndex = swiper.realIndex % 5;
              dots.forEach((dot, index) => {
                if (index === activeDotIndex) dot.classList.add("active-dot");
                else dot.classList.remove("active-dot");
              });
            }
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return index < 5
                ? `<span class="custom-dot ${className}"></span>`
                : "";
            },
          }}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 60,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          className="featured-swiper"
        >
          {featured.map((product, index) => (
            <SwiperSlide key={`featured-${product.id}-${index}`}>
              <Link to={`/product/${product.id}`} className="featured-link">
                <div className="flex flex-col items-center justify-center bg-transparent transition-all duration-500 w-full max-w-[280px] mx-auto cursor-pointer">
                  <div className="mb-6 text-center w-full min-h-[100px] flex flex-col justify-end">
                    <h3 className="text-sm md:text-lg font-bold mb-2 whitespace-normal leading-tight px-2">
                      {product.title}
                    </h3>
                  </div>
                  <div className="relative">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-40 md:h-56 object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-3 mt-2">
                    <p className="font-bold text-lg md:text-xl">
                      ₹{product.finalPrice.toLocaleString()}
                    </p>
                    <p className="font-semibold text-xs md:text-sm line-through text-gray-400">
                      ₹{product.originalPrice.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="custom-pagination !mt-16 flex justify-center items-center gap-3"></div>
        </Swiper>
      </div>
      <style jsx global>{`
        /* Remove link default styles */
        .featured-link {
          text-decoration: none !important;
          color: inherit !important;
        }

        .featured-swiper {
          padding-top: 20px !important;
          padding-bottom: 60px !important;
          overflow: visible !important;
        }

        .custom-dot {
          background: #374151 !important;
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          transition: all 0.4s ease !important;
          opacity: 1 !important;
          cursor: pointer;
          display: inline-block;
        }

        .active-dot {
          background: #ef4444 !important;
          width: 30px !important;
          border-radius: 6px !important;
        }

        .swiper-slide {
          opacity: 0.15;
          transform: scale(0.7) !important;
          transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          display: flex;
          justify-content: center;
        }

        .swiper-slide-active {
          opacity: 1 !important;
          transform: scale(1.1) !important;
          z-index: 50;
        }
      `}</style>
    </div>
  );
};

export default FeaturedProducts;
