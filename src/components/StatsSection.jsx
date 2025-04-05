// import React from 'react';
// import Counter from './CounterComponent';
// import { FaUsers, FaVideo, FaAward, FaCamera } from 'react-icons/fa';

// const StatsSection = () => {
//   return (
//     <div 
//   className="relative bg-cover bg-center py-20" 
//   style={{ backgroundImage: `url('/images/header4.JPG')` }}>
    
//       <div className="flex flex-wrap justify-center gap-20">
//         <Counter target={1200} label="Satisfied Customers" icon={<FaUsers />} />
//         <Counter target={15} label="Award Achieved" icon={<FaAward />} />
//         <Counter target={1800} label="Complete Projects" icon={<FaCamera />} />
//       </div>
      
//     </div>
//   );
// };

// export default StatsSection;

import React from 'react';
import Counter from './CounterComponent';
import { FaUsers, FaAward, FaCamera } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <div className="relative w-full min-h-[400px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/header4.JPG')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-wrap justify-center gap-20 py-20 text-white">
        <Counter target={1200} label="Satisfied Customers" icon={<FaUsers />} />
        <Counter target={15} label="Award Achieved" icon={<FaAward />} />
        <Counter target={1800} label="Complete Projects" icon={<FaCamera />} />
      </div>
    </div>
  );
};

export default StatsSection;


