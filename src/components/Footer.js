import React from "react";
import "./css/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto p-6">
        <div className="subscribe-box flex flex-col md:flex-row justify-between items-center p-5 rounded-lg bg-[#003366] text-white mb-4">
          <h2 className="text-left text-2xl text-center md:text-left md:w-2/3">
            Register Now So You Don't Miss <br /> Our Programs
          </h2>
          <div className="flex flex-col md:flex-row items-center bg-white p-4 rounded-md email-box w-full md:w-1/3">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input mr-2 mb-2 md:mb-0"
            />
            <button className="subscribe-button">Subscribe Now</button>
          </div>
        </div>

        <div className="nav-social-container flex flex-col md:flex-row justify-between items-center w-full mb-4">
          <nav className="space-x-6 hidden md:flex">
            <a href="/" className="hover:text-[#003458] font-bold">
              Home
            </a>
            <a href="/category" className="hover:text-[#003458] font-bold">
              Category
            </a>
            <a href="/about" className="hover:text-[#003458] font-bold">
              About
            </a>
            <a href="/contact" className="hover:text-[#003458] font-bold">
              Contact
            </a>
          </nav>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook hover:text-[#003458]" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter hover:text-[#003458]" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram hover:text-[#003458]" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube hover:text-[#003458]" />
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center">
          <p className="footer-text text-gray-500">
            &copy; 2023 Your Company. All rights reserved.
          </p>
          <img src={logo} alt="Logo" className="logo" />
          <div className="space-x-4 text-gray-500 mt-2 md:mt-0">
            <a href="/terms" className="hover:text-[#003458] text-sm">
              Terms of Service
            </a>
            <span>|</span>
            <a href="/privacy" className="hover:text-[#003458] text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
