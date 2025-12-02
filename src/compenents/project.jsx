import Navbar from "./navbar";
import { Link } from "react-router";
import { projects } from "./projects";

function Project(){
  return(
    <section id="Project" className="min-h-screen flex relative overflow-hidden">
      <div className="mx-auto pt-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 min-h-screen">
        <h1 className="text-4xl md:text-5xl font-generalsans font-medium text-center mb-4">
          Projects
        </h1>
          <h2 className="text-center text-lg mb-2 font-poppins">Here are some of the projects I've worked on recently.</h2>
          <h2 className="text-center text-lg mb-2 font-poppins text-red-500">Note: Projects are currently being updated.</h2>
          <div className="flex flex-col gap-8 mt-8">
            {/* Project Card */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-6 transition duration-300 hover:bg-white/20 
                 hover:shadow-2xl hover:-translate-y-1 ease-in-out gap-8"
              >
                <div className="md:w-2/5 flex shrink-0 ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full rounded-lg object-cover max-h-64 md:max-h-full"
                  />
                </div>
                <div className="md:w-3/5 md:pl-6 flex flex-col">
                <h3 className="text-2xl font-poppins font-medium mb-4">
                  {project.title}
                </h3>
                <p className="text-md font-poppins mb-6">{project.description}</p>
                <Link to={project.link}>
                  <button type="button" className="bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-4 transition duration-300 hover:bg-white/20 
                 hover:shadow-2xl hover:-translate-y-1 ease-in-out  font-satoshi tracking-wide px-4 py-2.5 text-md inline-flex items-center text-center gap-2 cursor-pointer outline outline-offset-0 outline-solid outline-black">
                    View Project
                  </button>
                </Link>
              </div>
              </div>
            ))
            }
            </div>
      </div>
    </section>
  )
}

export default Project;