// src/components/Hero.jsx
import React, { useState, useEffect } from "react";

const images = [
  "/images/header1.JPG",
  "/images/header2.JPG",
  "/images/header3.JPG",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative">
      {/* Slider Image */}
      <div className="w-full h-150">
        <img
          src={images[current]}
          alt="Photographer Slider"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Slider Content */}
      {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">I’m a Photographer</h1>
          <p className="text-lg md:text-xl mb-8">
            Capturing moments from today…Creating memories for a lifetime.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition">
            View Portfolio
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
