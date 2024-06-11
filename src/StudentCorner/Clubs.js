import React from 'react'
import { Link } from 'react-router-dom'
export default function Clubs() {
  return (
    <div style={{display:"flex"}}>
      <div className="list-group" style={{width:"500px",margin:"10px"}}>
      <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>Student Corner</Link>
  <Link to="/Clubs in DCE Darbhanga" className="list-group-item list-group-item-action active" aria-current="true">
   Clubs in DCE Darbhanga
  </Link>
  <Link to="/NSS" className="list-group-item list-group-item-action ">NSS</Link>
  <Link to="/Engagement or Partnership" className="list-group-item list-group-item-action">Engagement or Partnership</Link>
  <Link to="/Sports" className="list-group-item list-group-item-action">Sports</Link>
  <Link to="/Achievements" className="list-group-item list-group-item-action">Achievements</Link>
</div>
<div style={{marginLeft:"100px",marginTop:"20px", marginBottom:"10px"}}>
<h3>GOOGLE dEVELOPER STUDENTS CLUB</h3>
<hr></hr>
<embed src= 
"https://www.dce-darbhanga.org/wp-content/uploads/2023/08/GoogleXDevlopersXStudentXClub.pdf" 
 width="800" height="700"/> 
 <br></br>
<a href="https://www.dce-darbhanga.org/wp-content/uploads/2023/08/GoogleXDevlopersXStudentXClub.pdf">Download</a>                 
</div>
    </div>
  )
}
