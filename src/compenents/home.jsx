import Navbar from "./navbar";
import styled, { keyframes } from "styled-components";
import { Link } from 'react-router';


function Home() {
  const Animate = keyframes`
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
`;
  const Background = styled.div`
    background-color:hsla(0,100%,50%,1);
    background-image:
      radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%);
    min-height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 200% 200%;
    display: flex;
    flex-direction: column;
    background-position: center;
    animation: ${Animate};
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  `;
  return (
    <Background>
      <Navbar />
      {/* intro */}
      <section id="hero" className="pt-24 md:pt-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 min-h-screen ">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-clashdisplay font-medium max-w-4xl">Hello, Sawasdee ka</h1>
          <h3 className="text-2xl sm:text-3xl md:text-4xl py-4 font-clashdisplay">It's me <span className="text-white">Suchanya Chunlabut</span></h3>
          <p className="text-md sm:text-lg max-w-2xl py-1 font-poppins">I passionate about coding and programming.</p>
          <p className="text-md sm:text-lg max-w-2xl py-1 font-poppins">I enjoy building web applications, and solving challenging problems.</p>
          <div className="flex gap-4 py-8">          
          <Link to="https://github.com/">
          <button type="button" className="hover:bg-zinc-100  font-chillax tracking-wide bg-white px-6 py-2.5 text-md sm:text-lg md:text-xl rounded-xl inline-flex items-center text-center gap-2 cursor-pointer outline outline-offset-0 outline-solid outline-black">Contact me </button>
          </Link>
          <Link to="https://github.com/">
          <button type="button" className="hover:bg-zinc-100 font-chillax tracking-wide bg-white px-6 py-2.5 text-md sm:text-lg md:text-xl rounded-xl inline-flex items-center text-center gap-2 cursor-pointer outline outline-offset-0 outline-solid outline-black">View My Work </button>
          </Link>
          </div>
        </div>
      </section>
      {/* หน้า about */}
      <section id="about" className="pt-24 md:pt-40 px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20 min-h-screen">
        <div className="container mx-auto">          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-clashdisplay font-medium ">About Me</h1>
          <h3 className="text-2xl sm:text-3xl md:text-4xl py-4  font-clashdisplay">It's me <span className="text-white">Suchanya Chunlabut</span></h3>
          <p className="text-md sm:text-lg py-1 font-poppins">I passionate about coding and programming.</p>
          <p className="text-md sm:text-lg py-1 font-poppins">I enjoy building web applications, and solving challenging problems.</p>
          <div className="flex gap-4 py-4">          
          <Link to="https://github.com/">
          <button type="button" className="hover:bg-zinc-100 font-chillax tracking-wide bg-white px-6 py-2.5 text-lg rounded-xl inline-flex items-center text-center gap-2 cursor-pointer outline outline-offset-0 outline-solid outline-black">Contact me </button>
          </Link>
          </div>
        </div>
      </section>


      <section></section>
      <section></section>
      <section></section>
    </Background>
  );
}

export default Home;
