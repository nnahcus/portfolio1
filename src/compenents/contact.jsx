import { IconContext } from "react-icons";
import Navbar from "./navbar";
import { LuSend } from "react-icons/lu";
import { IoMailOutline, IoCall } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router";


function Contact(){
  return(
    <>
    <section id="Contact" className="min-h-screen flex relative overflow-hidden">
      <div className="mx-auto pt-24 py-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-3/5">
          <h2 className="text-4xl md:text-5xl font-generalsans font-medium  mb-4">Get in Touch</h2>
          <p className="text-lg font-poppins mb-6">
            Don't hesitate to contact me!!. If you have any questions or need anything, I will get back to you within 24 hours :) Just say "hi" it's okay!!</p>
            <div className="">
            <h3 className="text-2xl font-generalsans font-medium mb-4">Contact Information</h3>
            <p className="font-generalsans font-medium mb-2 text-xl">Email:</p>
              <a href="mailto:suchanyachunlabut@gmail.com" className="font-poppins text-sync-900 hover:underline ml-2 mb-4 inline-flex items-center gap-2 text-xl">
                <IconContext.Provider value={{ size: "1.5em" }}><IoMailOutline /></IconContext.Provider>
                suchanyachunlabut@gmail.com
              </a>
            <p className="font-generalsans font-medium mb-2 text-xl">Phone Number:</p>
              <h3 className="font-poppins text-sync-900 hover:underline ml-2 mb-4 inline-flex items-center gap-2 text-xl">
              <IconContext.Provider value={{ size: "1.5em" }}><IoCall /></IconContext.Provider>
                +66 62 734 5024
              </h3>
          <div className="flex gap-4">          
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
          </div>
            </div>
        </div>
        {/* two columns layout contact+email */}
        <div className="w-2/5 justify-between">
        <div className="bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg p-6">
          <form className="flex flex-col gap-2">
            <label htmlFor="Your Name" className="block mb-2 text-lg font-generalsans font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="font-poppins p-4 bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-red3/60 focus:ring-offset-2 focus:ring-offset-red5/50"
            />
            <div className="grid grid-cols-2 gap-4">
            <div> 
            <label htmlFor="Phone" className="block mb-2 text-lg font-generalsans font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="font-poppins w-full p-4 bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-red3/60 focus:ring-offset-2 focus:ring-offset-red5/50"
            />
            </div>
            <div>            
            <label htmlFor="email" className="block mb-2 text-lg font-generalsans font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="font-poppins w-full p-4 bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-red3/60 focus:ring-offset-2 focus:ring-offset-red5/50"
            /></div>
            </div>
            <label htmlFor="Your message" className="block mb-2 text-lg font-generalsans font-medium">Your Message</label>
            <textarea
              placeholder="Your Message"
              className="font-poppins p-4 bg-gray-200/20 backdrop-blur-md rounded-xl bg-clip-padding backdrop-filter  border border-white/30 shadow-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red3/60 focus:ring-offset-2 focus:ring-offset-red5/50"
            ></textarea>
            {/* send message button */}
            <button
              type="submit"
              className="w-full bg-red2 hover:bg-red-400 rounded-md border border-white/30 shadow-lg p-4 mt-2 font-satoshi font-medium tracking-wide px-4 py-2.5 text-xl inline-flex gap-2 items-center justify-center cursor-pointer outline outline-offset-0 outline-solid outline-black"
            >
              <IconContext.Provider value={{ size: "1.2em" }}><LuSend /></IconContext.Provider>
              Send Message
            </button>
          </form>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Contact;