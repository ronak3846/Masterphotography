// src/components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Verma",
      review:
        "The photoshoot experience was amazing. Loved the creativity and professionalism.",
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      review:
        "Captured every moment so beautifully! Highly recommended for any occasion.",
    },
    {
      id: 3,
      name: "Aman Sharma",
      review:
        "Truly a talented photographer. Made me feel super comfortable throughout.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
              <h3 className="text-xl font-semibold text-right">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
