import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { TfiLinkedin } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-start">
          <h3 className="mb-3  font-bold text-2xl">Tech-Shop</h3>
          <p className="mb-4 text-sm leading-relaxed">
            Subscribe to our email alerts to receive{" "}
            <br className="hidden md:block" />
            early discount offers and new products{" "}
            <br className="hidden md:block" />
            info
          </p>
          <input
            type="email"
            placeholder="Email Address*"
            className="bg-transparent border border-gray-700 p-2 w-full max-w-[15rem] text-sm focus:outline-none focus:border-red-600 transition-colors"
          />
          <button className="mt-3 bg-red-600 py-2 px-6 rounded  font-semibold hover:bg-red-700 transition-colors">
            Subscribe
          </button>
        </div>
        <div className="flex flex-col">
          <div className=" font-bold text-xl mb-6">Help</div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              FAQs
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Track Order
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Cancel Order
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Return Order
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Warranty Info
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" font-bold text-xl mb-6">Policies</div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Return Policy
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Security
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Sitemap
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Privacy Policy
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Terms & Conditions
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" font-bold text-xl mb-6">Company</div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              About Us
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Contact Us
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Service Centers
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Careers
            </div>
            <div className="hover:text-red-600 cursor-pointer transition-colors">
              Affiliates
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-800" />
      <div className="bg-black py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[15px] font-semibold text-center md:text-left">
            2026 | All Rights Reserved ©.
          </div>

          <div className="flex items-center gap-6 md:gap-8">
            <TfiFacebook className="text-xl hover:text-red-600 cursor-pointer transition-colors" />
            <FaTwitter className="text-xl hover:text-red-600 cursor-pointer transition-colors" />
            <BiLogoInstagram className="text-2xl hover:text-red-600 cursor-pointer transition-colors" />
            <TfiLinkedin className="text-xl hover:text-red-600 cursor-pointer transition-colors" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-red-600 px-3 py-1 rounded  hover:bg-red-700 transition-colors ml-2"
            >
              ^
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
