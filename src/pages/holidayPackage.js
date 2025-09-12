import { FaPlane, FaHotel, FaUmbrellaBeach, FaTrain, FaTaxi,FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../image/bg.webp";
import { FaSearch } from "react-icons/fa";

import europe from "../image/europe.avif";
import bali from "../image/bali.avif";
import kerala from "../image/kerala.webp";
import kashmir from "../image/kashmir.webp";
import vietnam from "../image/vietnam.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../image/sp1.webp";
import slide2 from "../image/sp2.webp";
import slide3 from "../image/s3.avif";

import sponser03 from "../image/sponser03.jpg";
import sponser04 from "../image/sponser04.webp";

const menuItems = [
  { name: "Flights", icon: <FaPlane />, path: "/flights" },
  { name: "Hotels", icon: <FaHotel />, path: "/hotels" },
  { name: "Holiday Packages", icon: <FaUmbrellaBeach />, path: "/packages" },
  { name: "Trains", icon: <FaTrain />, path: "/trains" },
  { name: "Cabs", icon: <FaTaxi />, path: "/cabs" },
  { name: "Visa", icon: <FaMapMarkedAlt />, path: "/visa" },
];

const destinations = [
    {
      name: "Europe",
      img:europe,
    },
    {
      name: "Kerala",
      img: kerala,
    },
    {
      name: "Bali",
      img: bali,
    },
    {
      name: "Kashmir",
      img: kashmir,
      highlight: true,
    },
    {
      name: "Vietnam",
      img: vietnam,
    },
  ];

  const slides = [
    {
      img:slide1,
      title: "Explore the Timeless Charms of Africa in Magical Kenya",
      btnText: "Know More",
    },
    {
      img: slide2,
      title: "Discover the Beauty of Bali’s Temples & Beaches",
      btnText: "Know More",
    },
    {
      img: slide3,
      title: "Unwind in the Serene Backwaters of Kerala",
      btnText: "Know More",
    },
  ];

  const deals = [
    {
      name: "KASHMIR",
      nights: "5 Nights / 6 Days",
      img: kashmir,
    },
    {
      name: "KERALA",
      nights: "4 Nights / 5 Days",
      img: kerala,
    },
    {
      name: "HIMACHAL PRADESH",
      nights: "5 Nights / 6 Days",
      img: kashmir,
    },
    {
      name: "THAILAND",
      nights: "4 Nights / 5 Days",
      img: kerala,
    },
    {
      name: "BALI",
      nights: "4 Nights / 5 Days",
      img: bali,
    },
    {
      name: "SINGAPORE",
      nights: "3 Nights / 4 Days",
      img: vietnam,
    },
  ];

const HolidayPackage=()=>{
     const [active, setActive] = useState("Holiday Packages");
    return(
        <>
        <div className="relative w-full h-[320px] mt-[50px] bg-gradient-to-r from-gray-500 to-gray-400">
        <img
          src={bg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-[320px] object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/30 h-[320px]"></div>
        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white pt-0 md:pt-1 z-10">
          {/* Title */}
          <h1 className="text-4xl pt-20 font-outfit md:text-3xl font-bold  drop-shadow-lg translate-y-[-80px]">
            Where Every Experience Counts!
          </h1>

          {/* 🔥 Menu with active state */}
          <nav className="bg-white font-outfit px-6 py-3 flex justify-center flex-wrap gap-2 md:gap-3 text-sm md:text-md font-medium 
            shadow-md rounded-2xl w-[90%] max-w-4xl relative z-10">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.path} // 👈 link path
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[16px] transition-all duration-300
                  ${
                    active === item.name
                      ? "bg-[#FA9A3D] text-white"
                      : "text-gray-700 hover:bg-[#FA9A3D] hover:text-white"
                  }`}
              >
                <span
                  className={`${
                    active === item.name
                      ? "text-white"
                      : "text-orange-500 group-hover:text-white"
                  }`}
                >
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Search Box */}


    <div className="flex items-center w-[700px] h-[70px] mt-4 max-w-full bg-white rounded-full shadow-md overflow-hidden">
      {/* Search Icon */}
      <div className="pl-4 text-gray-500">
        <FaSearch size={18} />
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter Your Dream Destination!"
        className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
      />

      {/* Button */}
      <button className="bg-orange-500 h-[60px] w-[150px] hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full mr-2">
        Search
      </button>
    </div>


        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">Top International Trending Destinations</h2>
      <p className="text-gray-600 mb-8">
        Explore the hottest travel spots around the globe.
      </p>

      {/* Destination Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {destinations.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-2xl shadow-md"
            />
            <h3
              className={`mt-3 text-lg font-semibold ${
                item.highlight ? "text-blue-500" : "text-black"
              }`}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 py-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-54 md:h-50 lg:h-50 flex items-center"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 pl-8 md:pl-16 max-w-md text-white">
                <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                  {slide.title}
                </h2>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium flex items-center gap-2">
                  {slide.btnText} <span>➜</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

<section className="max-w-7xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-2">Top India Trending Destinations</h2>
  <p className="text-gray-600 mb-8">
    Travel beyond boundaries with incredible savings
  </p>

  <div className="flex gap-6 h-[500px]">
    {/* LEFT COLUMN */}
    <div className="w-1/3 flex flex-col gap-6">
      {/* Large Top Img */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg flex-1">
        <img src={deals[0].img} alt={deals[0].name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-bold">{deals[0].name}</h3>
          <p>{deals[0].nights}</p>
        </div>
      </div>

      {/* Two small images in row */}
      <div className="flex gap-6 flex-1">
        {deals.slice(1, 3).map((deal, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg flex-1">
            <img src={deal.img} alt={deal.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-2 left-2 text-white text-sm">
              <h3 className="font-bold">{deal.name}</h3>
              <p>{deal.nights}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CENTER COLUMN */}
    <div className="w-1/3">
      <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
        <img src={deals[3].img} alt={deals[3].name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-bold">{deals[3].name}</h3>
          <p>{deals[3].nights}</p>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="w-1/3 flex flex-col gap-6">
      {deals.slice(4, 6).map((deal, i) => (
        <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg flex-1">
          <img src={deal.img} alt={deal.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold">{deal.name}</h3>
            <p>{deal.nights}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<div className="max-w-7xl mx-auto flex gap-6 p-6 bg-gray-100 ">
      {/* Card 1 */}
      <div className="relative w-[600px] h-[250px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Travel 1"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 text-white">
          <h3 className="text-lg font-bold">TRAVEL FENI</h3>
          <h1 className="text-3xl font-extrabold mt-1">25% EXTRA DISCOUNT</h1>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-md mt-4 w-fit">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative w-[600px] h-[250px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Travel 2"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-6 text-white">
          <h2 className="text-3xl font-extrabold">LET’S GO TRAVEL</h2>
          <p className="text-sm mt-2 max-w-sm">
            Explore the world. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 w-fit">
            BOOK NOW!
          </button>
          <p className="mt-2 font-semibold">📞 012 3456 7890</p>
        </div>
      </div>
    </div>




        
        </>
    )
};
export default HolidayPackage