import React from 'react'
import './style.css'
import Logo from '../images/logo.png'

function Navbar() {
  return (
    <nav className='fixed-top'>
        <a href='/'><img className='logo' src={Logo} alt="Logo"/></a>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#order">Delivery</a></li>
            <li><a href="#about">About</a></li>
            <li><a className='last' href="/">+9718276739</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
