import React, { useEffect } from "react";
import "./lightbox.scss";

const Lightbox = ({ imgSrc, altText, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <img src={imgSrc} alt={altText} />
      </div>
    </div>
  );
};

export default Lightbox;
