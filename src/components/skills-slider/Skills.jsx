import React from "react";
import "./Skills.scss";

const Skills = () => {
  const images = [
    "/html.png",
    "/css.png",
    "/javascript.png",
    "/typescript.png",
    "/php.png",
    "/laravel.png",
    "/angular.png",
    "/react.png",
    "/node-express.png",
    "/git.png",
    "/docker.png",
    "/mySql.png",
    "/postgres.png",
    "/sql.png",
    "/mongoDb.png",
    "/jquery.png",
    "/sass.png",
    "/bootstrap.png",
    "/apache.png",
    "/figma.png",
  ];

  return (
    <section className="skills" id="skills">
      <div className="bg">
        <div className="header">
          <div className="top">
            <h2>My Skills</h2>
          </div>
          <div className="bottom">
          <p>
            A visual overview of the technologies I have experience and have used in the past.
          </p>
        </div>
        </div>
        <div className="slider">
          <div className="slideTrack">
            {images.map((img, index) => (
              <img
                className="slide"
                src={img}
                alt={`Slide ${index}`}
                key={index}
              />
            ))}
            {/* Why am I duplicating this? */}
            {images.map((img, index) => (
              <img
                className="slide"
                src={img}
                alt={`Slide ${index}`}
                key={`duplicate-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
