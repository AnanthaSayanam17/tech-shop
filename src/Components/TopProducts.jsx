import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import productsData from "../data/productsData";
import TopProduct from "./TopProduct";

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = products.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    }
    return item.category?.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Top Products</h2>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-around items-center gap-3 my-5 pb-2">
        {["All", "Headphones", "Earbuds", "Earphones", "Neckbands"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 text-sm font-semibold transition-all duration-300 active:scale-95
${
  selectedCategory === cat
    ? "bg-red-600 text-white rounded-xl"
    : "bg-transparent text-gray-300 hover:!bg-red-600 hover:!text-white rounded-xl cursor-pointer"
}`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          <>
            {/* Display first 11 products */}
            {filteredProducts.slice(0, 11).map((item) => (
              <TopProduct key={item.id} product={item} />
            ))}

            {/* 12th Card: Browse All Products */}
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "white" }}
              className="p-6 border border-dashed border-gray-700 rounded-xl w-full bg-[#1a1a1a]
             flex flex-col items-center justify-center text-center
             hover:border-red-600 transition-all duration-300 shadow-lg group"
            >
              <p className="font-bold text-xl mb-3 group-hover:text-red-500 transition-colors">
                Browse All Products
              </p>

              <span className="text-red-600 text-3xl font-bold group-hover:translate-x-2 transition-transform">
                →
              </span>
            </Link>
          </>
        ) : (
          <p className="text-gray-500 text-center col-span-full py-10">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default TopProducts;
