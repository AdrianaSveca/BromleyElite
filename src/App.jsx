import { useState } from 'react'

import './App.css'

import Nav from "./components/Nav.jsx";
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