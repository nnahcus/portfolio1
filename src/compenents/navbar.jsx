import { Link } from 'react-router';
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";


function Navbar(){
  return(
    // navbar
    <nav className='bg-translate text-2xl font-clashdisplay font-light'>
      {/* container navbar */}
      <div className="lg:container mx-auto justify-between flex items-center h-[4rem] px-4">
        {/* หัวข้อ */}
        <Link to="/" className=" font-switzer tracking-widest font-normal text-3xl"><p>Portfolio</p></Link>
        {/* ลิสต์รายการ */}
        <ul className="hidden md:flex gap-12 md:items-center p-4.5">
          <li className='p-4  hover:text-white rounded-xl transition-all '><Link to="/">Home</Link></li>
          <li className='p-4  hover:text-white rounded-xl transition-all'><Link to="/about">About</Link></li>
          <li className='p-4  hover:text-white rounded-xl transition-all'><Link to="/blog">Project</Link></li>
          <li className='p-4  hover:text-white rounded-xl transition-all'><Link to="/contact">Contact</Link></li>
        </ul>
        {/* ลิงก์ไปยัง github */}
        <Link to="https://github.com/"><button type="button" className="hover:bg-zinc-100 font-chillax tracking-wide bg-white px-6 py-2.5 text-lg rounded-full inline-flex items-center text-center gap-2 cursor-pointer">GITHUB 
          <IconContext.Provider value={{size: "1.2em" }}><FaGithub /></IconContext.Provider></button></Link>
        </div>
    </nav>
  )
}


export default Navbar;