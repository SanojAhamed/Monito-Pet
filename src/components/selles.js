import React from 'react';  
import './css/selles.css';


import logo0 from '../assets/p00.png';  
import logo1 from '../assets/p0.png';  
import logo2 from '../assets/p1.png';  
import logo3 from '../assets/p2.png';  
import logo4 from '../assets/p3.png';  
import logo5 from '../assets/p4.png';  
import logo6 from '../assets/p5.png';  

const Selles = () => {  
  const logos = [logo0, logo1, logo2, logo3, logo4, logo5, logo6];  

  return (  
    <div className="selles-container">  
      <div className="header">  
        <h2 className="selles-title">  
          <span className="small-black-text">Proud to be part of </span>  
          <span className="bold-text text-bold">Pet Sellers</span>  
        </h2>  
        <button className="text-[#003366] border border-[#003366] rounded-full px-4 py-2 hover:bg-gray-600 font-extrabold button">  
          View all our sellers &gt;  
        </button>  
      </div>  
      <div className="logos-line flex justify-center items-center flex-wrap">  
        {logos.map((logo, index) => (  
          <img key={index} src={logo} alt={`Pet Seller Logo ${index + 1}`} className="logo-image mx-2" />  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Selles;  
