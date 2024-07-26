import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="header">
        <div className="top">
          <h2>Why Hire Me?</h2>
        </div>
        <div className="bottom">
          <p>
            Not just a pretty face, but smart, handsome, funny, and I know every
            magic trick in the book! They call me the magician
          </p>
        </div>
      </div>
      <div className="content">
        <div className="description">
          <p>
            <span>D</span>edicated and passionate is how people describe me,
            seeking to launch a successful career in web development. With a strong
            foundation in coding and a keen eye for design, I am eager to join a
            secure and forward-thinking company where I can further develop my
            skills. My mission is to ultimately become a senior
            member of your staff and to make a difference, driving impactful digital
            solutions and contributing to the teams success.
          </p>
          <h4>Arron Reed</h4>
          <p>FullStack Developer</p>
          <img src="/signature.png" alt="signature" className="signature" />
        </div>
        <div className="image">
          <img src="/me.png" alt="Arron Reed" />
        </div>
        <div className="talents">
          <div className="box">
            <div className="circle">
              <div className="icon">
                <img src="/1.svg" alt="Web Design" className="webIcon" />
              </div>
            </div>
            <div className="box-content">
              <div className="title">
                <h4>Web Design</h4>
              </div>
              <div className="desc">
                <p>I have complete 125+ websites design for my clients</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="circle">
              <div className="icon">
                <img src="/1.svg" alt="Web Design" className="webIcon" />
              </div>
            </div>
            <div className="box-content">
              <div className="title">
                <h4>Web Design</h4>
              </div>
              <div className="desc">
                <p>I have complete 125+ websites design for my clients</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="circle">
              <div className="icon">
                <img src="/1.svg" alt="Web Design" className="webIcon" />
              </div>
            </div>
            <div className="box-content">
              <div className="title">
                <h4>Web Design</h4>
              </div>
              <div className="desc">
                <p>I have complete 125+ websites design for my clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
