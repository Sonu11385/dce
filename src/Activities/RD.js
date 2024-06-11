import React from 'react'
import { Link } from 'react-router-dom'
export default function RD() {
  return (
    <div style={{display:"flex"}}>
      <div className="list-group" style={{width:"500px",margin:"10px"}}>
      <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>Activities</Link>
  <Link to="/R & D" className="list-group-item list-group-item-action active " aria-current="true">
   R & D
  </Link>
  <Link to="/Start Up & Incubation Cell" className="list-group-item list-group-item-action ">Start Up & Incubation Cell</Link>
  <Link to="/Internship" className="list-group-item list-group-item-action">Internship</Link>
  <Link to="/Hackathon" className="list-group-item list-group-item-action">Hackathon</Link>
  <Link to="/Spoken Tutorial" className="list-group-item list-group-item-action">Spoken Tutorial</Link>
</div>
<div style={{marginLeft:"100px",marginTop:"20px",width:"800px"}}>
  <h3>R & D</h3>
  <hr></hr>
</div>
    </div>
  )
}
