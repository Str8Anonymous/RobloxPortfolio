import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/Hero"
import About from './components/About'
import Skills from './components/Skills'
function App() {

  return (
    <>
    <Hero />
    <About />
    <Skills />
    
    </>
  )
}

export default App
