import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import productsData from "../data/productsData";
import TopProduct from "./TopProduct";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const RelatedProducts = ({ currentProduct }) => {
  // Filter products by type, excluding the current one
  const related = productsData.filter(
    (item) => item.type === currentProduct.type && item.id !== currentProduct.id
  );

  if (related.length === 0) return null;

  // Function to ensure we start at the top of the new product page
  const handlePageChange = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "smooth" if you prefer a sliding effect
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      {/* Centered Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white uppercase tracking-widest">
          Related <span className="text-red-600">Products</span>
        </h2>
        <div className="h-1 w-20 bg-red-600 mx-auto mt-2"></div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        /* pb-24 ensures the dots stay far below the "Add to Cart" button */
        className="related-swiper pb-24"
      >
        {related.map((prod) => (
          <SwiperSlide key={prod.id} className="h-auto">
            {/* Click handler added here to reset scroll position */}
            <div
              className="related-card-container h-full cursor-pointer"
              onClick={handlePageChange}
            >
              <TopProduct product={prod} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* 1. Ensure the card fills the height and keeps button inside */
        .related-card-container > div {
          height: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          min-height: 400px !important; /* Adjusted for a more square look */
          border-radius: 12px;
          overflow: hidden;
          background: #111; /* Consistent background */
        }

        /* 2. Shrink internal image height to keep card square and button inside */
        .related-card-container img {
          max-height: 130px !important;
          object-fit: contain;
          margin-bottom: 10px !important;
        }

        /* 3. Dots Positioning (Bottom-most, not overlapping) */
        .related-swiper .swiper-pagination {
          bottom: 15px !important;
        }

        .related-swiper .swiper-pagination-bullet {
          background: #555;
        }

        .related-swiper .swiper-pagination-bullet-active {
          background: #dc2626 !important;
          width: 24px;
          border-radius: 5px;
        }

        /* 4. Responsive Card Height adjustment */
        @media (max-width: 768px) {
          .related-card-container > div {
            min-height: 380px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RelatedProducts;
