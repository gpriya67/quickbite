import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UtensilsIcon, CartIcon } from "./Icons";

function Navbar({ cartCount = 0, onOpenCart, activeSection = "home" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "restaurants", label: "Restaurants" },
    { id: "offers", label: "Offers" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between backdrop-blur-md border-b border-gray-100 shadow-xs rounded-full">
      
        <Link to="/home" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center group-hover:scale-110 transition">
            <UtensilsIcon className="w-5 h-5" />
          </span>
          <span className="bg-black text-white px-2.5 py-0.5 rounded-lg font-bold tracking-tight shadow-sm text-sm">
           QuickBite
          </span>
        </Link>

        {/* Desktop Navigation Links with ScrollSpy */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-black text-white font-bold shadow-md shadow-blue-500/20 scale-105"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Cart Button with Click to Open Drawer */}
          <button
            type="button"
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-gradient-to-r from-gray-900 to-black text-white text-xs font-semibold px-4 py-2 rounded-full hover:shadow-lg transition shadow-sm active:scale-95 cursor-pointer group"
          >
            <CartIcon className="w-4 h-4 text-white group-hover:scale-110 transition" />
            <span>Cart</span>
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-950 rounded-full px-1.5 py-0.2 min-w-4 h-4 flex items-center justify-center text-[10px] font-black shadow-xs">
              {cartCount}
            </span>
          </button>

          {/* Logout Button */}
          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3.5 py-1.5 rounded-full transition"
          >
            <span>Logout</span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold transition ${
                  isActive
                    ? "bg-blue-600 text-white font-bold"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-rose-600 hover:bg-rose-50"
          >
            Logout
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
