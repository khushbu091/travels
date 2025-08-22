import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#FA9A3D] text-white px-6 py-3 flex items-center justify-around fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Left Logo */}
      <div className="text-2xl font-bold">
        <span className="text-white">Travels.com</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        {/* Currency */}
        <span>CAD</span>

        {/* Country Flag (India) */}
        <img
          src="https://flagcdn.com/w20/in.png"
          alt="India"
          className="w-6 h-4 rounded-sm"
        />

        {/* Help Icon */}
        <FaRegQuestionCircle className="text-lg cursor-pointer" />

        {/* Buttons */}
        <button className="px-3 py-1 border border-white rounded-md hover:bg-white hover:text-[#003580] transition">
          Register
        </button>
        <button className="px-3 py-1 border border-white rounded-md hover:bg-white hover:text-[#003580] transition">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
