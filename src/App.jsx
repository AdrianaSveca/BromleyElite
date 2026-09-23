import { useState } from 'react'

import Nav from "./Sections/Nav.jsx";
import './App.css'
import Hero from './components/Hero.jsx'
import AboutUs from './components/AboutUs.jsx'

function App() {
  return (
    <>
      <Nav/>
      <Hero />
      <AboutUs/>
    </>
  )
}

export default App