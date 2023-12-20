import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import Header from "./components/Header"
import Contact from "./components/Contact"
import About from "./components/About"
import Projects from "./components/Projects"
import { Index } from "./components/Index"


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
