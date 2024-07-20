import "../css/Cv.css"
import myPdf from "../MyCv-Pdf/MY-CV1.pdf"


const Cv = () => {

  
  return (
    <>
    <a href={myPdf} target="blank" rel="noopener noreferrer" className="DOWN-BTN" download> Download CV</a>

    <div className="pdf-container">
    <iframe 
    src={myPdf + '#toolbar=0'}  type="application/pdf" 
    title="pdf"
    className="frame-pdf"
    
    />
    </div>
    
    </>
      
    )

}


export default Cv




  

 

