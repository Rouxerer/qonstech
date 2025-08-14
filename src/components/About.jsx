import React from "react";
import Geo from "../assets/geo.jpg";
import ConstructionTrans from "../assets/constuction-nobg.png";

function About() {
  return (
    <div
      id="about"
      className="flex justify-center items-center w-full py-20 bg-white shadow-xl flex-col"
    >
      <div className="flex w-full h-[20%] justify-center items-center font-bold text-4xl">
        <h1 className="overflow-hidden text-blue-950">About Us</h1>
      </div>
      <div className="flex w-full h-[80%] flex-row">
        <div className="flex w-[40%] h-full justify-center items-center">
          <img
            className="w-full h-full object-contain"
            src={ConstructionTrans}
            alt="contsvg"
          />
        </div>
        <div className="flex justify-center items-start w-[60%] h-full flex-col">
          <div className="_paragraph_placeholder_1 flex w-[80%] h-[80%] text-xl flex-col">
            <div className="__paragraph_1 flex w-full justify-center items-center flex-col gap-5">
              <p className="flex w-[100%] flex-col border-solid border-black rounded-s shadow-xl p-10">
                <h4 className="w-[60%] text-blue-950 font-semibold border-solid border-b-1 border-blue-950/10 p-2">
                  Company Overview
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
              </p>
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
        </div>
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
