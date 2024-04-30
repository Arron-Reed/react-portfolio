import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="top-text">
          <h3>Hello, I'm a</h3>
          <h2>FullStack Developer</h2>
          <p>
            Hi, Im Arron Reed, a passionate FullStack developer and Web Designer
            based in Stockholm. Welcome to my portfolio
          </p>
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
      <div className="hero-image">
        <img src="/hero-me2.png" alt="Arron Reed" />
      </div>
    </div>
  );
};

export default Hero;
