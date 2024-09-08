import React, { useState } from "react";
import "./Projects.scss";
import Lightbox from "../lightbox/Lightbox";
import projectsData from "./projectsData";

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (imgSrc) => {
    setCurrentImage(imgSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <section className="projects" id="projects">
      <div className="header">
        <div className="top">
          <h2>My Latest Projects</h2>
        </div>
        <div className="bottom">
          <p>Heres a list of some of my most recent projects.</p>
        </div>
      </div>
      <div className="project-container">
        {projectsData.map((project, index) => (
          <div
            className={`project ${index % 2 === 0 ? "left" : "right"}`}
            key={project.id}
          >
            <div onClick={() => openLightbox(project.imgSrc)}>
              <img src={project.imgSrc} alt={project.altText} />
            </div>
            <div className="project-content">
              <div className="tag">
                <h5>{project.tag}</h5>
              </div>
              <div className="title">
                <h3>{project.title}</h3>
              </div>
              <div className="description">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <Lightbox
          imgSrc={currentImage}
          altText="Project Image"
          onClose={closeLightbox}
        />
      )}
    </section>
  );
};

export default Projects;
