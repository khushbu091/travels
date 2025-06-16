import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500 text-black px-6 py-4 shadow-md fixed top-0 w-full z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-widest font-serif text-white">
          BLACKJACK
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-1 justify-center space-x-6 text-lg font-medium">
          <li><a href="#home" className="text-white hover:text-black">Home</a></li>
          <li><a href="#about" className="text-white hover:text-black">About</a></li>
          <li><a href="#services" className="text-white hover:text-black">Service</a></li>
          <li><a href="#games" className="text-white hover:text-black">Games</a></li>
          <li><a href="#contact" className="text-white hover:text-black">Contact</a></li>
        </ul>

        {/* WhatsApp Button */}
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-green-500 px-5 py-2 font-semibold rounded-md text-white hover:scale-105 transition">
            WhatsApp
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-3 text-white text-lg font-medium">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Service</a></li>
            <li><a href="#games" onClick={() => setMenuOpen(false)}>Games</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
