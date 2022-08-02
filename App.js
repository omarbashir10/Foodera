import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Order from './components/Order'
import Services from './components/Services'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>   
    <Order/>
    <About/>
    <Footer/>
    </>
  )
}

export default App