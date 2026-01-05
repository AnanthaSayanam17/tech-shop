import React, { useState, useEffect } from "react";
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
      <h2 className="text-2xl font-bold  text-center mb-6">Top Products</h2>

      <div className="flex flex-wrap justify-around items-center gap-3 my-5 pb-2">
        {["All", "Headphones", "Earbuds", "Earphones", "Neckbands"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2  text-sm font-semibold transition-all duration-300 active:scale-95 
                ${
                  selectedCategory === cat
                    ? "bg-red-600 rounded-xl"
                    : "bg-transparent rounded-sm hover:bg-red-600 hover:rounded-3xl"
                }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts
            .slice(0, 11)
            .map((item) => <TopProduct key={item.id} product={item} />)
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
