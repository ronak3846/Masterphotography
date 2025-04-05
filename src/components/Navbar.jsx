 import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const activeClass = "relative after:absolute after:left-0 after:bottom-[-15px] after:w-full after:h-[2px] after:bg-white after:rounded-full";


  return (
    


    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-lg ">
  <div className="max-w-[1500px] mx-auto flex items-center justify-between py-1 px-5">
    {/* Logo Section */}
    <div className="flex-shrink-0">
      <img src="/images/mcplg2.png" alt="Logo" className="max-w-[150px] " />
    </div>

    {/* Contact Info */}
    <div className="hidden md:block">
      <a
        href="tel:+919876543210"
        className="text-white text-lg font-semibold hover:text-yellow-400 transition duration-300"
      >
        +91 98765 43210
      </a>
    </div>

    {/* Navigation Links */}
    <ul className={`md:flex md:gap-8 absolute md:static bg-black md:bg-transparent top-16 md:top-0 right-0 w-full md:w-auto text-right md:text-left transition-all duration-300 ${menuOpen ? "block" : "hidden md:flex"}`}>
      <li>
        <RouterLink to="/" className={`text-white hover:text-yellow-400 transition-colors duration-300 ${location.pathname === "/" ? activeClass : ""}`} onClick={() => setMenuOpen(false)}>
          Home
        </RouterLink>
      </li>
      {isHome ? (
        <>
          <li>
            <ScrollLink to="about" smooth duration={500} spy={true} className="cursor-pointer text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="services" smooth duration={500} spy={true} className="cursor-pointer text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth duration={500} spy={true} className="cursor-pointer text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>
              Contact
            </ScrollLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <RouterLink to="/" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>
              Services
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>
              Contact
            </RouterLink>
          </li>
        </>
      )}
      <li>
        <RouterLink to="/gallery" className={`text-white hover:text-yellow-400 ${location.pathname === "/gallery" ? activeClass : ""}`} onClick={() => setMenuOpen(false)}>
          Gallery
        </RouterLink>
      </li>
    </ul>

    {/* Hamburger Icon for Mobile */}
    <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
      ☰
    </div>
  </div>
</nav>

  );
};

export default Navbar;
// import React, { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import { Link as RouterLink, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const isHome = location.pathname === "/";

//   const activeClass =
//     "relative after:absolute after:left-0 after:bottom-[-15px] after:w-full after:h-[2px] after:bg-white after:rounded-full";

//   return (
//     <nav className="bg-black fixed w-full z-20 top-0 left-0">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         {/* Logo Section */}
//         <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
//             Flowbite
//           </span>
//         </a>

//         {/* Mobile Menu Button */}
//         <button
//           data-collapse-toggle="navbar-sticky"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-sticky"
//           aria-expanded={menuOpen ? "true" : "false"}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>

//         {/* Navigation Links */}
//         <div
//           className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${
//             menuOpen ? "block" : "hidden"
//           }`}
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <RouterLink
//                 to="/"
//                 className={`block py-2 px-3 text-white bg-black rounded-sm md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 ${
//                   location.pathname === "/" ? activeClass : ""
//                 }`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Home
//               </RouterLink>
//             </li>
//             {isHome ? (
//               <>
//                 <li>
//                   <ScrollLink
//                     to="about"
//                     smooth
//                     duration={500}
//                     spy={true}
//                     className="cursor-pointer text-white hover:text-yellow-400"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     About
//                   </ScrollLink>
//                 </li>
//                 <li>
//                   <ScrollLink
//                     to="services"
//                     smooth
//                     duration={500}
//                     spy={true}
//                     className="cursor-pointer text-white hover:text-yellow-400"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     Services
//                   </ScrollLink>
//                 </li>
//                 <li>
//                   <ScrollLink
//                     to="contact"
//                     smooth
//                     duration={500}
//                     spy={true}
//                     className="cursor-pointer text-white hover:text-yellow-400"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     Contact
//                   </ScrollLink>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <RouterLink
//                     to="/"
//                     className="text-white hover:text-yellow-400"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     About
//                   </RouterLink>
//                 </li>
//                 <li>
//                   <RouterLink
//                     to="/"
//                     className="text-white hover:text-yellow-400"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     Services
//                   </RouterLink>
//                 </li>
//                 <li>
//                   <RouterLink
//                     to="/"
//                     className="text-white hover:text-yellow-400"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     Contact
//                   </RouterLink>
//                 </li>
//               </>
//             )}
//             <li>
//               <RouterLink
//                 to="/gallery"
//                 className={`text-white hover:text-yellow-400 ${
//                   location.pathname === "/gallery" ? activeClass : ""
//                 }`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Gallery
//               </RouterLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
