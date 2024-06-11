import React from 'react'
import { Link } from 'react-router-dom'
import vissionmission from "../images/visionmission.png"

export default function VissionMission() {
  return (
    <div style={{display:"flex"}}>
      <div className="list-group"  style={{ margin: "10px", width: "500px" }}>
      <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>About Us</Link>
  <Link to="/Histroy" className="list-group-item list-group-item-action" aria-current="true">
    Histroy
  </Link>
  <Link to="/Principal's Message" className="list-group-item list-group-item-action">Principal's Message</Link>
  <Link to="/Vission & Mission" className="list-group-item list-group-item-action active">Vission & Mission</Link>
  <Link to="/Administration" className="list-group-item list-group-item-action ">Administration</Link>
  <Link to="/Affiliation" className="list-group-item list-group-item-action">Affiliation</Link>
  <Link to="/Allotment and Surrender Report" className="list-group-item list-group-item">Allotment and Surrender Report</Link>
  <Link to="/Visit Us" className="list-group-item list-group-item-action">Visit Us</Link>
  <Link to="/Contact Us" className="list-group-item list-group-item-action">Contact Us</Link>
</div>
<div style={{marginLeft:"100px", width:'800px',marginTop:"10px"}}>
<img src={vissionmission} className="img-fluid rounded-start" alt="vissionmission"/>
<div className='vission'>
  <h3>
    Vision
  </h3>
  <br></br>
<p>
To bring forth holistic engineers with an impetus to higher studies to meet the sustainable requirement of industry and society – nationwide and globally.
</p>
<br></br>
<h3>
  Mission
</h3>
<br></br>
<p><h5 style={{display:"flex"}}>M1: </h5>To provide quality teaching-learning ambience through advanced pedagogical methods.</p>

<br></br>
<p><h5>M2: </h5>To facilitate learning environment for higher studies and research aptitude.</p>

<br></br>
<p><h5>M3: </h5>To collaborate with related domain industries for enhancing professional expertise.</p>

<br></br>
<p><h5>M4: </h5>To inculcate humanitarian ethics for self, society, nation and the world.</p>
</div>
</div>

    </div>
  )
}
