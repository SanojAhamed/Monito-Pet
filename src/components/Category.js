import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png"; 
import "../components/css/Category.css"; 
import imageSrc from "../assets/grpdog.png"; 
import Pets from "./Pets"; 

const currencies = [
  { code: "VND", icon: "https://img.icons8.com/color/48/vietnam-circular.png" },
  { code: "USD", icon: "https://img.icons8.com/color/48/usa-circular.png" },
  {
    code: "LKR",
    icon: "https://img.icons8.com/color/48/sri-lanka-circular.png",
  },
];

const colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Apricot", hex: "#FB9C3A" },
  { name: "Black", hex: "#000000" },
  { name: "Black & White", hex: "gradient" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Tan", hex: "#D2B48C" },
];

const breeds = ["Small", "Medium", "Large"];


const PetCard = ({ pet }) => {
  return (
    <div className="pet-card bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={pet.image}
        alt={pet.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="pet-name font-semibold text-lg">{pet.name}</h3>
      <div className="flex items-center text-gray-600">
        <p className="mr-4">Gender: {pet.gender}</p>
        <p>Age: {pet.age}</p>
      </div>
      <p className="text-gray-800 font-bold">{pet.price}</p>
    </div>
  );
};


const Category = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [searchText, setSearchText] = useState(""); 
  const [isFocused, setIsFocused] = useState(false); 
  const [gender, setGender] = useState({ male: false, female: false });
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCurrencyChange = (event) => {
    const selected = currencies.find(
      (currency) => currency.code === event.target.value
    );
    setSelectedCurrency(selected);
  };

  const handleSearchFocus = () => {
    setIsFocused(true);
  };

  const handleSearchBlur = () => {
    setIsFocused(false);
  };

  const handleGenderChange = (e) => {
    const { name, checked } = e.target;
    setGender((prev) => ({ ...prev, [name]: checked }));
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) => {
      if (prev.includes(color)) {
        return prev.filter((c) => c !== color);
      } else {
        return [...prev, color];
      }
    });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleBreedChange = (breed) => {
    setSelectedBreeds((prevSelected) => {
      if (prevSelected.includes(breed)) {
        return prevSelected.filter((b) => b !== breed);
      } else {
        return [...prevSelected, breed];
      }
    });
  };

 
  const fetchPetsData = async () => {
    try {
      const response = await fetch(
        "https://monitor-backend-rust.vercel.app/api/pets"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setPetsData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPetsData();
  }, []);

  return (
    <div className="category-page-container min-h-screen">
     
      <div className="container mx-auto flex justify-between items-center px-6">
        <img src={logo} alt="Monito Logo" className="w-32" />

        <nav className="space-x-6 hidden md:flex">
          <a href="/" className="hover:text-[#003458] text-[#003459] font-bold">
            Home
          </a>
          <a
            href="/category"
            className="hover:text-[#003458] text-[#003459] font-bold"
          >
            Category
          </a>
          <a
            href="/about"
            className="hover:text-[#003458] text-[#003459] font-bold"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-[#003458] text-[#003459] font-bold"
          >
            Contact
          </a>
        </nav>

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

          <div className="flex items-center text-[#003459]">
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
      </div>

    
      <div className="container mx-auto p-6 bg-[#FCEED5] rounded-lg shadow-lg flex flex-col md:flex-row items-center">
       
        <div className="flex-initial">
          <img
            src={imageSrc}
            alt="Group Dog"
            className="group-dog-image" 
          />
        </div>

      
        <div className="mr-12 text-center md:text-right mt-6 md:mt-0">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#003459] mb-4">
              One More Friend <br />
              <span className="text-2xl md:text-3xl">Thousands More Fun!</span>
            </h1>

            <p className="text-xs text-gray-600 font-bold mb-6 max-w-md">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
          </div>

          <div className="space-x-4 inline-block">
            <button className="view-intro-btn btn-custom flex items-center justify-center px-6 py-3 font-bold border border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-white">
              View Intro
              <i className="fa-regular fa-circle-play"></i>
            </button>
            <button className="explore-now-btn btn-custom px-4 py-3 font-bold text-white bg-[#003459] hover:bg-[#002147]">
              Explore Now
            </button>
          </div>
        </div>
      </div>

   
      <div className="container mx-auto p-6 mt-10 flex flex-col md:flex-row">
       
        <div className="w-full md:w-1/3 pr-6 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Filter</h2>
        
          <div className="mb-4">
            <h3 className="font-semibold">Gender</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="gender"
                checked={gender.male}
                onChange={() => {
                  setGender({ male: true, female: false });
                }}
                className="mr-2" 
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="gender"
                checked={gender.female}
                onChange={() => {
                  setGender({ male: false, female: true });
                }}
                className="mr-2" 
              />
              Female
            </label>
          </div>
          <div className="w-60 border-b border-gray-300 mb-4" />

         
          <div className="mb-4">
            <h3 className="font-semibold">Color</h3>
            {colors.map((color) => (
              <label key={color.hex} className="flex items-center mb-2.2">
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color.name)}
                  onChange={() => handleColorChange(color.name)}
                  className="mr-2" 
                />
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="ml-2">{color.name}</span>
              </label>
            ))}
          </div>
          <div className="w-60 border-b border-gray-300 mb-4" />

          <div className="price-filter mb-4">
            <h3 className="font-semibold">Price Range</h3>
            <div className="flex gap-2">
              <input
                type="number"
                name="min"
                placeholder="Min"
                value={priceRange.min}
                onChange={handlePriceChange}
                className="border p-2 w-1/2 rounded"
              />
              <input
                type="number"
                name="max"
                placeholder="Max"
                value={priceRange.max}
                onChange={handlePriceChange}
                className="border p-2 w-1/2 rounded"
              />
            </div>
          </div>
          <div className="w-full border-b border-gray-300 mb-4" />
          {/* Breed Filter */}
          <div className="mb-4">
            <h3 className="font-semibold">Breed</h3>
            {breeds.map((breed) => (
              <label key={breed} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedBreeds.includes(breed)}
                  onChange={() => handleBreedChange(breed)}
                />
                <span className="ml-2">{breed}</span>
              </label>
            ))}
          </div>
          <div className="w-60 border-b border-gray-300 mb-4" />
        </div>

        
        <div className="w-full md:w-2/3">
          <span
            className="text-2xl font-bold mb-4"
            style={{ color: "darkblue" }}
          >
            Small Dog
          </span>
          <span
            className="text-l font-bold mb-4 mx-2"
            style={{ color: "gray" }}
          >
            {" "}
            52 Puppies
          </span>
          <div className="pets-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <p>Loading pets...</p>
            ) : error ? (
              <p>Error fetching pets: {error}</p>
            ) : (
              petsData.map((pet) => (
                <PetCard key={pet.id} pet={pet} /> 
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
