import React, { useState } from 'react';

const GalleryPage = () => {
  const allImages = [
    '/images/ph1.JPG',
    '/images/ph2.JPG',
    '/images/ph3.JPG',
    '/images/ph4.JPG',
    '/images/ph5.JPG',
    '/images/ph6.JPG',
    '/images/ph7.JPG',
    '/images/ph8.JPG',
    '/images/ph10.JPG',
    '/images/ph11.JPG',
    '/images/ph12.JPG',
    '/images/ph13.JPG',
    '/images/ph14.JPG',
    '/images/ph15.JPG',
    '/images/ph16.JPG',
    '/images/ph17.JPG',
    '/images/ph18.JPG',
    '/images/ph19.JPG',
    '/images/ph20.JPG',
  ];

  const [visibleImages, setVisibleImages] = useState(6);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 6);
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Full Gallery</h2>

        {/* Masonry/Pinterest Style Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {allImages.slice(0, visibleImages).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index}`}
              className="w-full  hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < allImages.length && (
          <button
            onClick={loadMore}
            className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition"
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default GalleryPage;
