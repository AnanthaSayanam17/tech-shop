import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/productsData";
import reviewsData from "../data/reviewsData";

const Specifications = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("specifications");

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) return null;

  const TabButton = ({ label, id }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-8 py-2.5 font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm outline-none border-none ${
        activeTab === id
          ? "bg-red-600 text-white shadow-lg shadow-red-900/40 scale-105"
          : "bg-[#1a1a1a] text-gray-500 hover:text-white hover:bg-[#252525]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-[1400px] mx-auto mt-16 px-4 pb-20">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <TabButton label="Specifications" id="specifications" />
        <TabButton label="Overview" id="overview" />
        <TabButton label="Reviews" id="reviews" />
      </div>

      <div className="min-h-[300px]">
        {activeTab === "specifications" && (
          <div className="flex flex-col max-w-2xl mx-auto">
            {[
              { label: "Brand", value: product.brand },
              { label: "Model", value: product.title },
              { label: "Generic Name", value: product.info },
              { label: "Headphone Type", value: product.type },
              { label: "Connectivity", value: product.connectivity },
              { label: "Microphone", value: "Yes" },
            ].map((spec, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 border-b border-gray-800/50"
              >
                <span className="text-gray-500 text-xs uppercase font-bold tracking-widest">
                  {spec.label}
                </span>
                <span className="text-gray-200 text-sm font-medium">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        )}
        {activeTab === "overview" && (
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">
              The {product.title} Advantage
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg italic">
              Experience the pinnacle of audio technology with the{" "}
              {product.title}. Featuring world-class Noise Cancellation and the
              signature {product.brand} sound.
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="max-w-3xl mx-auto space-y-4">
            {reviewsData.map((rev) => (
              <div key={rev.id} className="bg-[#161616] p-5 rounded-sm">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-red-600 font-bold border border-gray-800">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold">
                        {rev.name}
                      </h4>
                      <p className="text-gray-500 text-[10px] uppercase tracking-tighter">
                        {rev.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-red-600 text-xs gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < rev.rateCount ? "★" : "☆"}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  "{rev.review}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Specifications;
