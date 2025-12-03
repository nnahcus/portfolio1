import { Link } from 'react-router';
import { IconContext } from 'react-icons';
import { Aboutme } from './info';
import { FiDownload } from "react-icons/fi";

function About(){
  return(
      <section id="about" className="min-h-screen flex relative overflow-hidden">
        <div className='mx-auto pt-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 min-h-screen'>
            <h1 className="text-4xl md:text-5xl font-generalsans font-medium text-center ">Who am I?</h1>          
        <div className="flex flex-wrap flex-row mt-12 ">          
        <div className="w-full lg:w-1/2 flex items-center justify-center">
        <h1>test</h1>
        </div>
        <div className="w-full lg:w-1/2">          
          <p className="text-md sm:text-lg py-1 font-poppins"> {Aboutme}</p>
          <div className="flex py-8">          
          <Link to="https://github.com/">
          <button type="button" className="bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-6 transition duration-300 hover:bg-white/20 
                 hover:shadow-2xl hover:-translate-y-1 ease-in-out  font-satoshi tracking-wide px-6 py-2.5 text-md sm:text-lg md:text-xl inline-flex items-center text-center gap-2 cursor-pointer outline outline-offset-0 outline-solid outline-black">
            <IconContext.Provider value={{ size: "1.2em"}}><FiDownload /></IconContext.Provider>
            Download Resume</button>
          </Link>
          </div>
        </div>
        </div>
        </div>
      </section>
  )
}

export default About;