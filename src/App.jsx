// // // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Testimonials from "./components/Clients";
// import Gallery from "./components/Gallery";
// import GalleryPage from "./components/GalleryPage"; // New component for full gallery
// import Services from "./components/Services";
// import YoutubeSlider from "./components/YoutubeVideo";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import WhatsappFloat from "./components/WhatsappFloat";

// const Home = () => (
//   <>
//     <Hero />
//     <About />
//     <Testimonials />
//     <Gallery />
//     <YoutubeSlider />
//     <Services />
//     <Contact />
//     <Footer />
//     <WhatsappFloat />
//   </>
// );

// const App = () => {
//   return (
//     <Router>
//       <div className="bg-white text-gray-900">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/gallery" element={<GalleryPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Clients";
import Gallery from "./components/Gallery";
import GalleryPage from "./components/GalleryPage"; // Full Gallery Page
import Services from "./components/Services";
import YoutubeSlider from "./components/YoutubeVideo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";
import StatsSection from "./components/StatsSection";


const Home = () => (
  <>
    <Hero />
    <About />
    <Testimonials />
    <StatsSection />
    <Services />
    <Gallery />
    <YoutubeSlider />
    <Contact />
    <Footer />
    <WhatsappFloat />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="bg-white text-gray-900">
        {/* ✅ Navbar is outside Routes so it appears on all pages */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>

        {/* ✅ Footer and WhatsApp Floating Icon also global */}
        
      </div>
    </Router>
  );
};

export default App;

