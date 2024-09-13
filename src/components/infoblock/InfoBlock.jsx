import React, { useState, useEffect } from "react";
import Modal from "../cv-modal/cv-modal";
import "./InfoBlock.scss";

const InfoBlock = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="infoBlock">
      <div className="infoBlock-top">
        <img src="ARlogo-column.png" alt="Arron Reed" />
      </div>
      <div className="infoBlock-text">
        <p>
          Hi, Im Arron Reed, a passionate FullStack developer and Web Designer
          living in Stockholm. Welcome to my portfolio. Hi, Im Arron Reed, a
          passionate FullStack developer and Web Designer living in Stockholm.
          Welcome to my portfolio. Hi, Im Arron Reed, a passionate FullStack
          developer and Web Designer living in Stockholm. Welcome to my
          portfolio.
        </p>
      </div>
      <button onClick={openModal}>See my CV</button>

      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default InfoBlock;
