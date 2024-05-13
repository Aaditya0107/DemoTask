import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/SidebarComponents/Home'
import About from './components/SidebarComponents/AboutUs'
import Contact from './components/SidebarComponents/ContactUs'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;