import "./Navbar.scss"

const Navbar = () => {

  return (
      <nav>
        <div>
          <a href="#"> <img src="./AR Logo Inline.png" alt="Logo" className="logo"/></a>
          <a href="#"> <img src="./logo-mobile.png" alt="Logo" className="logo-mobile" /></a>
        </div>
        <div className="nav">
          <a href="#" className="a">Home</a>
          <a href="#about" className="a">About</a>
          <a href="#projects" className="a">Projects</a>
        </div>
      </nav>
  )
}

export default Navbar