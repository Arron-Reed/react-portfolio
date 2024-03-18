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
            Quisest ut pellentesque ut laoreet. Fermentum sapien posuere sedding
            beturd grimorbi urbna nonnyro
          </p>
        </div>
      </div>
      <div className="content">
        <div className="description">
          <p>
            <span>M</span>ignissim adipiscing pretium libero at tristique. Diam
            sitting mauris a interdum. In tristique eubturg vestibulum id amet
            malesuada. Quis morbi morbi sed volutpat tristique. Lacinia praesent
            dictum morbi et fermentum. Blandit cras ut sed quisque pellentesque
            iaculis elit. Lectus adipiscing semper odio lacus urna. Sit a sit ac
            blandit. Cursus donec mollis elit arcu donec aliquam.{" "}
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
        </div>
      </div>
    </section>
  );
};
export default About;
