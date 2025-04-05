import React, { useEffect, useState } from 'react';

const Counter = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const duration = 2000; // 2 seconds
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className=" bg-opacity-50 text-white p-8 rounded-lg shadow-lg text-center w-64 flex flex-col items-center justify-center hover:scale-105 ">
      <div className="text-7xl mb-4 text-cyan-400">{icon}</div>
      <h2 className="text-4xl font-bold">{count}+</h2>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  );
};

export default Counter;
