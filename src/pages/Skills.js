import "../css/Skills.css"
import Project from "../components/Project"
import Languages from "../components/Languages"



const Skills = () => {
  return (
    <div className="skills">
       
<div className="write">
   <h1>.Technical Skills:</h1>
   {" "}
   <h2>-Networking:</h2>
   {" "}
   <p>Understanding networks, protocols, and security principles.</p>
   {" "}
   <h2>-Operating Systems:</h2>
   {" "}
   <p>Proficiency with Windows,Linux, Mac OS</p>
   {" "}
   <h2>-Programming:</h2>
   {" "}
   <p> Familiarity with React.Js,Javascript,
     Bootstrap,CSS3,JQuery,Redux,Html:5 and Firebase. </p>
     {" "}
   <h1>.Soft Skills:</h1>
   {" "}
   <h2>-Communication:</h2>
   {" "}
   <p>Ability to Communicate technical information in non-technical terms to non-technical people</p>
   {" "}
   <h2>-Critical Thinking:</h2>
   {" "}
   <p>Ability to identify clients imaginery requests,design and Develop Users friendly websites, evaluate risks,and propose effective solutions</p>
   {" "}
   <h2>-Attention to Detail:</h2>
   {" "}
   <p>Careful observation and analysis of screen sizes to develop websites adaptable to any screen sizes </p>
   {" "}
   <h2>-Problem-Solving:</h2>
   {" "}
   <p>Quick and creative thinking to respond clients to demands.</p>
   {" "}
   <h2>Teamwork:</h2>
   {" "}
   <p>Collaborating effectively with colleagues to achieve common creative goals.</p>
   </div>
      
      <Languages/>
      <Project/>
    </div>
  )
}

export default Skills