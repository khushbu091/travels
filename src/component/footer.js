import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B0E13] text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          
          {/* Logo + About */}
          <div>
            <div className="flex items-center mb-4">
              {/* <img src="/logo.png" alt="Touria" className="w-8 h-8 mr-2" /> */}
              <h2 className="text-3xl font-bold font-outfit">Travels</h2>
            </div>
            <p className="text-gray-300 text-sm leading-6 font-outfit">
              Targeting consultation Death yet way indulgence off under folly death
              wrote cause her yet way yet wayspite.
            </p>
            <div className="flex gap-3 mt-4">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-[#FA9A3D] transition">
                    <FaFacebookF className="text-white text-sm" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-[#FA9A3D] transition">
                    <FaTwitter className="text-white text-sm" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-[#FA9A3D] transition">
                    <FaLinkedinIn className="text-white text-sm" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-[#FA9A3D] transition">
                    <FaInstagram className="text-white text-sm" />
                </a>
                </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 relative font-outfit">Quick Links
              <span className="block w-10 h-1 bg-[#FA9A3D] mt-1"></span>
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm font-outfit">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Tours</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 relative font-outfit">Services
              <span className="block w-10 h-1 bg-[#FA9A3D] mt-1"></span>
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm font-outfit">
              <li>Wanderlust Adventures</li>
              <li>Globe Trotters Travel</li>
              <li>Odyssey Travel Services</li>
              <li>Jet Set Journeys</li>
              <li>Dream Destinations Travel</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 relative font-outfit">Contact Info
              <span className="block w-10 h-1 bg-[#FA9A3D] mt-1"></span>
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm font-outfit">
              <li>Email: info@Travels.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Mumbai, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm">
          <p>Copyright © 2025 Nano Theme All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Service</a>
            <a href="#">Legal Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
