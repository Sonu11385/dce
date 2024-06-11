import React from 'react'
import { Link } from 'react-router-dom'
export default function OCA() {
  return (
    <div style={{display:"flex"}}>
      <div className="list-group" style={{width:"500px",margin:"10px"}}>
      <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>Training & Placement</Link>
  <Link to="/About Placement" className="list-group-item list-group-item-action" aria-current="true">
  About Placement
  </Link>
  <Link to="/Placement Brochure" className="list-group-item list-group-item-action ">Placement Brochure</Link>
  <Link to="/ Placement List" className="list-group-item list-group-item-action"> Placement List</Link>
  <Link to="/Gate and CAT Qualified List" className="list-group-item list-group-item-action">Gate and CAT Qualified List</Link>
  <Link to="/Other Competitive Achievement" className="list-group-item list-group-item-action active">Other Competitive Achievement</Link>
  <Link to="/Student Experience- Roadmap,guidance" className="list-group-item list-group-item-action">Student Experience- Roadmap,guidance</Link>
</div>
<div style={{marginLeft:"100px",marginTop:"20px", marginBottom:"10px", width:"800px"}}>
<h3>Other Competitive Achievement</h3>
<hr></hr>               
</div>
    </div>
  )
}
