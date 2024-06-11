import React from 'react'
import { Link } from 'react-router-dom'

export default function AlumniG() {
  return (
    <div style={{ display: "flex" }}>
    <div
      className="list-group"
      style={{ margin: "50px", width: "500px", height: "200px" }}
    >
      <Link
        className="list-group-item list-group-item-action"
        style={{ background: "grey", color: "White" }}
      >
        Alumni
      </Link>
      <Link
        to="/About DCE-Alumni"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        About DCE-Alumni
      </Link>
      <Link
        to="/Membership"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        Membership
      </Link>
      <Link
        to="/Alumni Media Gallary"
        className="list-group-item list-group-item-action active"
        aria-current="true"
      >
        Alumni Media Gallary
      </Link>
    </div>
    <div style={{marginLeft:"100px",marginTop:"20px",width:"800px"}}>
  <h3> Alumni Media Gallary</h3>
  <hr></hr>
 </div>
    
    </div>
  )
}
