// import React from 'react';

// const Gallery = () => {
//   return (
//     <section id="gallery" className="py-16 bg-white">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8 text-gray-800">Gallery</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         <div className="w-full h-64 overflow-hidden">
//           <img src="/images/ph1.JPG" alt="Gallery 1" className="w-full h-full object-cover" />
//           </div>
//           <div className="w-full h-64 overflow-hidden">
//           <img src="/images/ph2.JPG" alt="Gallery 2" className="w-full h-full object-cover" />
//           </div>
//           <div className="w-full h-64 overflow-hidden">
//           <img src="/images/ph3.JPG" alt="Gallery 2" className="w-full h-full object-cover" />
//           </div>
//           <div className="w-full h-64 overflow-hidden">
//           <img src="/images/ph4.JPG" alt="Gallery 2" className="w-full h-full object-cover" />
//           </div>
//           <div className="w-full h-64 overflow-hidden">
//           <img src="/images/ph5.JPG" alt="Gallery 2" className="w-full h-full object-cover" />
//           </div>
//           <div className="w-full h-64 overflow-hidden">
//           <img src="/images/ph6.JPG" alt="Gallery 2" className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;
// src/components/Gallery.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Gallery = () => {
//   const images = [
//     "/images/ph1.JPG",
//     "/images/ph2.JPG",
//     "/images/ph3.JPG",
//     "/images/ph4.JPG",
//     "/images/ph5.JPG",
//     "/images/ph6.JPG",
//   ];

//   return (
//     <section id="gallery" className="py-16 bg-white">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8 text-gray-800">Gallery</h2>

//         {/* Perfect grid layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {images.map((src, index) => (
//             <div 
//               key={index} 
//               className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden"
//             >
//               <img
//                 src={src}
//                 alt={`Gallery ${index + 1}`}
//                 className="object-contain w-full h-full"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Load More Redirect */}
//         <Link
//           to="/full-gallery"
//           className="mt-8 inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
//         >
//           Load More
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const images = [
    "/images/ph1.JPG",
    "/images/ph2.JPG",
    "/images/ph3.JPG",
    "/images/ph4.JPG",
    "/images/ph5.JPG",
    "/images/ph6.JPG",
    "/images/ph7.JPG",
    "/images/ph8.JPG",
    "/images/ph9.JPG",
    "/images/ph10.JPG",
    "/images/ph11.JPG",
    "/images/ph12.JPG",
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Gallery</h2>

        {/* Perfect Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="w-full aspect-video bg-gray-100  overflow-hidden"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Load More Redirect */}
        <Link
          to="/full-gallery"
          className="mt-8 inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          Load More
        </Link>
      </div>
    </section>
  );
};

export default Gallery;




