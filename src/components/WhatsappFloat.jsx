import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloat = () => {
  return (
    <a
      href="https://wa.me/919887165654" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
    >
      <FaWhatsapp size={28} className="text-white" />
    </a>
  );
};

export default WhatsappFloat;
