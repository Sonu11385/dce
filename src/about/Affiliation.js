import React from 'react'
import { Link } from 'react-router-dom'
import "./Affiliation.css"

export default function Affiliation() {
  return (
    <div style={{display:"flex"}}>
       <div className="list-group" style={{margin:"10px",width:"500px"}}>
      <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>About Us</Link>
  <Link to="/Histroy" className="list-group-item list-group-item-action" aria-current="true">
    Histroy
  </Link>
  <Link to="/Principal's Message" className="list-group-item list-group-item-action">Principal's Message</Link>
  <Link to="/Vission & Mission" className="list-group-item list-group-item-action">Vission & Mission</Link>
  <Link to="/Administration" className="list-group-item list-group-item-action ">Administration</Link>
  <Link to="/Affiliation" className="list-group-item list-group-item-action active">Affiliation</Link>
  <Link to="/Allotment and Surrender Report" className="list-group-item list-group-item">Allotment and Surrender Report</Link>
  <Link to="/Visit Us" className="list-group-item list-group-item-action">Visit Us</Link>
  <Link to="/Contact Us" className="list-group-item list-group-item-action">Contact Us</Link>
</div>
<div style={{margin:"10px",width:"900px",marginLeft:"100px"}} >
  <h3>
  Approval and Affiliation
  </h3>
  <hr></hr>
  <p>Darbhanga College of Engineering is approved by the All India Council of Technical Education (AICTE) and affiliated to Bihar Engineering University, Patna (Bihar).</p>
  <table>
          <thead>
              <tr>
                <th>SL#</th>
                  <th>NAME OF DEPARTMENT</th>
                  <th>APPROVED INTAKE</th>
                  <th>SINCE</th>
              </tr>
          </thead>
          <tbody id="name">
            <tr>
              <td>1.</td>
                <td>M. Tech in Power System</td>
                <td>30</td>
                <td>2021</td>
            </tr>
            <tr>
            <td>2.</td>
                <td>B. Tech in Civil Engineering</td>
                <td>60</td>
                <td>2008</td>
            </tr>
<tr>
<td>3.</td>
                <td>B. Tech in Mechanical Engineering</td>
                <td>60</td>
                <td>2008</td>
</tr>
<tr>
<td>4.</td>
                <td>B. Tech in Electrical & Electronics Engineering</td>
                <td>60</td>
                <td>2008</td>
</tr>
<tr>
<td>5.</td>
                <td>B. Tech in Computer Science & Engineering</td>
                <td>60</td>
                <td>2008</td>
</tr>
<tr>
<td>6.</td>
                <td>B. Tech in Fire Technology and Safety</td>
                <td>60</td>
                <td>2022</td>
</tr>
          </tbody>
      </table>
</div>
    </div>
  )
}
