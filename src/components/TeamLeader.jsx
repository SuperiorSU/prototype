"use client"
import React from 'react';
import { useState } from 'react';

const TeamLeader = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [marginLeft, setMarginLeft] = useState(0);

  const menuToggle = () => {
    setMenuActive(!menuActive);
  };

  const slideLeft = () => {
    setMarginLeft(prev => prev + 264);
  };

  const slideRight = () => {
    setMarginLeft(prev => prev - 264);
  };

  return (
    <div className="hero bg-cover bg-bottom relative min-h-screen overflow-x-hidden" style={{ backgroundImage: 'url(/images/02.jpg)' }}>
      <nav className="flex justify-between items-center absolute top-0 left-0 w-full px-6 z-10 bg-opacity-25">
        <div className="logo text-xl font-semibold text-white">
          go<span className="text-yellow-500">TRAVEL</span>
        </div>
        <ul className={`nav flex ${menuActive ? 'flex-col items-center justify-center opacity-100 top-0 right-0' : 'opacity-0 -top-full right-full'} fixed bg-yellow-600 w-full h-screen transition duration-500 ease-in-out`}>
          <li>Home</li>
          <li>Places</li>
          <li>Visitors</li>
          <li>Travel</li>
          <li>Hotels</li>
          <li>Bookings</li>
        </ul>
        <div className="toggler cursor-pointer" onClick={menuToggle}>
          <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'} text-white text-2xl`}></i>
        </div>
      </nav>

      <div className="intro flex flex-wrap justify-center items-end z-20 relative">
        <div className="hero-content w-2/5 p-36 text-white">
          <div className="line w-12 h-1 bg-white mb-8"></div>
          <h4 className="text-3xl mb-6">Destination Shire</h4>
          <h1 className="text-6xl mb-4">Valley<br />of Dreams</h1>
          <p>Welcome to the heart of Europe. Experience nature the way mother nature intended.</p>
          <i className="fas fa-plane bg-orange text-white rounded-full p-4 transform rotate-45 inline-block mt-16 mr-8"></i>
          <a href="" className="btn inline-block mt-10 px-8 py-4 bg-yellow-600 text-white font-semibold rounded-full">Book your destination</a>
        </div>

        <div className="carousel-control-div w-3/5 relative">
          <div className="carousel-controls absolute bottom-0 left-16">
            <i className="fas fa-chevron-left left text-white text-4xl bg-yellow-600 p-5 rounded-full cursor-pointer" onClick={slideLeft}></i>
            <i className="fas fa-chevron-right right text-white text-4xl bg-yellow-600 p-5 rounded-full cursor-pointer ml-4" onClick={slideRight}></i>
          </div>

          <div className="carousel-indicator absolute bottom-0 right-0">
            <p><span>00</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLeader;
