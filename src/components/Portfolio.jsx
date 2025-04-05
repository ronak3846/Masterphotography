// src/components/Portfolio.jsx
import React from "react";

const Portfolio = () => {
  const projects = [
    { id: 1, imgSrc: "/images/work1.jpg", title: "Wedding Photography" },
    { id: 2, imgSrc: "/images/work2.jpg", title: "Fashion Shoot" },
    { id: 3, imgSrc: "/images/work3.jpg", title: "Nature Photography" },
    { id: 4, imgSrc: "/images/work4.jpg", title: "Event Coverage" },
    { id: 5, imgSrc: "/images/work5.jpg", title: "Product Shoot" },
    { id: 6, imgSrc: "/images/work6.jpg", title: "Travel Stories" },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white text-center">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
