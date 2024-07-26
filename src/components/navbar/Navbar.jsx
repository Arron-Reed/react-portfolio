import "./Navbar.scss"

const Navbar = () => {

  return (
    <div>
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
      
      <div className="mobile-nav">
        <div className="mobile-pages">
          <ul>
            <div className="logged">
            <li><a href="#" aria-label="home"><i className="fa-solid fa-house"></i><h3>Home</h3></a></li>
            <li><a href="#" aria-label="ski-fields"><i className="fa-solid fa-person-skiing" title="Skifields"></i><h3>Skifields</h3></a></li>
            </div>
            <li><a href="#" aria-label="logo"><img src="./logo-mobile.png" alt="Logo" className="logo-mobile" /></a></li>
            
          </ul>
        </div>
      </div>


      {/* 
      <div>
      <nav>
        <div>
          Logo
        </div>
        <div className="nav">
          <ul>
            <li>Hero</li>
            <li>About Me</li>
            <li>Projects</li>
          </ul>
        </div>
       
      
     <div className="mobile-nav">
        <div className="mobile-pages">
          <ul>
            <div className="logged">
            <li><Link to="/" aria-label="home"><i className="fa-solid fa-house"></i><h3>Home</h3></Link></li>
            <li><Link to="/skifields" aria-label="ski-fields"><i className="fa-solid fa-person-skiing" title="Skifields"></i><h3>Skifields</h3></Link></li>
            </div>
            <li><Link to="home" aria-label="logo"><img src="./logo-mobile.png" alt="Logo" className="logo-mobile" /></Link></li>
            {accessToken ? (
              <div className="logged">
                <li><Link to="/admin" aria-label="dashboard"><i className="fa-solid fa-sliders"></i><h3>Dashboard</h3></Link></li>
                <li><Link to="/" onClick={handleLogout} aria-label="logout"><i className="fa-solid fa-arrow-right-from-bracket"></i><h3>Log Out</h3></Link></li>
              </div>
            ) : (
              <div className="logged">
                <li><a href='#'><i className="fa-solid fa-user-group"></i><h3>Info</h3></a></li>
                <li><Link to="/login"><i className="fa-solid fa-arrow-right-to-bracket"></i><h3>Login</h3></Link></li>
              </div>
            )}
          </ul>
        </div>
            </div> 
      </nav> 
      </div>*/}
    </div>
  )
}

export default Navbar