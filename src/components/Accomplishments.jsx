import React from "react";
import Build1 from "../assets/build1.jpg";
import Build2 from "../assets/build2.jpg";
import Build3 from "../assets/build3.jpg";

function Accomplishments() {
  const projects = [
    { title: "Project 1", image: Build1 },
    { title: "Project 2", image: Build2 },
    { title: "Project 3", image: Build3 },
  ];

  return (
    <section
      id="services"
      className="w-full bg-white h-full pb-70 flex justify-center items-center shadow-xl"
    >
      <div className="w-[90%] md:w-[70%] flex flex-col items-center gap-16">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-blue-950 text-center">
          Projects
        </h1>

        {/* Card Container */}
        <div className="flex flex-col md:flex-row gap-10 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group w-full md:w-1/3 h-[450px] rounded-xl overflow-hidden shadow-md border border-gray-300"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* ✅ Dark overlay only on hover */}
              <div className="absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              {/* Title (above overlay) */}
              <div className="absolute bottom-8 w-full z-20 flex justify-center transition-transform duration-500 group-hover:-translate-y-80">
                <h2 className="text-2xl font-extrabold text-white bg-black/40 px-4 py-2 rounded">
                  {project.title}
                </h2>
              </div>

              {/* Paragraph (above overlay) */}
              <div className="absolute top-1/4 left-[5%] w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 text-white text-center text-lg">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accomplishments;
