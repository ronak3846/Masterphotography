import React from "react";

const YoutubeSlider = () => {
  const videos = [
    "fi4G3-SMpBo", // Replace with your YouTube video IDs
    "3JZ_D3ELwOQ",
    "LXb3EKWsInQ",
  ];

  return (
    <section id="video" className="bg-black py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl text-white font-bold mb-8 text-center">Watch My Work</h2>

        {/* Video Slider */}
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {videos.map((videoId, index) => (
            <div key={index} className="min-w-[300px] w-[300px] h-[180px] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeSlider;
