import React from "react";
import { language, frontend, backend, devops } from "./techstacks";

const Techstack = () => {
  return (
    <section
      id="techstack"
      className="min-h-screen flex relative overflow-hidden"
    >
      <div className="mx-auto pt-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 min-h-screen">
        <h1 className="text-4xl md:text-5xl font-generalsans font-medium text-center mb-4">
          My Tech Stack
        </h1>
        <h2 className="text-center text-lg mb-12 font-poppins">
          These are the technologies I work with and enjoy building projects
          with.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Language Section */}
        <div className=" bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-8 mb-4">
          <h1 className="text-2xl md:text-3xl font-generalsans font-medium sm:text-center lg:text-left pb-6">
            Language Programming
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            {language.map((stack, index) => (
              <div
                key={index}
                className="w-28 h-8 px-4 flex justify-center items-center  bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-4 transition duration-300 hover:bg-white/20 
                 hover:shadow-2xl hover:-translate-y-1 ease-in-out "
              >
                <div className="flex justify-center items-center gap-2">
                  <img src={stack.url} alt={stack.name} className="w-5 h-5" />
                  <span className="text-xs  font-generalsans font-medium text-center">
                    {stack.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Library Section */}
        <div className=" bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-8 mb-4">
          <h1 className="text-2xl md:text-3xl font-generalsans font-medium sm:text-center lg:text-left pb-6">
            Libraries and Frameworks
          </h1>
          <div className="flex flex-wrap justify-center gap-4 ">
            {frontend.map((stack, index) => (
              <div
                key={index}
                className="w-28 h-8 px-4 flex justify-center items-center  bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-4 transition duration-300 hover:bg-white/20 
                 hover:shadow-2xl hover:-translate-y-1 ease-in-out"
              >
                <div className="flex justify-center items-center gap-2">
                  <img src={stack.url} alt={stack.name} className="w-5 h-5" />
                  <span className="text-xs  font-generalsans font-medium text-center">
                    {stack.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className=" bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-8 mb-4">
          <h1 className="text-2xl md:text-3xl font-generalsans font-medium sm:text-center lg:text-left pb-6">
            Backend Development
          </h1>
          <div className="flex flex-wrap justify-center gap-4 ">
            {backend.map((stack, index) => (
              <div
                key={index}
                className="w-28 h-8 px-4 flex justify-center items-center  bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-4 transition duration-300 hover:bg-white/20 
                 hover:shadow-2xl hover:-translate-y-1 ease-in-out"
              >
                <div className="flex justify-center items-center gap-2">
                  <img src={stack.url} alt={stack.name} className="w-5 h-5" />
                  <span className="text-xs  font-generalsans font-medium text-center">
                    {stack.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Devops Section */}
        <div className=" bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-8 mb-4">
          <h1 className="text-2xl md:text-3xl font-generalsans font-medium text-left pb-6">
            DevOps and Tools
          </h1>
          <div className="flex flex-wrap justify-center gap-4 ">
            {devops.map((stack, index) => (
              <div
                key={index}
                className="w-28 h-8 px-4 flex justify-center items-center  bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-4 transition duration-300 hover:bg-white/20 
                 hover:shadow-2xl hover:-translate-y-1 ease-in-out"
              >
                <div className="flex justify-center items-center gap-2">
                  <img src={stack.url} alt={stack.name} className="w-5 h-5" />
                  <span className="text-xs  font-generalsans font-medium text-center">
                    {stack.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Techstack;
