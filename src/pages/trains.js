import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaTrain, FaTaxi,FaMapMarkedAlt } from "react-icons/fa";
import heroImg from "../image/hero3.jpg";
import { FaExchangeAlt, FaRegCalendarAlt } from "react-icons/fa";
const menuItems = [
  { name: "Flights", icon: <FaPlane />, path: "/flights" },
  { name: "Hotels", icon: <FaHotel />, path: "/hotels" },
  { name: "Holiday Packages", icon: <FaUmbrellaBeach />, path: "/packages" },
  { name: "Trains", icon: <FaTrain />, path: "/trains" },
  { name: "Cabs", icon: <FaTaxi />, path: "/cabs" },
  { name: "Tours & Attractions", icon: <FaMapMarkedAlt />, path: "/tours" },
];
const features = [
    { title: "PNR Status Enquiry", icon: "https://cdn-icons-png.flaticon.com/512/3202/3202926.png" },
    { title: "Train Coach Position", icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png" },
    { title: "Live Station Status", icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png" },
    { title: "Live Train Status", icon: "https://cdn-icons-png.flaticon.com/512/808/808439.png" },
    { title: "Train Time Table", icon: "https://cdn-icons-png.flaticon.com/512/3069/3069172.png" },
    { title: "Train Seat Availability", icon: "https://cdn-icons-png.flaticon.com/512/2645/2645897.png" },
    { title: "Train Charts Vacancy", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828859.png" },
    { title: "Train Food Booking", icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png" },
  ];

const Trains=()=>{
        const [active, setActive] = useState("Trains");
        const [from, setFrom] = useState("");
        const [to, setTo] = useState("");
        const [date, setDate] = useState("");
        const [classType, setClassType] = useState("AC & non-AC");
        const filters = ["AC & non-AC", "AC only", "Non-AC only"];
        const dates = ["9 Sep Today", "10 Sep Wed", "11 Sep Thu"];
        const handleSwap = () => {
            setFrom(to);
            setTo(from);
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
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Explore More With <span className="text-black">EaseMyTrip</span>
      </h2>

      {/* Features grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200">
              <img src={f.icon} alt={f.title} className="w-10 h-10 object-contain" />
            </div>
            <p className="mt-3 text-sm md:text-base font-medium text-gray-800">{f.title}</p>
          </div>
        ))}
      </div>
    </section>

        </>
    )
}
export default Trains;