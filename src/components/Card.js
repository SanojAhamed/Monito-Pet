// components/Card.js
import React from "react";
import "./css/Card.css"; // Optional: Additional styles if needed
import imageSrc from "../assets/logox.png"; // Adjust the path as needed

const Card = () => {
  return (
    <div className="container mx-auto p-6 bg-[#FCEED5] rounded-lg shadow-lg flex items-center justify-between mt-10">
      {/* Left Section: Image */}
      <div className="flex-initial">
        <img
          src={imageSrc}
          alt="girl with a dog"
          className="rounded-lg object-cover w-[300px] h-[300px] mt-5 mb-[-22px]"
        />
      </div>

      {/* Right Section: Text and Buttons */}
      <div className="mr-12 text-right">
        <div>
          <h1 className="text-5xl font-bold text-[#003459] mb-4">
            One More Friend <br />
            <span className="text-3xl">Thousands More Fun!</span>
          </h1>

          <p className="text-xs text-gray-600 font-bold mb-6 max-w-md">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
        </div>
        <div class="space-x-4 inline-block">
          <button class="view-intro-btn btn-custom flex items-center justify-center px-6 py-3 font-bold border border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-white">
            View Intro
            <i class="fa-regular fa-circle-play"></i>
          </button>
          <button class="explore-now-btn btn-custom px-4 py-3 font-bold text-white bg-[#003459] hover:bg-[#002147]">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
