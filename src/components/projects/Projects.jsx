import "./Projects.scss";

const Projects = () => {
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
        <div className="project">
          <div>
            <img src="./project1.png" alt="weather app" />
          </div>
          <div className="project-content">
            <div className="tag">
              <h5>Skifield App</h5>
            </div>
            <div className="title">
              <h3>FullStack Skifield Application</h3>
            </div>
            <div className="description">
              <p>
                A full-stack app with React, Express.js, Sass, TypeScript, and
                MongoDB, offering information on Swedens ski fields, including
                maps, skifield info and pricing
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-content2">
            <div className="tag2">
              <h5>Skifield App</h5>
            </div>
            <div className="title">
              <h3>FullStack Skifield Application</h3>
            </div>
            <div className="description">
              <p>
                A full-stack app with React, Express.js, Sass, TypeScript, and
                MongoDB, offering information on Swedens ski fields, including
                maps, skifield info and pricing
              </p>
            </div>
          </div>
          <div className="img2">
            <img src="./project1.png" alt="weather app" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
