import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { motion } from "framer-motion";

function Accomplishments() {
  const sliderRef = useRef(null);

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
          className="text-4xl font-bold text-blue-950 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>

        {/* First Row */}
        <motion.div
          className="flex w-full h-120 bg-gray-200/50 rounded-2xl justify-center items-center gap-20"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {[1, 2, 3].map((num, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex w-[25%] h-[80%]"
            >
              <SpotlightCard
                className="custom-spotlight-card flex w-full h-full bg-amber-700 rounded-xl flex-col"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <h5 className="pl-2 text-sm text-white">
                  Solar Panels Installed in Koronadal City
                </h5>
                <p className="pl-3 text-white text-sm">
                  Solar panels installed in the crown city of the south
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div
          className="flex w-full h-120 bg-gray-200/50 rounded-2xl justify-center items-center gap-20"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {[1, 2, 3].map((num, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex w-[25%] h-[80%]"
            >
              <SpotlightCard
                className="custom-spotlight-card flex w-full h-full bg-amber-700 rounded-xl flex-col"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <h5 className="pl-2 text-sm text-white">
                  Solar Panels Installed in Koronadal City
                </h5>
                <p className="pl-3 text-white text-sm">
                  Solar panels installed in the crown city of the south
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Accomplishments;
