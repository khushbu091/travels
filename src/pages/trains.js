import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { useState } from "react";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaTrain, FaTaxi,FaMapMarkedAlt } from "react-icons/fa";
import heroImg from "../image/hero3.jpg";
import { FaExchangeAlt, FaRegCalendarAlt } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import {
  TicketCheck,
  Train,
  Monitor,
  Clock,
  Search,
  ClipboardList,
  Utensils,
} from "lucide-react";
import t1 from "../image/t1.avif";
import t2 from "../image/t2.avif";
import t3 from "../image/t3.avif";
import t4 from "../image/t4.avif";
import t5 from "../image/t5.avif";

const menuItems = [
  { name: "Flights", icon: <FaPlane />, path: "/flights" },
  { name: "Hotels", icon: <FaHotel />, path: "/hotels" },
  { name: "Holiday Packages", icon: <FaUmbrellaBeach />, path: "/packages" },
  { name: "Trains", icon: <FaTrain />, path: "/trains" },
  { name: "Cabs", icon: <FaTaxi />, path: "/cabs" },
  { name: "Visa", icon: <FaMapMarkedAlt />, path: "/visa" },
];
  const features = [
    { title: "PNR Status Enquiry", icon: <TicketCheck className="w-8 h-8" /> },
    { title: "Train Coach Position", icon: <Train className="w-8 h-8" /> },
    { title: "Live Station Status", icon: <Monitor className="w-8 h-8" /> },
    { title: "Live Train Status", icon: <Train className="w-8 h-8" /> },
    { title: "Train Time Table", icon: <Clock className="w-8 h-8" /> },
    { title: "Train Seat Availability", icon: <Search className="w-8 h-8" /> },
    { title: "Train Charts Vacancy", icon: <ClipboardList className="w-8 h-8" /> },
    { title: "Train Food Booking", icon: <Utensils className="w-8 h-8" /> },
  ];

  const offers = [
  {
    id: 1,
    img: t1, 
    title: "Bookings!",
    subtitle: "Valid till: Limited Period",
  },
  {
    id: 2,
    img: t2,
    title: "Enjoy Seat Lock on trains.",
    subtitle: "Valid till: Limited Period",
    tag: "#Trending",
  },
  {
    id: 3,
    img: t3,
    title: "",
    subtitle: "Valid till: Limited Period",
  },
  {
    id: 4,
    img: t4,
    title: "",
    subtitle: "Valid till: Limited Period",
  },
  {
    id: 5,
    img: t5,
    title: "",
    subtitle: "Valid till: Limited Period",
  },
];

const routes = [
  {
    from: "NEW DELHI",
    to: "JAMMU TAWI",
    code: "NDLS - JAT",
  },
  {
    from: "NEW DELHI",
    to: "PATNA JN",
    code: "NDLS - PNBE",
  },
  {
    from: "HOWRAH JN",
    to: "Jaipur",
    code: "HWH - JP",
  },
  {
    from: "HYDERABAD DECAN",
    to: "CHENNAI CENTRAL",
    code: "HYB - MAS",
  },
  {
    from: "MUMBAI CENTRAL",
    to: "PUNE JN",
    code: "BCT - PUNE",
  },
  {
    from: "PATNA JN",
    to: "GUWAHATI",
    code: "PNBE - GHY",
  },
  {
    from: "NEW DELHI",
    to: "LUCKNOW",
    code: "NDLS - LJN",
  },
  {
    from: "VIJAYAWADA JN",
    to: "CHENNAI CENTRAL",
    code: "BZA - MAS",
  },
  {
    from: "INDORE JN",
    to: "MUMBAI CENTRAL",
    code: "INDB - BCT",
  },
  {
    from: "JAIPUR",
    to: "AHMEDABAD JN",
    code: "JP - ADI",
  },
];
const reviews = [
  {
    title: "My query where solved…",
    text: "My query where solved within very short period. Thank you easemytrip..",
    author: "customer",
    date: "2 days ago",
  },
  {
    title: "Easy to book",
    text: "Easy to book",
    author: "Susan M",
    date: "3 days ago",
  },
  {
    title: "Easemytrip experience",
    text: "I had booked a ticket through easemytrip and I cancelled the same",
    author: "Dr Babu George",
    date: "September 2",
  },
  {
    title: "DIDNOT RECEIVED TAX …",
    text: "DIDNOT RECEIVED TAX INVOICE",
    author: "customer",
    date: "September 2",
  },
  {
    title: "Happy with the service",
    text: "Happy with the service",
    author: "Mohit Singh",
    date: "August 31",
  },
];

