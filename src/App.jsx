import React from 'react'
import Hero from "./components/Hero"
import "./index.css"
import About from './components/About'
import Features from './components/Features'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Hero/>
      <About/>
      <Features/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App