import "../css/Languages.css"
import bootpix from "../Images/Bootsrap.jpg"
// import javaS from "../Images/Javascrip.jpg"
import javaS2 from "../Images/Javascrip2.png"
import rati from "../Images/React-logo.jpg"
import redix from "../Images/Redux.png"
import htm from "../Images/Html5.png"
import cs from "../Images/Css3.png"
import firebas   from "../Images/Firebase.png"
import JQ from "../Images/J-query.png"
// import nodess from "../Images/Node-pix.png"
import npms from "../Images/Npm.png"



const Languages = () => {
  return (
    <div className="Languages">


        <div className="Ht-Cs-JS">
        <img src={htm} alt="HTML LOGO" className="lan-img"></img>
        <img src={cs} alt="CSS3 LOGO"className="lan-img" ></img>
        <img src={javaS2} alt="HTML LOGO" className="lan-img"></img>
        </div>
        {" "}
        <div className="BT-RD-JQ">
        <img src={bootpix} alt="Bootstrap LOGO" className="lan-img"></img>  
        <img src={redix} alt="REDUX LOGO" className="lan-img"></img>  
        <img src={JQ} alt="JQUERY LOGO" className="lan-img"></img>  
        </div>
        <div className="RC-FB-NPM">
        <img src={rati} alt="REACT LOGO" className="lan-img"></img> 
        <img src={firebas} alt="FIREBASE LOGO" className="lan-img"></img> 
        <img src={npms} alt="NPM LOGO" className="lan-img"></img> 
         
        </div>



    </div>
  )
}

export default Languages