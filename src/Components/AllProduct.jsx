import React, { useMemo, useState } from "react";
import productsData from "../data/productsData";
import TopProduct from "../Components/TopProduct";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const [sortBy, setSortBy] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(19990);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCheckboxChange = (value, setter, state) => {
    setter(
      state.includes(value)
        ? state.filter((item) => item !== value)
        : [...state, value]
    );
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...productsData];
    if (selectedBrands.length) {
      filtered = filtered.filter((p) =>
        selectedBrands.includes(p.brand.toLowerCase())
      );
    }
    if (selectedCategories.length) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category.toLowerCase())
      );
    }
    filtered = filtered.filter((p) => p.finalPrice <= priceRange);

    switch (sortBy) {
      case "latest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "featured":
        filtered = filtered.filter((p) => p.tag === "hero-product");
        break;
      case "top-rated":
        filtered = filtered.filter((p) => p.rateCount === 5);
        break;
      case "low-high":
        filtered.sort((a, b) => a.finalPrice - b.finalPrice);
        break;
      case "high-low":
        filtered.sort((a, b) => b.finalPrice - a.finalPrice);
        break;
      default:
        break;
    }
    return filtered;
  }, [sortBy, selectedBrands, selectedCategories, priceRange]);

  return (
    <div className="min-h-screen bg-black text-gray-300 px-4 sm:px-6 lg:px-10 py-10">
      <h1
        className="text-center text-3xl font-bold mb-8"
        style={{ marginBottom: "5rem" }}
      >
        All Products
      </h1>
      <div className="lg:hidden mb-6 flex justify-end">
        <button
          onClick={() => setSidebarOpen(true)}
          className="bg-red-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:bg-red-700 transition-all"
        >
          Sort & Filter
        </button>
      </div>
      <div className="flex gap-8">
        <aside
          className={`fixed inset-0 z-50 bg-black bg-opacity-95 p-6 overflow-y-auto transform transition-transform duration-300 
            lg:relative lg:translate-x-0 lg:block 
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            w-72 h-full lg:h-[80vh] shadow-2xl lg:shadow-none lg:sticky lg:top-20`}
        >
          <div className="flex justify-end lg:hidden mb-4">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-3xl font-light hover:text-red-600"
            >
              ×
            </button>
          </div>

          <style>
            {`
              aside::-webkit-scrollbar { width: 6px; }
              aside::-webkit-scrollbar-track { background: #1a1a1a; }
              aside::-webkit-scrollbar-thumb { background-color: #333; border-radius: 10px; }
            `}
          </style>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-xs text-gray-400 font-medium text-left">
                Sort By
              </h3>
              {[
                ["latest", "Latest"],
                ["featured", "Featured"],
                ["top-rated", "Top Rated"],
                ["low-high", "Price: Low to High"],
                ["high-low", "Price: High to Low"],
              ].map(([value, label]) => (
                <p
                  key={value}
                  onClick={() => {
                    setSortBy(value);
                    if (window.innerWidth < 1024) setSidebarOpen(false);
                  }}
                  className={`text-sm cursor-pointer transition-colors py-1 ${
                    sortBy === value
                      ? "text-red-600 font-semibold"
                      : "text-[#a9aec2] hover:text-red-600"
                  }`}
                >
                  {label}
                </p>
              ))}
            </div>

            <hr className="border-gray-800" />

            <div className="flex flex-col gap-3">
              <h3 className="text-xs text-gray-400 font-medium text-left">
                Brands
              </h3>
              {["JBL", "BoAt", "Sony"].map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 cursor-pointer text-sm text-[#a9aec2] hover:text-red-600 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand.toLowerCase())}
                    onChange={() =>
                      handleCheckboxChange(
                        brand.toLowerCase(),
                        setSelectedBrands,
                        selectedBrands
                      )
                    }
                    className="accent-red-600 scale-110"
                  />
                  <span className="ml-3">{brand}</span>
                </label>
              ))}
            </div>

            <hr className="border-gray-800" />

            <div className="flex flex-col gap-3">
              <h3 className="text-xs text-gray-400 font-medium text-left">
                Category
              </h3>
              {["headphones", "earphones", "earbuds", "neckbands"].map(
                (cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-3 cursor-pointer text-sm text-[#a9aec2] hover:text-red-600 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() =>
                        handleCheckboxChange(
                          cat,
                          setSelectedCategories,
                          selectedCategories
                        )
                      }
                      className="accent-red-600 scale-110"
                    />
                    <span className="capitalize ml-3">{cat}</span>
                  </label>
                )
              )}
            </div>

            <hr className="border-gray-800" />

            <div className="flex flex-col gap-3">
              <h3 className="text-xs text-gray-400 font-medium text-left">
                Price
              </h3>
              <span className="text-sm font-semibold text-white">
                Under ₹{priceRange.toLocaleString()}
              </span>
              <input
                type="range"
                min="449"
                max="19990"
                step="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden mt-4 bg-red-600 text-white py-2 rounded font-bold"
            >
              Apply Filters
            </button>
          </div>
        </aside>
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-400">No products found</p>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  style={{
                    textDecoration: "none",
                    color: "rgb(169, 174, 194)",
                  }}
                >
                  <TopProduct product={product} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
