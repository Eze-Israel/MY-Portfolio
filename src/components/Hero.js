import "../css/Hero.css"
import webHero from "../Images/web-intro.jpg"


const Hero = () => {
  return (
  <div className="hero">
  <img src={webHero} alt="Hero of my front page" className="Fist-hero"></img>

  <div className="text-div">
    <h3 className="welcome">Welcome to my Portfolio </h3>
    <p className="text-alone"> <strong>Hey, I'm ISRAEL EZE O 👋🏻 </strong>  I will help you create responsive
   and captivating website that you will love. </p>
   </div>
   <div className="button">
    <a href="about"><button className="hero-btn">About</button></a>
    <a href="skills"><button className="hero-btn">Skills</button></a>
    </div>

  
    <div className="button2">
  <a href="contact"><button className="hero-btn">Contact</button></a>
  <a href="cv"><button className="hero-btn">CV</button></a>
    </div>
  </div>
  )
}

export default Hero