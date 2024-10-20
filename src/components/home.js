import React, { useState } from "react";
import "../components/css/Home.css";
import dogImage from "../assets/dogimage.png";
import logo from "../assets/logo.png";

const currencies = [
  { code: "VND", icon: "https://img.icons8.com/color/48/vietnam-circular.png" },
  { code: "USD", icon: "https://img.icons8.com/color/48/usa-circular.png" },
  {
    code: "LKR",
    icon: "https://img.icons8.com/color/48/sri-lanka-circular.png",
  },
];

const Home = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCurrencyChange = (event) => {
    const selected = currencies.find(
      (currency) => currency.code === event.target.value
    );
    setSelectedCurrency(selected);
  };

  const handleSearchFocus = () => {
    setIsFocused(true);
    if (searchText === "") {
      setSearchText("");
    }
  };

  const handleSearchBlur = () => {
    setIsFocused(false);
    if (searchText === "") {
      setSearchText("");
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="min-h-screen bg-[#FCEED5]">
      <header className="text-white">
        <div className="container mx-auto flex justify-between items-center px-6 relative">
          <button
            className="md:hidden p-2 focus:outline-none absolute left-6 top-4"
            onClick={toggleNav}
          >
            <i
              className={`fa ${isNavOpen ? "fa-times" : "fa-bars"} text-2xl text-[#003459]`}
            ></i>
          </button>

          <img
            src={logo}
            alt="Monito Logo"
            className="w-32"
          />

          <nav className={`space-x-6 hidden md:flex`}>
            <a href="/" className="hover:text-[#003458] text-[#003459] font-bold">Home</a>
            <a href="/category" className="hover:text-[#003458] text-[#003459] font-bold">Category</a>
            <a href="/about" className="hover:text-[#003458] text-[#003459] font-bold">About</a>
            <a href="/contact" className="hover:text-[#003458] text-[#003459] font-bold">Contact</a>
          </nav>

          {!isNavOpen && (
            <div className="flex space-x-4 items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search something here!"
                  className={`search-input ${isFocused ? "focus" : ""}`}
                  value={searchText}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <span className="absolute left-3 top-2 text-gray-500">
                  <i className="fa fa-search"></i>
                </span>
              </div>

              <button className="bg-[#003459] text-white px-6 py-3 rounded-full font-bold hover:bg-[#002147]">
                Join the Community
              </button>

              <div className="flex items-center bg-[#FCEED5] text-[#003459]">
                <div className="flex items-center">
                  <img
                    src={selectedCurrency.icon}
                    alt={selectedCurrency.code}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                </div>

                <div>
                  <select
                    value={selectedCurrency.code}
                    onChange={handleCurrencyChange}
                    className="bg-transparent border-none focus:outline-none"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {isNavOpen && (
        <nav className="flex flex-col md:hidden space-y-2 mt-4 text-center bg-[#FCEED5]">
          <a href="/" className="hover:text-[#003458] text-[#003459] font-bold">Home</a>
          <a href="/category" className="hover:text-[#003458] text-[#003459] font-bold">Category</a>
          <a href="/about" className="hover:text-[#003458] text-[#003459] font-bold">About</a>
          <a href="/contact" className="hover:text-[#003458] text-[#003459] font-bold">Contact</a>
        </nav>
      )}

      <div className="flex justify-between items-start mt-[90px] ml-[120px]">
        <div className="flex-1 text-container">
          <h1 className="text-5xl font-bold text-[#003459]">
            One More Friend
            <br /> Thousands More Fun!
          </h1>
          <p className="mt-5 text-M text-gray-600 w-96 font-bold">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>

          <div className="space-x-4 inline-block mt-5">
            <button className="view-intro-btn flex items-center justify-center px-6 py-3 rounded-lg font-bold border border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-white rounded-btn">
              View Intro <i className="fa-regular fa-circle-play"></i>
            </button>
            <button className="explore-now-btn px-6 py-3 rounded-lg font-bold text-white bg-[#003459] hover:bg-[#002147] rounded-btn">
              Explore Now
            </button>
          </div>
        </div>

        <img src={dogImage} alt="Dog" className="large-image" />
      </div>
    </div>
  );
};

export default Home;
