import { useState } from "react";
import "../css/Header.css"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobile, setMobile] = useState(true)

  const handleMobileChange = () => {
    setMobile(!mobile)
    
  }
  const handlelogoname = () => {
    setMobile(mobile)
    
  }
  
  

 
  return (
    <div className="Header">
      <span><Link to="/" className="name" onClick={handlelogoname}> Eze Israel O</Link></span> 
      <div className="mobile-icon" onClick={handleMobileChange}>
        {mobile ? <FaBars /> : <FaTimes />}
      </div>
      <ul className={mobile ? 'nav-menu' : 'nav-menu show'}>
        <li> <Link to="/" className="nav-item" onClick={handleMobileChange}>Home</Link></li>
        <li><Link to="about" className="nav-item" onClick={handleMobileChange}>About</Link></li>
        <li><Link to="contact" className="nav-item" onClick={handleMobileChange}>Contact</Link></li>
        <li><Link to="skills" className="nav-item" onClick={handleMobileChange}>Skills</Link></li>
        <li><Link to="cv" className="nav-item" onClick={handleMobileChange}>CV</Link></li>
      </ul>
    </div>
  )
}

export default Header