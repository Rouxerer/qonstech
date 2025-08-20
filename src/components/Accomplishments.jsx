import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { motion } from "framer-motion";
import Build1 from "../assets/build1.jpg";
import Build2 from "../assets/build2.jpg";
import Build3 from "../assets/build3.jpg";

function Accomplishments() {
  const sliderRef = useRef(null);

  const projects = [
    {
      title: "Solar Panels Installed in Koronadal City",
      description: "Solar panels installed in the crown city of the south",
      image: Build1,
    },
    {
      title: "Commercial Building Project in Gensan",
      description: "High-rise construction project in General Santos City",
      image: Build2,
    },
    {
      title: "Eco-Friendly Resort in Lake Sebu",
      description: "Sustainable design with renewable energy integration",
      image: Build3,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      id="services"
      className="w-full bg-white py-20 flex justify-center items-center shadow-xl overflow-hidden"
    >
      <div className="w-[90%] md:w-[90%] flex flex-col items-center gap-16">
        {/* Section Title */}
        <motion.h1
          className="text-4xl font-bold text-[#58c802] text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>

        {/* First Row */}
        <motion.div
          className="flex w-full h-120 rounded-2xl justify-center items-center gap-[1px]"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex w-[25%] h-[80%]"
            >
              <div className="relative">
                <SpotlightCard
                  className="relative z-10 bg-[#3c67b2] rounded-xl flex flex-col gap-1.5 p-3 overflow-visible h-[85%]"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <h6 className="text-[12px] text-white">{project.title}</h6>
                  <p className="text-white text-xs">{project.description}</p>
                </SpotlightCard>

                {/* Floating image on top */}
                <div
                  className="absolute bottom-[30px] left-10 w-[80%] h-[200px]
                  rounded-2xl transform skew-y-4 grayscale shadow-xl
                  transition-all duration-500 ease-out
                  hover:skew-y-[-4deg] hover:grayscale-0 hover:scale-110
                  cursor-pointer z-50"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Accomplishments;
