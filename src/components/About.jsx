// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 mt-20 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/about me.jpg"
            alt="About Photographer"
            className="w-full  shadow-lg"
          />
        </div>

        {/* Content */}
        <div className=" py-5 md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <h3 className="text-2xl font-black mb-4">Let’s Capture Your Story</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          With over 15 years of professional photography experience, I understand how important it is to capture every moment perfectly. My expertise lies in creating natural, vibrant, and emotionally rich photographs. I work closely with every client to ensure their story is told just the way they envision it.
          </p>
          <a 
           href="https://wa.me/919876543210"  // Replace with your WhatsApp number
           target="_blank" 
           rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 rounded-full font-semibold  hover:text-black hover:bg-green-400 transition"
          >
              Contact Me
             </a>

        </div>
      </div>
    </section>
  );
};

export default About;
