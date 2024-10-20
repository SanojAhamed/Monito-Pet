import React, { useState } from 'react';
import imageSrc from '../assets/handwithdog.png';
import dogLegsIcon from '../assets/doglegs.png';

const AdoptionCard = () => {
  const [rotation, setRotation] = useState(0);

  const handleImageClick = () => {
    setRotation((prevRotation) => (prevRotation - 90 + 360) % 360);
  };

  return (
    <div className="container mx-auto p-6 bg-[#FCEED5] rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between mt-10">
      <div className="ml-0 md:ml-10 text-left">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#003459] mb-4">
            Adoption <img src={dogLegsIcon} alt="Dog Legs Icon" className="inline w-10 h-10" /> <br />
            <span className="text-xl md:text-3xl">We Need Help. So Do They.</span>
          </h1>
          <p className="text-xs text-gray-600 font-bold mb-6 max-w-md">
            Adopt a pet and give it a home <br />
            it will love you back unconditionally.
          </p>
        </div>
        <div className="space-x-4 inline-block">
          <button 
            type="button"
            className="view-intro-btn btn-custom flex items-center justify-center px-6 py-3 font-bold border border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-white"
          >
            View Intro
            <i className="fa-regular fa-circle-play"></i>
          </button>
          <button 
            type="button"
            className="explore-now-btn btn-custom px-4 py-3 font-bold text-white bg-[#003459] hover:bg-[#002147]"
          >
            Explore Now
          </button>
        </div>
      </div>
      <div className="flex-initial mt-4 md:mt-0">
        <img
          src={imageSrc}
          alt="Hand with a dog"
          className="rounded-lg object-cover w-full md:w-[300px] h-[300px] transition-transform duration-300 ease"
          style={{ transform: `rotate(${rotation}deg)` }}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default AdoptionCard;
