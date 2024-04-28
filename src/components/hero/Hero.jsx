import "./Hero.scss"

const Hero = () => {

    return (
    <div className="hero">
        <div className="hero-left">
            <div className="top-text">
                <h3>Hello, I'm</h3>
                <h1>Arron Reed</h1>
                <h3>FullStack Developer & Web Designer</h3>
            </div>
        </div>
        <div className="hero-image">
            <img src="/hero-me.png" alt="Arron Reed" />
        </div>
    </div>
    )
}

export default Hero