import React, { useState } from "react";
import "./Navbar.scss";
import Hamburger from "./hamburger/Hamburger";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo-container">
        <a href="#">
          <img src="./logo.png" alt="Logo" className="logo" />
        </a>
        <a href="#">
          <img src="./logo-mobile.png" alt="Mobile Logo" className="logo-mobile" />
        </a>
      </div>
      <div className={`nav ${isMenuOpen ? "mobile-open" : ""}`}>
        <a href="#" className="a">
          Home
        </a>
        <a href="#about" className="a">
          About
        </a>
        <a href="#projects" className="a">
          Projects
        </a>
      </div>
      <div className="hamburger-menu">
        <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
