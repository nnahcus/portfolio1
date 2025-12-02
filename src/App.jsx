import { useState } from 'react'
import './App.css'
import Navbar from './compenents/navbar'
import Home from './compenents/home'
import About from './compenents/about'
import Techstack from './compenents/techstack'
import Project from './compenents/project'
import styled from '@emotion/styled'
import Contact from './compenents/contact'
import Footer from './compenents/footer'

const Background = styled.div`
background-color:hsla(0,0%,100%,1);
background-image:
linear-gradient(to right, #80808012 1px, transparent 2px),
linear-gradient(to bottom, #80808012 1px, transparent 2px),
radial-gradient(at 100% 100%, hsla(350,75%,57%,1) 0px, transparent 50%),
radial-gradient(at 100% 17%, hsla(350,90%,74%,1) 0px, transparent 50%),
radial-gradient(at 6% 0%, hsla(359,100%,79%,1) 0px, transparent 50%);
background-size: 40px 40px, 40px 40px, 100% 100%, 100% 100%, 100% 100%;
`;

function App() {

  return (
    <Background>
      <Navbar />
      <main>
        <Home />
        <About />
        <Techstack/>
        <Project />
        <Contact />
        <Footer />
      </main>
    </Background>
  )
}

export default App
