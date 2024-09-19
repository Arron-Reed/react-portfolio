import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="header">
        <div className="top">
          <h2>Why Hire Me?</h2>
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
                <h4>Communication</h4>
              </div>
              <div className="desc">
                <p>I excel at clearly sharing ideas, ensuring everyone is on the same page and projects run smoothly</p>
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
                <h4>Problem Solving</h4>
              </div>
              <div className="desc">
                <p>I approach challenges with critical thinking, finding efficient solutions that enhance development</p>
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
                <h4>Collaboration</h4>
              </div>
              <div className="desc">
                <p>I thirive in team settings, working effectively with other to achieve shared goals and deliver results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
