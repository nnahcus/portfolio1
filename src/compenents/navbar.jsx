import { HashLink as Link } from 'react-router-hash-link';
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from 'react';


function Navbar() {
  const NavbarMenu = [
    { id: 1, title: "Home", link: "#" },
    { id: 2, title: "Profile", link: "#about" },
    { id: 3, title: "Project", link:"#Project" },
    { id: 4, title: "Contact", link: "#Contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const NavbarClick = () => {
    console.log("NavbarClick");
      setIsOpen(!isOpen);
  };
  return (
    // navbar
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-xl lg:text-2xl font-clashdisplay ">
      {/* container navbar */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 justify-between flex items-center h-[4rem]">
        {/* หัวข้อ */}
        <Link
          to="#"
          className=" font-switzer tracking-widest font-normal text-3xl" smooth={true} offset={100} duration={500}
        >
          <p>Portfolio</p>
        </Link>
        {/* ลิสต์รายการ */}
        <ul className="hidden md:flex md:z-auto md:static md:gap-2 lg:gap-8 xl:gap-10 md:items-center md:p-3 lg:p-5">
          {NavbarMenu.map((menu) => {
            return (
              <li
                key={menu.id}
                className="p-4 xl:p-6 hover:text-white transition-all "
              >
                <Link smooth={true} offset={-100} duration={500} to={menu.link}>
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* ลิงก์ไปยัง github */}
        <div className="hidden md:flex ">
          <Link to="https://github.com/">
            <button
              type="button"
              className="hover:bg-zinc-100 font-chillax tracking-wide bg-white md:px-5 md:py-2 lg:px-6 lg:py-2.5 text-lg rounded-full inline-flex 
            items-center text-center gap-2 cursor-pointer"
            >
              GITHUB
              <IconContext.Provider value={{ size: "1.2em" }}>
                <FaGithub />
              </IconContext.Provider>
            </button>
          </Link>
        </div>
        {/* ปุ่ม Hamburger */}
  <div className="flex justify-end md:hidden w-[75px]">
 <button onClick={NavbarClick} className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
    <span className={` bg-stone-950 w-6 h-0.5 rounded-sm transition duration-300 ease ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`}></span>
    <span className={` bg-stone-950 w-6 h-0.5 rounded-sm transition duration-300 ease ${isOpen ? "scale-x-0 opacity-0" : "opacity-100"}`}></span>
    <span className={` bg-stone-950 w-6 h-0.5 rounded-sm transition duration-300 ease ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}></span>
  </button>
  </div>
        {/* Mobile Menu */}
          <div className={`absolute top-[4rem] left-0 w-full md:hidden bg-white/10 backdrop-blur-md rounded-3xl text-center py-6 space-y-6 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ?  "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
            {NavbarMenu.map((item) => (
              <Link
                key={item.id}
                smooth
                to={item.link}
                offset={-100} 
                duration={500}
                className="block text-xl hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}

            <Link to="https://github.com/" target="_blank">
              <button
                type="button"
                className="hover:bg-zinc-100 font-chillax tracking-wide bg-white px-6 py-2.5 text-lg rounded-full inline-flex 
            items-center text-center gap-2 cursor-pointer"
              >
                GITHUB
                <IconContext.Provider value={{ size: "1.2em" }}>
                  <FaGithub />
                </IconContext.Provider>
              </button>
            </Link>
          </div>
      </div>
    </nav>
  );
}


export default Navbar;                           