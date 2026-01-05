import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black flex justify-between">
        <div className="ml-5 mt-5">
          <h3 className="mb-3">Tech-Shop</h3>
          <p>
            Subscribe to our email alerts to receive <br />
            early discount offers and new products <br />
            info
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Email Adderss*"
            className="border p-2 w-[15rem]"
          />
          <div>
            <button className="mt-3 bg-red-600 py-2 md:py-2.5 px-4 rounded text-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="my-5">
          <div className="text-white font-bold text-xl mb-[2rem]">Help</div>
          <div className="flex flex-col gap-3">
            <div>FAQs</div>
            <div>Track Order</div>
            <div>Cancel Order</div>
            <div>Return Order</div>
            <div>Warranty Info</div>
          </div>
        </div>
        <div className="my-5">
          <div className="text-white font-bold text-xl mb-[2rem]">Policies</div>
          <div className="flex flex-col gap-3">
            <div>Return Policy</div>
            <div>Security</div>
            <div>Sitemap</div>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
          </div>
        </div>
        <div className="mr-[15rem] my-5">
          <div className="text-white font-bold text-xl mb-[2rem]">Company</div>
          <div className="flex flex-col gap-3">
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Service Centers</div>
            <div>Careers</div>
            <div>Affiliates</div>
          </div>
        </div>
      </div>
      <div className="my-5">2025|All Rights Reerved</div>
    </div>
  );
};

export default Footer;
