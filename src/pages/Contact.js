import "../css/Contact.css"
import { FaEnvelope, FaPhone, FaAddressBook, FaWhatsapp, FaGithub,  FaLinkedin} from "react-icons/fa"

const Contact = () => {
  return (
    <div className="Contact" >
      
      <div className="Information">
        <p className="header">Contact Information</p>
        <i className="con-text"><FaEnvelope className="con-icons"/> {" " }  Ezeisraeloluoma123@gmail.com</i>
        <p className="con-text"><FaPhone className="con-icons"/> {" " }07061033459</p>
        <p className="website"><FaAddressBook className="con-icons"/> Website@www.EzeIsrael.io {"👋🏻 "}</p>
        <h3 className="follow">CONTACT ME ON</h3>
        <p className="Icons">
        <a href="https://linkedin.com/in/israel-eze-ab471a305"  rel="norerrer"> <FaLinkedin  className="icon-setup"/>  </a>
        <a href="https://github.com/Eze-Israel"><FaGithub className="icon-setup" /></a>
        <a href="https://wa.me/07061033459" rel="noreferrer"> <FaWhatsapp   className="icon-setup"/></a> </p>
      </div>
      


    </div>
  )
}

export default Contact