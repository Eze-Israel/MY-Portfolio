import "../css/Languages.css"
import tailwin from "../Images/TailwindCss.jpg"
import javaS2 from "../Images/Javascrip2.png"
import rati from "../Images/React-logo.jpg"
import redix from "../Images/Redux.png"
import htm from "../Images/Html5.png"
import cs from "../Images/Css3.png"
import firebas   from "../Images/Firebase.png"
import npms from "../Images/Npm.png"



const Languages = () => {

  return (
    <div className="Languages">

        <div className="first">
        <img src={htm} alt="HTML LOGO" className="lan-img1"></img>
        <img src={cs} alt="CSS3 LOGO"className="lan-img2" ></img>
        </div>

        <div className="second">
        <img src={javaS2} alt="HTML LOGO" className="lan-img3"></img>
        <img src={rati} alt="REACT LOGO" className="lan-img4"></img>
        </div>

        <div className="third">
        <img src={tailwin} alt="Tailwind LOGO" className="lan-img5"></img>  
        <img src={redix} alt="REDUX LOGO" className="lan-img6"></img>  
        </div>
        
        <div className="fourth">
        <img src={firebas} alt="FIREBASE LOGO" className="lan-img7"></img> 
        <img src={npms} alt="NPM LOGO" className="lan-img8"></img> 
        </div>

    </div>
  )
}

export default Languages