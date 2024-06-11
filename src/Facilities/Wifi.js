import React from 'react'
import { Link } from 'react-router-dom'

export default function EMaterials() {
  return (
    <div style={{display:"flex"}}>
    <div className="list-group"  style={{ margin: "10px", width: "500px" }}>
    <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>Facilities</Link>
<Link to="/Computer Center" className="list-group-item list-group-item-action" aria-current="true">
 Computer Center
</Link>
<Link to="/Central Library" className="list-group-item list-group-item-action">Central Library</Link>
<Link to="/Hostels" className="list-group-item list-group-item-action">Hostels</Link>
<Link to="/Sports Facilities" className="list-group-item list-group-item-action">Sports Facilities</Link>
<Link to="/Medical Facilities" className="list-group-item list-group-item-action">Medical Facilities</Link>
<Link to="/Guest House" className="list-group-item list-group-item">Guest House</Link>
<Link to="/Bank" className="list-group-item list-group-item-action">Bank</Link>
<Link to="/Club" className="list-group-item list-group-item-action">Club</Link>
<Link to="/Wifi" className="list-group-item list-group-item-action active">Wi-fi</Link>
<Link to="/EMaterials" className="list-group-item list-group-item-action">e-Material for students</Link>
</div>

<div style={{ marginLeft: "100px", marginTop: "20px", width: "700px" }}>
        <h3>Wi-fi</h3>
        <hr></hr>
      </div>


    </div>
  )
}