const Trains=()=>{
        const [active, setActive] = useState("Trains");
        const [from, setFrom] = useState("");
        const [to, setTo] = useState("");
        const [date, setDate] = useState("");
        const [classType, setClassType] = useState("AC & non-AC");
        const filters = ["AC & non-AC", "AC only", "Non-AC only"];
        const dates = ["9 Sep Today", "10 Sep Wed", "11 Sep Thur"];
        const handleSwap = () => {
            setFrom(to);
            setTo(from);
        };

      const scrollRef = useRef(null);

  // Scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };
    return(
        <>
        <div className="relative w-full h-[500px] mt-[50px]">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-[500px] object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/30 h-[500px]"></div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white pt-0 md:pt-1 z-10">
          {/* Title */}
          <h1 className="text-5xl font-outfit md:text-7xl font-bold pt-10 drop-shadow-lg translate-y-[-80px]">           
            Train Ticket Booking
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

         <div className="bg-white font-outfit rounded-xl shadow-md px-6 py-6 w-[90%] max-w-6xl mx-auto mt-[-10px]">
      {/* First Row */}
      <div className="flex flex-wrap items-center gap-4">
        {/* From */}
        <div className="flex flex-col flex-1 min-w-[160px]">
          <label className="text-gray-500 text-sm">From</label>
          <span className="font-bold text-gray-900">From</span>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="outline-none border-b border-gray-300 text-gray-700 text-sm"
          >
            <option value="">Select Station</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bhopal">Bhopal</option>
          </select>
        </div>

        {/* Swap */}
        <button
          onClick={handleSwap}
          className="p-2 rounded-full border border-gray-300 text-[#FA9A3D] hover:bg-blue-50 transition"
        >
          <FaExchangeAlt />
        </button>

        {/* To */}
        <div className="flex flex-col flex-1 min-w-[160px]">
          <label className="text-gray-500 text-sm">To</label>
          <span className="font-bold text-gray-900">To</span>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="outline-none border-b border-gray-300 text-gray-700 text-sm"
          >
            <option value="">Select Station</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bhopal">Bhopal</option>
          </select>
        </div>

        {/* Departure Date */}
        <div className="flex flex-col gap-2 flex-1 min-w-[240px]">
          <label className="text-gray-500 text-sm">Departure Date</label>
          <div className="flex gap-2 flex-wrap">
            {dates.map((d) => (
              <button
                key={d}
                onClick={() => setDate(d)}
                className={`px-3 py-2 rounded-md border text-sm ${
                  date === d
                    ? "border-blue-400 text-blue-600 bg-blue-50"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {d}
              </button>
            ))}
            <button className="px-3 py-2 rounded-md border border-gray-300 text-sm flex items-center gap-1 text-[#FA9A3D]">
              <FaRegCalendarAlt /> Calendar
            </button>
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-[#FA9A3D] text-white font-bold px-6 py-3 rounded-md hover:bg-orange-600 transition shadow-md">
          Search Trains
        </button>
      </div>

      {/* Second Row (Filters + IRCTC Logo) */}
      <div className="flex justify-between items-center mt-6">
        {/* Filter buttons */}
        <div className="flex gap-3">
          {filters.map((c) => (
            <button
              key={c}
              onClick={() => setClassType(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                classType === c
                  ? "bg-blue-100 text-gray-900 font-semibold"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {c}
            </button>
          ))}
        </div>


      </div>
    </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-6 py-12 text-center font-outfit">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        Explore More With <span className="text-orange-600">Travel's</span>
      </h2>

      {/* Single Row Features */}
      <div className="flex justify-between items-center flex-wrap gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center group w-[100px] sm:w-[120px]"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-b from-gray-50 to-gray-100 shadow-sm border border-gray-200 group-hover:shadow-lg transition">
              {f.icon}
            </div>
            <p className="mt-3 text-xs sm:text-sm font-medium text-gray-800 text-center">
              {f.title}
            </p>
          </div>
        ))}
      </div>
    </section>

<div className="bg-white shadow-lg rounded-2xl p-4 max-w-7xl mx-auto mb-10">
      {/* Header */}
      <div className="flex justify-center mb-4">
        <h2 className="text-blue-600 font-semibold text-lg border-b-2 border-blue-600">
          Offers
        </h2>
      </div>

      <p className="text-center text-gray-700 font-medium mb-6">
        Trains offers for you
      </p>

      {/* Slider */}
      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Offers List */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden px-6 scroll-smooth"
        >
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="w-[380px] bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 mb-4"
            >
              <img
                src={offer.img}
                alt="offer"
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                {offer.tag && (
                  <span className="text-xs font-semibold text-gray-600">
                    {offer.tag}
                  </span>
                )}
                <h3 className="font-semibold text-gray-800 text-sm mt-1">
                  {offer.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{offer.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>

    <div className="max-w-7xl bg-white mx-auto p-6">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold mb-8">
        Top Train Ticket Routes
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {routes.map((route, index) => (
          <div
            key={index}
            className="bg-blue-50 border border-gray-300 rounded-lg p-4 flex justify-between items-center hover:shadow-md transition cursor-pointer"
          >
            <div>
              <h3 className="font-bold text-sm text-gray-900">
                {route.from} 🚆 {route.to}
              </h3>
              <p className="text-blue-600 font-semibold">{route.code}</p>
            </div>
            <div className="flex items-center text-blue-600 text-sm font-medium">
              Book Now <ArrowRight size={16} className="ml-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-7xl mx-auto p-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center">Why Book With Us?</h2>

      {/* Trustpilot Box */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 border border-green-400 rounded-full px-4 py-2">
          <span className="font-medium">Great</span>
          <span className="flex text-green-500 text-2xl">
            ★★★★★
          </span>
          <a
            href="#"
            className="text-blue-600 underline text-sm font-medium"
          >
            14,273 reviews
          </a>
          <span className="text-sm">on Trustpilot</span>
        </div>
      </div>

      {/* Slider */}
      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Reviews List */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden px-6 scroll-smooth"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-72 bg-white border border-gray-200 rounded-lg p-4 flex-shrink-0"
            >
              {/* Stars */}
              <div className="flex text-green-500 mb-2 text-2xl">★★★★★</div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                {review.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {review.text}
              </p>

              {/* Author */}
              <p className="text-gray-800 text-sm font-semibold">
                {review.author}{" "}
                <span className="text-gray-500 text-xs">{review.date}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
        </>
    )
}
export default Trains;