import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <h2>MY PORTFOLIO</h2>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact Me</li>
      </ul>

      {/* <div className="connect">Connect With Me</div> */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>
    </div>
  );
}

export default Navbar;
