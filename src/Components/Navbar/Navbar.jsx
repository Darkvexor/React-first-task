import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <h2>MY PORTFOLIO</h2>
    <ul className="nav-menu">
        <li>Home</li>
        <li>About ME</li>
        <li>Services</li>
        <li>Porfolio</li>
        <li>Contact Me</li>
    </ul>
    <div className="connect">Connect With Me</div>
    </div>
  )
}

export default Navbar