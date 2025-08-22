import heroImg from "../image/hero3.jpg";
import { FaStar } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaTrain, FaTaxi,FaMapMarkedAlt } from "react-icons/fa";
import france from "../image/france.jpg";
import singapore from "../image/singapore.jpg";
import maldives from "../image/Maldive.gif";
import italy from "../image/italy.jpg";
import f1 from "../image/f1.png";
import f2 from "../image/f2.png";
import f3 from "../image/f3.png";
import f4 from "../image/f4.png";
import DownloadImg from "../image/29.png";
const menuItems = [
  { name: "Flights", icon: <FaPlane /> },
  { name: "Hotels", icon: <FaHotel /> },
  { name: "Holiday Packages", icon: <FaUmbrellaBeach /> },
  { name: "Trains", icon: <FaTrain /> },
  { name: "Cabs", icon: <FaTaxi /> },
  { name: "Tours & Attractions", icon: <FaMapMarkedAlt /> },
];
  const destinations = [
    {
      id: 1,
      title: "France",
      subtitle: "TRAVEL TO",
      listings: "3 Listings",
      img: france, 
    },
    {
      id: 2,
      title: "Singapore",
      subtitle: "2 DAYS",
      listings: "3 Listings",
      img: singapore,
    },
    {
      id: 3,
      title: "Maldives",
      subtitle: "2 DAYS",
      listings: "3 Listings",
      img: maldives,
    },
    {
      id: 4,
      title: "Italy",
      subtitle: "PLACE TO",
      listings: "5 Listings",
      img: italy,
    },
  ];
 const features = [
    {
      img: f1, 
      title: "Book now, pay at the property",
      desc: "FREE cancellation on most rooms",
    },
    {
      img: f2,
      title: "300M+ reviews from fellow travelers",
      desc: "Get trusted information from guests like you",
    },
    {
      img: f3,
      title: "2+ million properties worldwide",
      desc: "Hotels, guest houses, apartments, and more...",
    },
    {
      img: f4,
      title: "Trusted 24/7 customer service you can rely on",
      desc: "We're always here to help",
    },
  ];
const hotels = [
    { name: "Cocoon Hotel", city: "Pune", img: maldives, rating: 4 },
    { name: "Country Inn & Suites", city: "Ghaziabad", img: singapore, rating: 5 },
    { name: "Radisson Blu Udaipur", city: "Udaipur", img: italy, rating: 4 },
    { name: "Aamby Valley City", city: "Lonavala", img: france, rating: 4 },
    { name: "The Pride Hotel", city: "Chennai", img: singapore, rating: 4 },
    { name: "The Park Kolkata", city: "Kolkata", img: maldives, rating: 4 },
    { name: "Purple Palms Resort", city: "Coorg", img: italy, rating: 5 },
    { name: "Golden Tulip Goa", city: "Goa", img: france, rating: 4 },
    { name: "Ramada Plaza", city: "Mumbai", img:maldives, rating: 4 },
  ];


