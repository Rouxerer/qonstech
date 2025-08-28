import React from "react";
import "../index.css";
import VideoBg from "../assets/construtvid.mp4";
import { motion } from "framer-motion";

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

      {/* Dark Overlay with fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-full h-full bg-black z-[-1]"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="text-4xl md:text-6xl font-bold tracking-wide text-center"
        >
          QONSTECH CONSTRUCTION CORP. <br />
          <p>
            <i className="text-lg">“Stronger. Smarter. Safer.”</i>
          </p>
        </motion.h1>
      </div>
    </div>
  );
}

export default Landing;
