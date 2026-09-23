import { useState } from 'react'

import Nav from "./Sections/Nav.jsx";
import './App.css'
import Hero from './components/Hero.jsx'
import AboutUs from './components/AboutUs.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx';

function App() {
  return (
    <>
      <Nav/>
      <Hero />
      <AboutUs/>
      <WhyChooseUs/>
    </>
  )
}

export default App