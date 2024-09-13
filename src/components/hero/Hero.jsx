import React, { useState, useEffect } from "react";
import "./Hero.scss";

const Hero = () => {
  const jobTitles = [
    "FullStack Developer",
    "Web Designer",
    "FrontEnd Developer",
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === jobTitles[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === jobTitles[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="top-text">
            <h3>Hi, I'm</h3>
            <h1>Arron Reed</h1>
          </div>
          <div className="top-text">
            <h2>{`${jobTitles[index].substring(0, subIndex)}`}</h2>
          </div>
          <div className="hero-icons">
            <div className="icon-circle">
              <i id="icons" className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="icon-circle">
              <i id="icons" className="fa-brands fa-github"></i>
            </div>
            <div className="icon-circle">
              <i id="icons" className="fa-brands fa-instagram"></i>
            </div>
            <div className="icon-circle">
              <i id="icons" className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image"></div>
    </div>
  );
};

export default Hero;
