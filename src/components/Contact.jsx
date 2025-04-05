// // src/components/Contact.jsx
// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact" className="py-16 text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Me</h2>
//         <form
//           className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg"
//           action="#"
//           method="POST"
//         >
//           <div className="mb-6">
//             <label className="block text-lg mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-lg mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-lg mb-2">Message</label>
//             <textarea
//               name="message"
//               rows="5"
//               required
//               className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-400 transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14 text-white">Get in Touch</h2>
        <form
          className="max-w-3xl mx-auto bg-gray-800 bg-opacity-70 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-gray-700"
          action="#"
          method="POST"
        >
          <div className="mb-8">
            <label className="block text-lg font-medium mb-3">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 transition"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-8">
            <label className="block text-lg font-medium mb-3">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 transition"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-8">
            <label className="block text-lg font-medium mb-3">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 transition"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl shadow-lg hover:scale-105 hover:from-yellow-300 hover:to-yellow-400 transition transform duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

