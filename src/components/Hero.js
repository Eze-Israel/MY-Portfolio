import "../css/Hero.css"
import web7 from "../Images/web-hero7.jpg"


const Hero = () => {
  return (
  <div className="hero">
  <img src={web7 } alt="Hero of my front page" className="Fist-hero"></img>

  <div className="text-div">
    <h3 className="welcome">Welcome to my Portfolio </h3>
    <p className="text-alone"> <strong>Hey, I'm ISRAEL EZE O 👋🏻 </strong>  I will help you create responsive
   and captivating website that you will love. </p>
   </div>
   
  </div>
  )
}

export default Hero