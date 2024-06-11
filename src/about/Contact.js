import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div style={{display:"flex"}}>
       <div className="list-group" style={{ margin: "10px", width: "500px" }}>
      <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>About Us</Link>
  <Link to="/Histroy" className="list-group-item list-group-item-action " aria-current="true">
    Histroy
  </Link>
  <Link to="/Principal's Message" className="list-group-item list-group-item-action">Principal's Message</Link>
  <Link to="/Vission & Mission" className="list-group-item list-group-item-action">Vission & Mission</Link>
  <Link to="/Administration" className="list-group-item list-group-item-action">Administration</Link>
  <Link to="/Affiliation" className="list-group-item list-group-item-action">Affiliation</Link>
  <Link to="/Allotment and Surrender Report" className="list-group-item list-group-item ">Allotment and Surrender Report</Link>
  <Link to="/Visit Us" className="list-group-item list-group-item-action">Visit Us</Link>
  <Link to="/Contact Us" className="list-group-item list-group-item-action active">Contact Us</Link>
</div>
<div className="list-group" style={{ margin: "10px", width: "700px",borderRadius:"1px solid black" }}>
      <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>Contact Us</Link>
      <div class="input-group">
  <span class="input-group-text">Name:</span>
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Enter your full name</label>
</div>
</div>
    </div>
  )
}
