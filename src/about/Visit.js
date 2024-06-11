import React from 'react'
import { Link } from 'react-router-dom'
export default function Visit() {
  return (
    <div style={{display:"flex"}}>
      <div className="list-group" style={{width:"500px",margin:"10px"}}>
      <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>About Us</Link>
  <Link to="/Histroy" className="list-group-item list-group-item-action " aria-current="true">
    Histroy
  </Link>
  <Link to="/Principal's Message" className="list-group-item list-group-item-action ">Principal's Message</Link>
  <Link to="/Vission & Mission" className="list-group-item list-group-item-action">Vission & Mission</Link>
  <Link to="/Administration" className="list-group-item list-group-item-action">Administration</Link>
  <Link to="/Affiliation" className="list-group-item list-group-item-action">Affiliation</Link>
  <Link to="/Allotment and Surrender Report" className="list-group-item list-group-item ">Allotment and Surrender Report</Link>
  <Link to="/Visit Us" className="list-group-item list-group-item-action active">Visit Us</Link>
  <Link to="/Contact Us" className="list-group-item list-group-item-action ">Contact Us</Link>
  
</div>
<div style={{marginLeft:"100px",marginTop:"20px"}}>
  <h3>Visit us</h3>
  <hr></hr>
  <p>Darbhanga College of Engineering,<br></br>
Mabbi, P.O-Lal Sahpur,Via-P.T.C,<br></br>
Dist- Darbhanga-846005, State- Bihar<br></br>
Bihar – 846005<br></br>
(The campus is at Mabbi, beside NH-57)</p>
<hr></hr>
<h6>Find us on map</h6>
</div>
    </div>
  )
}
