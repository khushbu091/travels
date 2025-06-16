import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import hero from "../image/hero.png";
import bg from "../image/bg2.jpg";
import aboutimg from "../image/about.png";
import bg2 from "../image/bg3.jpg"
import hero2 from "../image/hero2.png";
import choose1 from "../image/choose1.png";
import choose2 from "../image/choose2.png";
import choose3 from "../image/choose3.png";
import choose4 from "../image/choose4.png";
import gal1 from "../image/blackjack.png";
import gal2 from "../image/32card.png";
import gal3 from "../image/777.jpg";
import gal4 from "../image/aviator.jpg";
import gal5 from "../image/poker.jpg";
import gal6 from "../image/roulette.avif";
import gal7 from "../image/rummy.png";
import gal8 from "../image/livetable.webp";
import gal9 from "../image/sport.jpg";

const games = [
  { title: 'BLACKJACK', image: gal1 },
  { title: '32 Card', image: gal2 },
  { title: 'Big Win 777', image: gal3 },
  { title: 'Aviator', image:gal4 },
  { title: 'Poker', image: gal5 },
  { title: 'Roulette', image: gal6 },
  { title: 'Rummy Game', image: gal7 },
  { title: 'Live Table', image: gal8 },
  { title: 'Sports Game', image: gal9 }
];
const Home = () => {
  return (
    <>
    {/* ------------------------------ Hero Section----------------------------------- */}
    <section id="home" className="relative text-white pt-20 pb-10 px-6 md:px-24 lg:px-24 overflow-hidden min-h-[90vh]">
      {/* Background Image + Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bg})`,
          filter: "blur(5px) brightness(0.4)", // 👈 blur + darkness
        }}
      ></div>

      {/* Optional darker overlay layer */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-cyan-400 text-xl font-semibold mb-2">
            Why Choose Reddy Anna Book?
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Play the Best Casino <br /> Games Online Today
          </h1>
          <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0 font-semibold">
            Reddy Anna Book is India’s most trusted platform for online cricket betting. 
            Over 55K+ users have already joined us and are enjoying a secure, seamless 
            betting experience. With features like 24-hour withdrawals, instant Cricket IDs, 
            and a commitment to 100% data security, Reddy Anna Book is the ultimate 
            destination for all your betting needs.
            Our platform offers unmatched reliability, unlimited transaction opportunities, 
            and round-the-clock customer service, ensuring you have a hassle-free experience 
            at every step.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-2 font-semibold rounded-md text-white hover:scale-105 transition">
              ▶ Play Now !
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-cyan-400 px-5 py-2 font-semibold rounded-md text-white hover:scale-105 transition">
              ▶ Join Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            src={hero}
            alt="Casino"
            className="w-80 md:w-[400px] lg:w-[650px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
    {/* ------------------------------ About  Section---------------------------------------------- */}
    <section id="about" className="bg-black text-white py-16 px-4 md:px-12 lg:px-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 max-w-7xl mx-auto">

        {/* LEFT: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={aboutimg}
            alt="Casino Visual"
            className="w-80 md:w-[400px] lg:w-[650px] drop-shadow-xl object-contain"
          />
        </div>

        {/* RIGHT: Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4">
            About Us
          </h2>
          <p className="text-gray-300 mb-6">
          Reddy Anna Book is a cricket betting and trading website that has been in operation 
          since 2010. This service is regarded as the largest book exchange platform for 
          cricket betting after Mahadev's book. It distinguishes itself from other exchange 
          platforms due to its simple deposit and withdrawal options. Reddy Anna owns or 
          operates this website. We communicate exclusively via WhatsApp.
          Reddy Anna cricket ID Online has lately developed the most recent new 
          methods of making money through betting. Users receive their cricket IDs promptly 
          online, with 24-hour withdrawal services. With over 50,000 pleased consumers, this 
          platform is at the top of the book exchange market. It currently has over 200 
          offline branches.            
          </p>
          <p className="text-gray-300 mb-8">
            These platforms offer a wide range of games from traditional casino games like poker, blackjack and roulette to more modern games like video slots and virtual sports betting. Online casinos have the advantage of being accessible from anywhere at any time making them a convenient option for many players.
          </p>
          <button className="bg-gradient-to-r from-blue-400 to-pink-500 text-white font-semibold px-6 py-2 rounded-md hover:scale-105 transition flex items-center gap-2">
            <span>◀</span> Read More <span>▶</span>
          </button>
        </div>
      </div>
    </section>
    {/* ------------------------------Service Section---------------------------------------------- */}
    <section id="services" className="relative bg-[#0f0f12] text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">

        {/* ✅ Background Image (Blurred) */}
        <div className="absolute inset-0 z-0">
            <img
            src={bg2} // 👈 yahan aap apni image import karenge
            alt="Background"
            className="w-full h-full object-cover opacity-20 blur-sm"
            />
        </div>

        {/* ✅ Foreground Content */}
        <div className="relative z-10">
            {/* Title + Description */}
            <div className="text-center mb-12">
            <h2 className="ttext-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4">
                Our Services
            </h2>
            <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
                At Reddy Anna Book Official, our commitment is to provide an unparalleled online gaming experience marked by excitement, security, and innovation. As a leading platform, we offer a diverse array of sports games, ranging from cricket and basketball to football and tennis, ensuring there's something for every sports enthusiast. Our live casinos provide a dynamic and immersive gaming environment, allowing users to test their luck in real-time. Security is paramount to us, and we employ advanced encryption technologies to safeguard user information. With a user-friendly interface, seamless navigation, and a dedication to responsible gaming practices, Reddy Anna ensures that every player enjoys a thrilling yet responsible gaming journey. Join us and discover a world where entertainment meets excellence, and where your gaming satisfaction is our top priority.
            </p>
            </div>

            {/* Content and Image */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-4">

            {/* Left Grid Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2">
                {[
                { title: "Opportunity To Win Big", image: choose1 },
                { title: "Learn New Games", image: choose2 },
                { title: "Free Play And Bonuses", image: choose3 },
                { title: "Earning Loyalty Rewards", image: choose4 },
                ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <div className="min-w-[74px] min-h-[74px] rounded-full bg-gradient-to-r from-pink-400 to-blue-400 flex items-center justify-center p-3">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-contain"
                    />
                    </div>
                    <div>
                    <h4 className="text-cyan-400 font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-300 text-sm">
                        One of the biggest advantages of online casinos is the wide range of games they like poker blackjack offer.
                    </p>
                    </div>
                </div>
                ))}
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
                <img
                src={hero2}
                alt="Casino Card and Chips"
                className="w-full max-w-xs md:max-w-sm lg:max-w-md"
                />
            </div>

            </div>
        </div>
    </section>
    {/* ------------------------------ Game's Section---------------------------------------------- */}
    <section id="games" className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4">
          Awesome Casino Games
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Do you want to open your cricket ID online but can't find a trustworthy betting platform? Here's a Reddy Anna Book for you.
          This is India's most famous and trusted cricket demo ID platform. Reddy Anna Book is India's largest exchange platform
          offering fantastic online sports betting with a 24-hour withdrawal service.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-7xl mx-auto" >
        {games.map((game, index) => (
          <div
            key={index}
            className="relative group rounded-md overflow-hidden border border-pink-500 hover:border-cyan-400 transition"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-[110px] md:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-90 transition duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
              {game.amount && (
                <p className="text-white text-sm mb-2">{game.amount}</p>
              )}
              <button className="px-4 py-2 bg-black text-white font-semibold rounded hover:bg-white hover:text-black transition">
                ▶ Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* ----------------- Contact Section ----------------------------------------- */}
    <section id="contact" className="bg-black text-white px-6 py-12 md:px-20 lg:px-32">
      <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4 text-center mb-5">
        Contact Us
      </h2>
      <section className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Text Content */}
        <section>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-cyan-400">Contact</span>{" "}
            <span className="text-purple-400">For More</span>{" "}
            <span className="text-pink-500">Information</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Online casinos have become a popular form of entertainment for
            people all over the world. These platforms offer a wide range of
            games from traditional casino games like poker, blackjack, and
            roulette.
          </p>
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-400" />
              <span>+0123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              <span>example@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>New Rose Valley Park, NYZ</span>
            </div>
          </section>
        </section>

        {/* Right Contact Form */}
        <form className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full bg-black border border-white text-white px-4 py-3 rounded focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-black border border-white text-white px-4 py-3 rounded focus:outline-none"
              required
            />
          </div>
          <textarea
            placeholder="Enter your message"
            rows="5"
            className="w-full bg-black border border-white text-white px-4 py-3 rounded focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-white font-semibold px-6 py-3 rounded shadow-lg hover:from-pink-500 hover:to-cyan-400 transition duration-300"
          >
            Submit Now
          </button>
        </form>
      </section>
    </section>
    {/* ------------------------ Footer section ----------------------------------------- */}
    <section className=" p-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
      <footer className="bg-black text-white px-6 md:px-16 py-12 border-t-[2px] border-transparent ">
        {/* Footer Grid */}
        <section className="grid md:grid-cols-4 gap-10 pt-10">
          {/* About Us */}
          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">ABOUT US</h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              One of the biggest advantages of online casinos is the wide range of games they offer. Many types of casino games may have a limited selection due to space constraints.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-pink-500">Follow :</span>
              <FaFacebookF className="text-blue-500 bg-white rounded-full p-1 text-3xl" />
              <FaXTwitter className="text-white bg-black border rounded-full p-1 text-3xl" />
              <FaInstagram className="text-pink-500 bg-white rounded-full p-1 text-3xl" />
              <FaLinkedinIn className="text-blue-400 bg-white rounded-full p-1 text-3xl" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-white hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-white hover:text-white">Service</a></li>
              <li><a href="#games" className="text-white hover:text-white">Casino Games</a></li>           
              <li><a href="#contact" className="text-white hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Supports */}
          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">SUPPORTS</h3>
            <ul className="space-y-2 text-sm">
              <li>Game Settings</li>
              <li>Get the App</li>
              <li>Help & Support</li>
              <li>Accessibility</li>
              <li>Help Center 24/7</li>
              <li>Privacy & Terms</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">NEWSLETTER</h3>
            <p className="text-gray-200 text-sm mb-4">
              Subscribe to our online casino platform newsletter to get the latest updates. Casinos have become a popular form of entertainment for people all over the world.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Insert Your Email Address"
                className="w-full px-4 py-2 rounded-l bg-white text-black focus:outline-none"
              />
              <button className="px-4 py-2 rounded-r bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-white">
                →
              </button>
            </div>
          </div>
        </section>
      </footer>
    </section>

    </>
  );
};

export default Home;
