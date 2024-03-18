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
            Not just a pretty face, but smart, handsome, funny, and I know every magic trick in the book! They call me the magician
          </p>
        </div>
      </div>
      <div className="content">
        <div className="description">
          <p>
            <span>W</span>hen I was little, I dreamt of being a superhero. I wanted to save the day and be strong and brave. I’d run around pretending to fly and imagine having powers. It was the best fun, and I really thought I could be a hero when I grew up. And now I am...Im a Web Developer - your Hero{" "}
          </p>
          <h4>Arron Reed</h4>
          <p>FullStack Developer</p>
          <img src="/signature.png" alt="signature" className="signature" />
        </div>
        <div className="image">
          <img src="/me.png" alt="Arron Reed" />
        </div>
        <div className="skills">
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
