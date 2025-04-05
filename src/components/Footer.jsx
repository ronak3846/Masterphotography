// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Details */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <p><span className="font-semibold">Email:</span> ajayvaishnavudr@gmail.com</p>
          <p><span className="font-semibold">Address:</span> Shobhagpura Circle, Udaipur, Rajasthan, India </p>
          <p><span className="font-semibold">Phone:</span> +91 9887165654 | +91 6350669652</p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/master_click08?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaInstagram size={24} className="text-white  hover:text-yellow-400"/>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaYoutube size={24} className="text-white  hover:text-yellow-400"/>
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div>
          <h2 className="text-xl font-bold mb-4">Our Location</h2>
          <div className="w-full h-64">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160989087!2d72.74110185743595!3d19.082197839256896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b3fae7249%3A0x4e168a9361e3a856!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711027493799!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © 2025 MasterCLick Photography. All Rights Reserved | Designed with RV Developer
      </div>
    </footer>
  );
};

export default Footer;

