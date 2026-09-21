import { useState } from 'react'

import Nav from "./Sections/Nav.jsx";
import OurWork from "./Sections/Flooring.jsx";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <OurWork/>
    </>
  )
}

export default App
