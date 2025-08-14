import React from "react";
import "../index.css";
import VideoBg from "../assets/construtvid.mp4";

function Landing() {
  return (
    <div className="relative h-screen w-full overflow-hidden shadow-xl">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src={VideoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[-1]" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">QONSTECH CONSTRUCTION CORP.</h1>
      </div>
    </div>
  );
}

export default Landing;
