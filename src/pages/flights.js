import { useState } from "react";
import { Link } from "react-router-dom";

import heroImg from "../image/hero3.jpg";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaTrain, FaTaxi,FaMapMarkedAlt } from "react-icons/fa";
import student from "../image/s1.avif";
import Citizen from "../image/s2.avif";
import Forces from "../image/s3.avif";
import Doctors from "../image/s4.avif";
import "swiper/css";
import "swiper/css/navigation"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import france from "../image/france.jpg";
import singapore from "../image/singapore.jpg";
import maldives from "../image/Maldive.gif";
import italy from "../image/italy.jpg"; 
import off1 from "../image/off1.jpg";

import { 
  FaPlaneDeparture, 
  FaPlaneArrival, 
  FaCalendarAlt, 
  FaUserTie 
} from "react-icons/fa";

const specialFares = [
  {
    id: 1,
    title: "Student",
    subtitle: "Extra Baggage",
    icon: (
      <img
        src={student}
        alt="Student"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    id: 2,
    title: "Senior Citizen",
    subtitle: "Exclusive Discounts",
    icon: (
      <img
        src={Citizen}
        alt="Senior Citizen"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    id: 3,
    title: "Armed Forces",
    subtitle: "Exclusive Discounts",
    icon: (
      <img
        src={Forces}
        alt="Armed Forces"
        className="w-8 h-8 object-contain"
      />
    ),
  },
  {
    id: 4,
    title: "Doctors & Nurses",
    subtitle: "Exclusive Discounts",
    icon: (
      <img
        src={Doctors}
        alt="Doctors & Nurses"
        className="w-8 h-8 object-contain"
      />
    ),
  },
];

const offers = [
  {
    id: 1,
    img: off1,
    description: "Register and Get Discount on Booking First Flight with Us",
    valid: "30th Sep, 2025",
    bg: "from-blue-500 to-sky-400",
  },
  {
    id: 2,
    img: off1,
    description: "Grab the Biggest Discounts on Travel Bookings",
    valid: "30th Sep, 2025",
    bg: "from-pink-400 to-purple-400",
  },
  {
    id: 3,
    img: off1,
    description: "Enjoy Special Fares on Select International Routes with Air India",
    valid: "06th Sep 2025",
    bg: "from-orange-400 to-red-400",
  },
  {
    id: 4,
    img: off1,
    description: "Register and Get Discount on Booking First Flight with Us",
    valid: "30th Sep, 2025",
    bg: "from-blue-500 to-sky-400",
  },
  {
    id: 5,
    img: off1,
    description: "Register and Get Discount on Booking First Flight with Us",
    valid: "30th Sep, 2025",
    bg: "from-blue-500 to-sky-400",
  },
  {
    id: 6,
    img: off1,
    description: "Register and Get Discount on Booking First Flight with Us",
    valid: "30th Sep, 2025",
    bg: "from-blue-500 to-sky-400",
  },
];

const travelers = [
  {
    id: 1,
    img: italy,
    name: "William Liam",
    username: "@william_liam",
  },
  {
    id: 2,
    img: singapore,
    name: "James Noah",
    username: "@james_noah",
  },
  {
    id: 3,
    img: maldives,
    name: "Levi Turisha",
    username: "@levi_turisha23",
  },
  {
    id: 4,
    img:france,
    name: "Sebastian John",
    username: "@sebastian345",
  },
  {
    id: 5,
    img:france,
    name: "Sebastian John",
    username: "@sebastian345",
  },

];

const menuItems = [
  { name: "Flights", icon: <FaPlane />, path: "/flights" },
  { name: "Hotels", icon: <FaHotel />, path: "/hotels" },
  { name: "Holiday Packages", icon: <FaUmbrellaBeach />, path: "/packages" },
  { name: "Trains", icon: <FaTrain />, path: "/trains" },
  { name: "Cabs", icon: <FaTaxi />, path: "/cabs" },
  { name: "Tours & Attractions", icon: <FaMapMarkedAlt />, path: "/tours" },
];

const flights = [
  {
    id: 1,
    to: "Mumbai",
    date: "Wednesday 24 Sep 2025",
    airline: "Indigo",
    price: 4178,
  },
  {
    id: 2,
    to: "Bangalore",
    date: "Friday 26 Sep 2025",
    airline: "Indigo",
    price: 5119,
  },
  {
    id: 3,
    to: "GOA",
    date: "Tuesday 23 Sep 2025",
    airline: "Indigo",
    price: 4098,
  },
  {
    id: 4,
    to: "Chennai",
    date: "Friday 12 Sep 2025",
    airline: "Indigo",
    price: 5164,
  },
  {
    id: 5,
    to: "Pune",
    date: "Friday 05 Sep 2025",
    airline: "Indigo",
    price: 4619,
  },
  {
    id: 6,
    to: "Ahmedabad",
    date: "Tuesday 16 Sep 2025",
    airline: "Indigo",
    price: 2898,
  },
];

const Flights=()=>{
    const [active, setActive] = useState("Flights");
    const [selected, setSelected] = useState('oneWay');
    const [selectedMonth, setSelectedMonth] = useState("Sep");

      const options = [
        { id: 'oneWay', label: 'One Way' },
        { id: 'roundWay', label: 'Round Way' },
        { id: 'multiCity', label: 'Multi City' },
      ];
    return(
        <>
        <div className="relative w-full h-[700px] mt-[50px] bg-gradient-to-r from-gray-500 to-gray-400">
        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white pt-0 md:pt-1 z-10">
          {/* Title */}
          <h1 className="text-4xl pt-10 font-outfit md:text-5xl font-bold  drop-shadow-lg translate-y-[-80px]">
            Book Domestic and International Flight Tickets
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
          <div className="bg-gray-100 font-outfit rounded-2xl shadow-md items-center w-[90%] max-w-6xl h-[450px] mx-auto -mt-3 relative z-0 ">
            {/* Location Input */}
            <div className="flex space-x-6 p-4 mt-[10px]">
            {options.map((option) => (
              <label key={option.id} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="travelType"
                  value={option.id}
                  checked={selected === option.id}
                  onChange={() => setSelected(option.id)}
                  className="hidden"
                />
                <span
                  className={`w-4 h-4 mr-2 rounded-full border-2 ${
                    selected === option.id ? 'bg-[#FA9A3D] border-[#FA9A3D]' : 'border-gray-400'
                  }`}
                ></span>
                <span className="text-gray-800 font-medium">{option.label}</span>
              </label>
            ))}
          </div>
            <div className="flex flex-col md:flex-row gap-6 p-6  rounded-lg ">
                  
                  {/* Departure Info */}
                  <div className="flex items-center gap-4 bg-white p-4 rounded-md  w-full md:w-1/4">
                    <FaPlaneDeparture className="text-[#FA9A3D] text-2xl" />
                    <div>
                      <p className="font-semibold text-gray-600">From: New York</p>
                      <p className="text-sm text-gray-600">JFK - John F. Kennedy Intl.</p>
                    </div>
                  </div>

                  {/* Arrival Info */}
                  <div className="flex items-center gap-4 bg-white p-4 rounded-md shadow-sm w-full md:w-1/4">
                    <FaPlaneArrival className="text-[#FA9A3D] text-2xl" />
                    <div>
                      <p className="font-semibold text-gray-600">To: Los Angeles</p>
                      <p className="text-sm text-gray-600">LAX - Los Angeles Intl.</p>
                    </div>
                  </div>

                  {/* Travel Dates */}
                  <div className="flex items-center gap-4 bg-white p-4 rounded-md shadow-sm w-full md:w-1/4">
                    <FaCalendarAlt className="text-[#FA9A3D] text-2xl" />
                    <div>
                      <p className="font-semibold text-gray-600">Journey: 9/4/2025</p>
                      <p className="text-sm text-gray-600">Return: 9/5/2025</p>
                    </div>
                  </div>

                  {/* Passenger Info */}
                  <div className="flex items-center gap-4 bg-white p-4 rounded-md shadow-sm w-full md:w-1/4">
                    <FaUserTie className="text-[#FA9A3D] text-2xl" />
                    <div>
                      <p className="font-semibold text-gray-600">Passengers: 2</p>
                      <p className="text-sm text-gray-600">Class: Business</p>
                    </div>
                  </div>

                </div>
                <div className="p-6 bg-gradient-to-r from-green-50 to-white rounded-lg shadow">
                <div className="mt-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-md">
                    MORE BENEFITS
                  </span>
                  Special Fares
               </h2>

              <div className="flex flex-nowrap gap-4 overflow-x-auto pb-2">
                {specialFares.map((fare) => (
                  <label
                    key={fare.id}
                    className="flex items-center gap-3 p-4 border rounded-lg shadow-sm cursor-pointer hover:border-purple-600 transition min-w-[220px]"
                  >
                    <input type="checkbox" className="w-5 h-5 accent-purple-600" />
                    <div className="flex items-center gap-3">
                      {fare.icon}
                      <div>
                        <p className="font-semibold text-gray-900">{fare.title}</p>
                        <p className="text-sm text-gray-500">{fare.subtitle}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
            {/* Search Button */}
            <div className="flex justify-center mt-[10px]">
              <button className="bg-[#FA9A3D] text-white rounded-full px-6 py-3 font-bold w-full md:w-auto hover:bg-blue-600 hover:text-gray-900 transition-colors duration-300 shadow-md mr-3">
                SEARCH FLIGHTS
              </button>
            </div>

          </div>
        </div>
      </div>
<section className="max-w-7xl mx-auto px-4 py-10">
  {/* Heading */}
  <h2 className="text-3xl font-bold text-center mb-6">Exclusive Offers</h2>

  {/* Tabs */}
  <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
    <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
      Best Offers
    </button>
    <button className="text-gray-600 hover:text-blue-600">Bank Offers</button>
    <button className="text-gray-600 hover:text-blue-600">Flight</button>
    <button className="text-gray-600 hover:text-blue-600">Hotel</button>
    <button className="text-gray-600 hover:text-blue-600">Bus</button>
    <button className="text-gray-600 hover:text-blue-600">Holidays</button>
    <button className="text-gray-600 hover:text-blue-600">Cabs</button>
    <button className="text-blue-600 underline">View All Offers</button>
  </div>

  {/* Slider */}
  <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {offers.map((offer) => (
      <SwiperSlide key={offer.id}>
        <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition">
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={offer.img}
              alt="offer"
              className="w-full h-45 object-contain bg-gray-100 hover:scale-105 transition duration-300"
            />
          </div>

          {/* Card Body */}
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-2">{offer.description}</p>
            <p className="text-gray-500 text-xs">Valid till: {offer.valid}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Best Travelers of the Month
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {travelers.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow-md overflow-hidden w-[200px] h-[300px] rounded-full mx-auto flex flex-col"
          >
            {/* Top Half Image */}
            <div className="h-1/2 w-full">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Half Content */}
            <div className="h-1/2 flex flex-col items-center justify-center px-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.username}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
        <div className="flex items-center justify-center bg-gray-300 p-6">
          {/* Inner Card */}
          <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
            {/* Departure */}
            <div className="flex items-center pr-8">
              <label className="text-gray-600 font-medium">Departing from</label>
              <select className="ml-2 border-b border-gray-400 outline-none bg-transparent">
                <option>Delhi (DEL)</option>
                <option>Mumbai (BOM)</option>
                <option>Bangalore (BLR)</option>
              </select>
            </div>

            {/* Custom Vertical Line */}
            <span className="h-12 w-[2px] bg-gray-400 mx-2"></span>

            {/* Travel Period */}
            <div className="flex flex-col items-center pl-6">
              <p className="font-medium text-gray-800 mb-1">Travel Period</p>
              <div className="flex gap-2">
                {["Sep", "Oct", "Nov"].map((month) => (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    className={`px-4 py-1 rounded-md border ${
                      selectedMonth === month
                        ? "bg-black text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {month}
                  </button>
                  
                ))}
              </div>
            </div>
          </div>
        </div>
            
      {/* Flights List */}
      <div className="border border-t-0 rounded-b-md divide-y bg-white">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="flex items-center justify-between p-4"
          >
            {/* Left Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                To {flight.to}
              </h3>
              <p className="text-gray-600 text-sm">
                {flight.date} | {flight.airline}
              </p>
            </div>

            {/* Middle Section */}
            <div>
              <p className="text-gray-600 text-sm">
                One way as low as{" "}
                <span className="text-orange-600 font-bold text-2xl">
                  ₹{flight.price}
                </span>
              </p>
            </div>

            {/* Right Section */}
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600">
              BOOK NOW
            </button>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}
export default Flights