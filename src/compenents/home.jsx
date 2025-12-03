import { Link } from 'react-router';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IconContext } from 'react-icons';
import { IoIosPin } from "react-icons/io";
import { TypeAnimation } from 'react-type-animation';
import { IoMailOutline } from "react-icons/io5";
import {HashLink as HashLink} from 'react-router-hash-link';




function Home() {
  return (
      <section id="hero" className="min-h-screen flex relative overflow-hidden">
        <div className="container mx-auto pt-30 md:pt-40 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-generalsans font-medium max-w-4xl">Hello, Sawasdee ka</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl py-2 font-medium font-generalsans flex gap-2"><span>I am</span>
             <TypeAnimation  sequence={['Suchanya Chunlabut',2000, 'Web Developer', 2000, 'IT Student',2000,'Technology Enthusiast',2000]}
            speed={50} repeat={Infinity} className="text-[rgba(248,20,20,1)] font-medium"/></h2>
          <h3 className="text-xl md:text-2xl font-generalsans font-medium py-2 inline-flex">Based in Bangkok, Thailand</h3>
          <p className="text-md sm:text-lg max-w-2xl py-1 font-poppins">I passionate about coding and programming.</p>
          <p className="text-md sm:text-lg max-w-2xl py-1 font-poppins">I enjoy building web applications, and solving challenging problems.</p>
          <div className="flex gap-4 py-8">          
          <Link to="https://linkedin.com/">
          <button type="button" className="bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-6 transition duration-300 hover:bg-white/20 
                 hover:shadow-2xl hover:-translate-y-1 ease-in-out  font-satoshi tracking-wide px-6 py-2.5 text-md sm:text-lg md:text-xl inline-flex items-center text-center gap-2 cursor-pointer outline outline-offset-0 outline-solid outline-black">
            <IconContext.Provider value={{ size: "1.5em" , color: "0077B5"}}><FaLinkedin /></IconContext.Provider>
          </button>
          </Link>
          <Link to="https://github.com/">
          <button type="button" className="bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-6 transition duration-300 hover:bg-white/20 
                 hover:shadow-2xl hover:-translate-y-1 ease-in-out  font-satoshi tracking-wide px-6 py-2.5 text-md sm:text-lg md:text-xl inline-flex items-center text-center gap-2 cursor-pointer outline outline-offset-0 outline-solid outline-black">
            <IconContext.Provider value={{ size: "1.5em" }}><FaGithub /></IconContext.Provider>
          </button>
          </Link>
          <Link to="mailto:suchanyachunlabut@gmail.com">
          <button type="button" className="bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-6 transition duration-300 hover:bg-white/20 
                 hover:shadow-2xl hover:-translate-y-1 ease-in-out  font-satoshi tracking-wide px-6 py-2.5 text-md sm:text-lg md:text-xl inline-flex items-center text-center gap-2 cursor-pointer outline outline-offset-0 outline-solid outline-black">
            <IconContext.Provider value={{ size: "1.5em" }}><IoMailOutline /></IconContext.Provider>
          </button>
          </Link>
          <HashLink smooth={true} offset={-100} duration={500} to="#Project">
          <button type="button" className="bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-6 transition duration-300 hover:bg-white/20 
                 hover:shadow-2xl hover:-translate-y-1 ease-in-out  font-satoshi tracking-wide px-6 py-2.5 text-md sm:text-lg md:text-xl inline-flex items-center text-center gap-2 cursor-pointer outline outline-offset-0 outline-solid outline-black">
                My projects
              </button>
            </HashLink>
          </div>
        </div>
      </section>

  );
}

export default Home;
