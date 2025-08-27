import React from "react";
import Geo from "../assets/geo.jpg";
import ConstructionTrans from "../assets/constuction-nobg.png";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      id="about"
      className="flex justify-center items-center w-full py-20 bg-gray-300/50 shadow-xl flex-col"
    >
      {/* Section Title */}
      <motion.div
        className="flex w-full h-[20%] justify-center items-center font-bold text-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="overflow-hidden text-blue-950 text-center">
          VISION MISSION
        </h1>
      </motion.div>

      {/* Content */}
      <div className="flex w-full h-[80%] flex-row">
        {/* Image */}
        <motion.div
          className="flex w-[40%] h-full justify-center items-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            className="w-full h-full object-contain"
            src={ConstructionTrans}
            alt="contsvg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex justify-center items-start w-[60%] h-full flex-col"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="_paragraph_placeholder_1 flex w-[80%] h-[80%] text-xl flex-col">
            <div className="__paragraph_1 flex w-full justify-center items-center flex-col gap-5">
              <motion.p
                className="flex w-[100%] flex-col border-solid border-black rounded-s shadow-xl p-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="w-[60%] text-blue-950 font-semibold border-solid border-b-1 border-blue-950/10 p-2">
                  Vision
                </h4>
                <span className="text-justify">
                  Qonstech Construction Corp., led by Arch. Antonio D.
                  Villanueva Jr., offers project packaging services for both
                  private and government sectors nationwide, handling
                  residential, commercial, recreational, and industrial
                  projects. With 30 years of experience, a strong team, and
                  complete equipment, Qonstech Construction Corp. provides full
                  construction services, including project management and all
                  major engineering works.
                </span>
                <h4 className="w-[60%] text-blue-950 font-semibold border-solid border-b-1 border-blue-950/10 p-2">
                  Mission
                </h4>
                <span className="text-justify">
                  Qonstech Construction Corp., led by Arch. Antonio D.
                  Villanueva Jr., offers project packaging services for both
                  private and government sectors nationwide, handling
                  residential, commercial, recreational, and industrial
                  projects. With 30 years of experience, a strong team, and
                  complete equipment, Qonstech Construction Corp. provides full
                  construction services, including project management and all
                  major engineering works.
                </span>
              </motion.p>

              {/* <p className="flex w-full flex-col border-solid rounded-s shadow-xs p-1">
                <h4 className="text-blue-950 font-semibold border-solid border-b-2 border-b-blue-950">
                  Mission
                </h4>
                <span>
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </span>
              </p> */}
            </div>
            {/* <button>Learn More</button> */}
          </div>
        </motion.div>

        {/* <div className='flex w-[60%] text-xl'>
                    <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
                </div>
                <br></br>
                <div className='flex w-[60%] text-xl'>
                    <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
                </div>
                <br></br>
                <div className='flex w-[60%] text-xl'>
                    <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
                </div> */}
      </div>
    </div>
  );
}
export default About;