const Home = () => {
  return (
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
          <h1 className="text-5xl font-outfit md:text-7xl font-bold mb-16 drop-shadow-lg translate-y-[-80px]">
            Find Your Dream Destination
          </h1>

          <nav className="bg-white font-outfit px-6 py-3 flex justify-center flex-wrap gap-2 md:gap-3 text-sm md:text-md font-medium 
            shadow-md rounded-2xl w-[90%] max-w-4xl relative z-10">
            {menuItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-gray-700 text-[16px] hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <span className="text-orange-500">{item.icon}</span> 
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Search Box */}
          <div className="bg-gray-100 font-outfit rounded-2xl shadow-md snake-animate flex flex-col md:flex-row items-center w-[90%] max-w-6xl h-[100px] mx-auto -mt-3 relative z-0">
            {/* Location Input */}
            <div className="flex items-center gap-2 px-4 py-3 flex-1 border-b md:border-b-0 md:border-r">
              <span className="text-gray-900 text-xl">🛏️</span>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full outline-none text-gray-900"
              />
            </div>

            {/* Date Picker */}
            <div className="flex items-center gap-2 px-4 py-3 flex-1 border-b md:border-b-0 md:border-r">
              <span className="text-gray-900 text-xl">📅</span>
              <span className="text-gray-900">Check-in date — Check-out date</span>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-2 px-4 py-3 flex-1 border-b md:border-b-0 md:border-r">
              <span className="text-gray-900 text-xl">👤</span>
              <span className="text-gray-900">2 adults · 0 children · 1 room</span>
            </div>

            {/* Search Button */}
            <button className="bg-[#FA9A3D] text-white rounded-full px-6 py-3 font-bold w-full md:w-auto hover:bg-blue-600 hover:text-gray-900 transition-colors duration-300 shadow-md mr-3">
              Search
            </button>
          </div>
        </div>
      </div>

      <section className="px-6 py-12 md:px-16 bg-white w-full">
            <div className="text-center mb-10">
              <button className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                ✈ Destination List
              </button>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 font-outfit">
                Explore Beautiful <br /> Places Around World
              </h2>
            </div>

      <div className="flex justify-center gap-6">
        {/* Left Side Destinations */}
        <div className="w-[800px] grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* France */}
          <div className="relative rounded-2xl overflow-hidden md:col-span-2 ">
            <img
              src={destinations[0].img}
              alt={destinations[0].title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white bg-black/40">
              <span className="bg-orange-500 text-xs px-2 py-1 rounded-full">
                {destinations[0].listings}
              </span>
              <p className="text-sm mt-2">{destinations[0].subtitle}</p>
              <h3 className="text-xl font-bold">{destinations[0].title}</h3>
            </div>
          </div>

          {/* Singapore */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={destinations[1].img}
              alt={destinations[1].title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white bg-black/40">
              <span className="bg-orange-500 text-xs px-2 py-1 rounded-full">
                {destinations[1].listings}
              </span>
              <p className="text-sm mt-2">{destinations[1].subtitle}</p>
              <h3 className="text-xl font-bold">{destinations[1].title}</h3>
            </div>
          </div>

          {/* Maldives */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={destinations[2].img}
              alt={destinations[2].title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white font-outfit bg-black/40">
              <span className="bg-orange-500 text-xs px-2 py-1 rounded-full">
                {destinations[2].listings}
              </span>
              <p className="text-sm mt-2">{destinations[2].subtitle}</p>
              <h3 className="text-xl font-bold">{destinations[2].title}</h3>
            </div>
          </div>

          {/* Italy */}
          <div className="relative rounded-2xl overflow-hidden md:col-span-2">
            <img
              src={destinations[3].img}
              alt={destinations[3].title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white bg-black/40">
              <span className="bg-orange-500 text-xs px-2 py-1 rounded-full ">
                {destinations[3].listings}
              </span>
              <p className="text-sm mt-2">{destinations[3].subtitle}</p>
              <h3 className="text-xl font-bold">{destinations[3].title}</h3>
            </div>
          </div>
        </div>

        {/* Right Side Fixed Promo */}
      <div className="w-[250px] h-[530px] sticky top-20 rounded-2xl overflow-hidden relative">
        {/* Background Image */}
        <img
          src={heroImg} 
          alt="Summer Deals"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6">
          <p className="text-lg font-bold">20% Off</p>
          <h3 className="text-2xl font-outfit font-bold mt-2 text-center">
            Summer <br /> Hottest Deals
          </h3>
          <button className="bg-orange-500 font-outfit px-4 py-2 mt-6 rounded-full">
            View Deals
          </button>
        </div>
      </div>
      </div>
      </section>
      <div className="py-12 px-6 bg-white max-w-6xl mx-auto mt-10">
          <h2 className="text-2xl font-bold font-outfit mb-8 text-gray-900">
            Why Booking.com?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="font-semibold font-outfit text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-outfit text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-4xl font-bold font-outfit mb-8">Top hotels with great deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="flex items-center gap-4  rounded-lg p-4 hover:shadow-lg transition"
              >
                <img
                  src={hotel.img}
                  alt={hotel.name}
                  className="w-24 h-24 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg font-outfit">{hotel.name}</h3>
                  <p className="text-gray-600 text-sm font-outfit">{hotel.city}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-4 w-4 ${i < hotel.rating ? "text-orange-600" : "text-gray-300"}`}
                        style={{ color: i < hotel.rating ? "#FA9A3D" : "" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      <section className="bg-white w-[1200px] mx-auto rounded-xl relative overflow-hidden py-16 mb-10">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-black italic text-lg mb-2 font-outfit">Download Our App</p>
          <h2 className="text-5xl font-outfit font-bold text-black leading-snug mb-4">
            Download Mobile App To <br /> Explore Trabely
          </h2>
          <p className="text-gray-700 text-lg mb-6 font-outfit">
            It is a long established fact that a reader will be distracted
            readable content of a page when looking at layout the point.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-full shadow hover:scale-105 transition"
            >
              <FaApple className="text-3xl" /> Get it on App Store
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-full shadow hover:scale-105 transition"
            >
              <FaGooglePlay className="text-3xl" /> Get it on Google Play
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={DownloadImg}
            alt="Download App"
            className="max-w-lg rounded-lg"
          />
        </div>
      </div>
    </section>

    </>
  );
};

export default Home;
