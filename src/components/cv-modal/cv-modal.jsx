import React, { useEffect } from "react";
import "./cv-modal.scss";

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClick = (e) => {
    if (e.target === e.currentTarget || e.target.tagName === "IMG") {
      onClose();
    }
  };
  return (
    <div className="modal-outside" onClick={handleClick}>
      <div className="modal">
        <div className="modal-close" onClick={onClose}>
          &times;
        </div>
        <div className="modal-content">
          <img src="./english-cv.png" alt="My CV" className="modal-image" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
