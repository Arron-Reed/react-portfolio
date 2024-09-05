import React, { useEffect } from "react";
import "./cv-modal.scss";

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    /* Do I really need this block of code?
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
*/
  });

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="modal-outside" onClick={handleOutsideClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          <img src="./english-cv.png" alt="My CV" className="modal-image" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
