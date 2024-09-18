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
          <div className="project-box">
            <div className="tag">
              <h5>{project.title}</h5>
            </div>
            <div
              className={`project ${index % 2 === 0 ? "left" : "right"}`}
              key={project.id}
            >
              <div
                className="image-container"
                onClick={() => openLightbox(project.imgSrc)}
              >
                <img
                  src={project.imgSrc}
                  alt={project.altText}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <div className="tech-icons">
                  {project.technologies.map((technologies, idx) => (
                    <img
                      key={idx}
                      src={technologies.icon}
                      alt={technologies.name}
                      className="tech-icon"
                    />
                  ))}
                </div>
                <div className="description">
                  <p>{project.description}</p>
                </div>
                <div className="button-box">
                  {project.github && (
                    <button
                      className="github"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <i id="github" className="fa-brands fa-github"></i>
                      Github
                    </button>
                  )}
                  {project.website && (
                    <button
                      className="website"
                      onClick={() => window.open(project.website, "_blank")}
                    >
                      <i className="fa-solid fa-globe"></i>
                      Website
                    </button>
                  )}
                </div>
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
