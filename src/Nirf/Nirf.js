import React from 'react'
import { Link } from 'react-router-dom'

export default function Nirf() {
  return (
    
    <div style={{display:"flex"}}>
    <div className="list-group"  style={{ margin: "50px", width: "500px" ,height:'200px'}}>
    <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>National Institutional Ranking Framework (NIRF)</Link>
<Link to="/NIRF" className="list-group-item list-group-item-action active" aria-current="true">
  About NIRF
</Link>
</div>
<div style={{marginLeft:"80px",marginTop:"80px"}}>
  <h4><a href='https://www.dce-darbhanga.org/wp-content/uploads/2023/02/DarbhangaXCollegeXofXEngineering20230113-.pdf'>Darbhanga College of Engineering 20230113</a></h4>
 </div>
</div>
  )
}
