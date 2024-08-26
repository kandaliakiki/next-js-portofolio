import React from "react";

interface DemoDisplayProps {
  videoUrl: string;
}

const DemoDisplay: React.FC<DemoDisplayProps> = ({ videoUrl }) => {
  return (
    <div className="w-3/4 max-lg:w-full  aspect-video bg-white mx-auto my-5">
      <iframe
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full object-center object-cover"
      ></iframe>
    </div>
  );
};

export default DemoDisplay;
