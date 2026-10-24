import React from "react";

function Footer() {
  const copyCode = () => {
    navigator.clipboard.writeText("WELCOME20");
  };

  return (
    <footer className="max-w-6xl w-full mx-auto mt-10 px-4 sm:px-6">
      {/* Offer Section */}
      <div className="bg-[#0d0d0d] rounded-[32px] px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-white text-xl sm:text-2xl font-bold">
            Get 20% off your first order
          </h2>

          <p className="text-gray-300 text-base sm:text-lg mt-1">
            Use code WELCOME20 at checkout.
          </p>
        </div>

        <a href="home#menu">
          <button

            className="bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-gray-200 transition duration-200 whitespace-nowrap"
          >
            Order Now →
          </button>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm py-9">
        © 2026 QuickBite. Demo design.
      </div>
    </footer>
  );
}

export default Footer;
