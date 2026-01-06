import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaShieldAlt, FaTags } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";

const OurAdvantages = () => {
  const advantages = [
    {
      id: 1,
      title: "Express Delivery",
      icon: <TbTruckDelivery size={32} />,
      desc: "Ships in 24 hours",
    },
    {
      id: 2,
      title: "Brand Warranty",
      icon: <FaShieldAlt size={32} />,
      desc: "100% Original Products",
    },
    {
      id: 3,
      title: "Exciting Deals",
      icon: <FaTags size={32} />,
      desc: "On all prepaid orders",
    },
    {
      id: 4,
      title: "Secure Payments",
      icon: <IoIosCard size={32} />,
      desc: "SSL/Secure Certificate",
    },
  ];

  return (
    <div className="py-24 px-4 bg-transparent">
      <h2 className="text-2xl font-bold  text-center mb-16">Our Advantages</h2>
      <div className="mt-32 flex flex-col md:flex-row items-center justify-around gap-10 md:gap-4">
        {advantages.map((item) => (
          <div key={item.id} className="flex items-center gap-4 group">
            <div className="text-red-600 transition-transform duration-300 group-hover:scale-110 shrink-0">
              {item.icon}
            </div>
            <div className="flex flex-col items-start">
              <div className=" text-sm md:text-base font-semibold tracking-wide">
                {item.title}
              </div>
              <div className="text-xs md:text-sm font-normal text-gray-400 tracking-wide">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAdvantages;
