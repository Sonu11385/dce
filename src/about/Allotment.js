import React from 'react'
import { Link } from 'react-router-dom'

export default function Allotment() {
  return (
    <div>
      <div className="list-group" style={{width:"500px",margin:"10px"}}>
      <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>About Us</Link>
  <Link to="/Histroy" className="list-group-item list-group-item-action " aria-current="true">
    Histroy
  </Link>
  <Link to="/Principal's Message" className="list-group-item list-group-item-action">Principal's Message</Link>
  <Link to="/Vission & Mission" className="list-group-item list-group-item-action">Vission & Mission</Link>
  <Link to="/Administration" className="list-group-item list-group-item-action">Administration</Link>
  <Link to="/Affiliation" className="list-group-item list-group-item-action">Affiliation</Link>
  <Link to="/Allotment and Surrender Report" className="list-group-item list-group-item active">Allotment and Surrender Report</Link>
  <Link to="/Visit Us" className="list-group-item list-group-item-action">Visit Us</Link>
  <Link to="/Contact Us" className="list-group-item list-group-item-action">Contact Us</Link>
</div>

    </div>
  )
}
