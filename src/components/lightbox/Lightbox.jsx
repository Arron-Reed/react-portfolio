import React from "react";
import "./lightbox.scss";

const Lightbox = ({ imgSrc, altText, onClose }) => {
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content">
        <button className="close-button">x</button>
        <img src={imgSrc} alt={altText} />
      </div>
    </div>
  );
};

export default Lightbox;
