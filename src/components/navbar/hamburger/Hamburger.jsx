import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <div className="hamburger-container">
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-bar ${isOpen ? "clicked" : "unclicked"}`}></div>
        <div className={`burger-bar ${isOpen ? "clicked" : "unclicked"}`}></div>
        <div className={`burger-bar ${isOpen ? "clicked" : "unclicked"}`}></div>
      </div>
      <div className={`menu ${isOpen ? "visible" : "hidden"}`}>
        <a href="#" className="menu-item" onClick={toggleMenu}>
          Home
        </a>
        <a href="#about" className="menu-item" onClick={toggleMenu}>
          About
        </a>
        <a href="#projects" className="menu-item" onClick={toggleMenu}>
          Projects
        </a>
      </div>
    </div>
  );
};

export default Hamburger;
