import React, { useRef } from "react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Pardeep Jaswal",
    date: "2025-03-03",
    rating: 5,
    comment: "Incredibly professional team! They made our dream of a royal pre-wedding shoot come true!",
    profilePic: "https://via.placeholder.com/50",
  },
  {
    name: "Raj Patel",
    date: "2025-03-01",
    rating: 5,
    comment: "Amazing experience with Wedding Diaries by OMP. Highly recommended!",
    profilePic: "https://via.placeholder.com/50",
  },
  {
    name: "Diljá Helgadóttir",
    date: "2025-02-18",
    rating: 5,
    comment: "Pre-wedding photoshoot during our holiday, truly unforgettable!",
    profilePic: "https://via.placeholder.com/50",
  },
  {
    name: "Boss MLM Power",
    date: "2025-02-06",
    rating: 5,
    comment: "Good service",
    profilePic: "https://via.placeholder.com/50",
  },
  {
    name: "Purav Patel",
    date: "2025-01-27",
    rating: 5,
    comment: "We had the most amazing experience with Wedding Diaries by OMP.",
    profilePic: "https://via.placeholder.com/50",
  },
  {
    name: "Boss MLM Power",
    date: "2025-02-06",
    rating: 5,
    comment: "Good service",
    profilePic: "https://via.placeholder.com/50",
  },
  {
    name: "Purav Patel",
    date: "2025-01-27",
    rating: 5,
    comment: "We had the most amazing experience with Wedding Diaries by OMP.",
    profilePic: "https://via.placeholder.com/50",
  },
];

const GoogleReviews = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white text-gray-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Google Reviews</h2>

        {/* Slider */}
        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="max-w-[250px] bg-white border rounded-xl p-4 shadow-lg hover:shadow-xl transition duration-300 flex-shrink-0"
              >
                <div className="flex items-center mb-4">
                  <img src={review.profilePic} alt={review.name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                  <CheckCircle size={16} className="ml-2 text-blue-500" />
                </div>
                <p className="text-gray-700 text-sm">{review.comment}</p>
                <div className="mt-4 text-right text-blue-600 cursor-pointer hover:underline text-sm">Read more</div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
