import Navbar from "./navbar";
import styled, { keyframes } from "styled-components";

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
    height: 100vh;
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
      <h1>Portfolio</h1>
    </Background>
  );
}

export default Home;
