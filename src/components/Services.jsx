// // src/components/Services.jsx
// import React from "react";
// import { Camera, Image, Video } from "lucide-react";

// const Services = () => {
//   return (
//     <section id="services" className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Service 1 */}
//           <div className="bg-gray-100 p-8 rounded-2xl shadow-md text-center hover:bg-yellow-400 transition">
//             <Camera className="mx-auto text-black w-16 h-16 mb-6 " />
//             <h3 className="text-2xl font-semibold mb-4"> Wedding Photography</h3>
//             <p className="text-gray-700">
//               Capturing stunning moments with professional photography.
//             </p>
//           </div>

//           {/* Service 2 */}
//           <div className="bg-gray-100 p-8 rounded-2xl shadow-md text-center hover:bg-yellow-400 transition">
//             <Video className="mx-auto text-black w-16 h-16 mb-6" />
//             <h3 className="text-2xl font-semibold mb-4">Videography</h3>
//             <p className="text-gray-700">
//               Creating cinematic videos that tell your story beautifully.
//             </p>
//           </div>

//           {/* Service 3 */}
//           <div className="bg-gray-100 p-8 rounded-2xl shadow-md text-center hover:bg-yellow-400 transition">
//             <Image className="mx-auto text-black w-16 h-16 mb-6" />
//             <h3 className="text-2xl font-semibold mb-4">Event Photography</h3>
//             <p className="text-gray-700">
//               Professional editing to make every photo perfect and memorable.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from "react";
import { Camera, Image, Video } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        

        <div className="grid md:grid-cols-3 gap-8">
          {/* Wedding Photography */}
          <div className="bg-gray-100 p-8  shadow-md text-center hover:bg-yellow-400 transition duration-300">
            <Camera className="mx-auto text-black w-16 h-16 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Wedding Photography</h3>
            <p className="text-gray-700">
              Timeless wedding photography capturing your special day with creativity, emotions, and attention to detail.
            </p>
          </div>

          {/* Cinematic Videography */}
          <div className="bg-gray-100 p-8  shadow-md text-center hover:bg-yellow-400 transition duration-300">
            <Video className="mx-auto text-black w-16 h-16 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Cinematic Videography</h3>
            <p className="text-gray-700">
              Beautiful cinematic videos and highlights that narrate your love story and event moments perfectly.
            </p>
          </div>

          {/* Event Photography */}
          <div className="bg-gray-100 p-8  shadow-md text-center hover:bg-yellow-400 transition duration-300">
            <Image className="mx-auto text-black w-16 h-16 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Event Photography</h3>
            <p className="text-gray-700">
              Covering birthdays, engagements, corporate events, and family gatherings with creative storytelling.
            </p>
          </div>

          {/* Pre-Wedding Shoots */}
          <div className="bg-gray-100 p-8  shadow-md text-center hover:bg-yellow-400 transition duration-300">
            <Camera className="mx-auto text-black w-16 h-16 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Pre-Wedding Photoshoots</h3>
            <p className="text-gray-700">
              Dreamy pre-wedding photoshoots at beautiful locations to celebrate your journey before the big day.
            </p>
          </div>

          {/* Couple & Portrait Shoots */}
          <div className="bg-gray-100 p-8  shadow-md text-center hover:bg-yellow-400 transition duration-300">
            <Image className="mx-auto text-black w-16 h-16 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Couple & Portrait Photography</h3>
            <p className="text-gray-700">
              Stunning couple shoots and individual portraits that reflect your personality and emotions.
            </p>
          </div>

          {/* Customized Photography Packages */}
          <div className="bg-gray-100 p-8  shadow-md text-center hover:bg-yellow-400 transition duration-300">
            <Video className="mx-auto text-black w-16 h-16 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Customized Packages</h3>
            <p className="text-gray-700">
              Tailored photography and videography packages designed to meet your unique event and budget requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
