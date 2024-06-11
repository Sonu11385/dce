import React from 'react'
import { Link } from 'react-router-dom'


export default function Administration() {
  return (
    <div style={{display:"flex"}}>
      <div className="list-group"  style={{ margin: "10px", width: "500px" }}>
      <Link className="list-group-item list-group-item-action" style={{background:"grey",color:"White"}}>About Us</Link>
  <Link to="/Histroy" className="list-group-item list-group-item-action" aria-current="true">
    Histroy
  </Link>
  <Link to="/Principal's Message" className="list-group-item list-group-item-action">Principal's Message</Link>
  <Link to="/Vission & Mission" className="list-group-item list-group-item-action">Vission & Mission</Link>
  <Link to="/Administration" className="list-group-item list-group-item-action active">Administration</Link>
  <Link to="/Affiliation" className="list-group-item list-group-item-action">Affiliation</Link>
  <Link to="/Allotment and Surrender Report" className="list-group-item list-group-item">Allotment and Surrender Report</Link>
  <Link to="/Visit Us" className="list-group-item list-group-item-action">Visit Us</Link>
  <Link to="/Contact Us" className="list-group-item list-group-item-action">Contact Us</Link>
</div>
<div style={{marginLeft:"100px",marginTop:"10px", width:"800px"}}>
  <h3>Administration</h3>
  <hr></hr>
  <div className='t1' style={{marginBottom:"20px"}}>
    <h5 style={{justifyContent:"center",alignItems:"center",marginLeft:"350px"}}>Head Of Department</h5>
    <table>
          <thead>
              <tr>
                <th>SL#</th>
                  <th>NAME OF DEPARTMENT</th>
                  <th>NAME OF FACULTY</th>
                  <th>CONTACT</th>
              </tr>
          </thead>
          <tbody id="name">
            <tr>
              <td>1.</td>
                <td>Civil Engineering</td>
                <td>	Mr. Shyam Sundar Chaudhary</td>
                <td>7631870202</td>
            </tr>
            <tr>
            <td>2.</td>
                <td>Mechanical Engineering</td>
                <td>Dr. Md. Asjad Mokhtar</td>
                <td>2008</td>
            </tr>
<tr>
<td>3.</td>
                <td>Electrical & Electronics Engineering</td>
                <td>Dr. Anamika</td>
                <td>2008</td>
</tr>
<tr>
<td>4.</td>
                <td>Computer Science & Engineering</td>
                <td>Mr. Ajeet Kumar Gupta</td>
                <td>2008</td>
</tr>
<tr>
<td>5.</td>
                <td>Science & Humanities (1st Year)</td>
                <td>	Dr. Raman Kumar Jha</td>
                <td>2008</td>
</tr>
          </tbody>
      </table>
  </div>
  <div className='t2' style={{marginBottom:"20px"}}>
    <h5 style={{justifyContent:"center",alignItems:"center",marginLeft:"350px"}}>Academic Section</h5>
    <table>
          <thead>
              <tr>
                <th>SL#</th>
                  <th>	RESPONSIBILITY</th>
                  <th>NAME OF FACULTY</th>
                  <th>CONTACT</th>
              </tr>
          </thead>
          <tbody id="name">
            <tr>
              <td>1.</td>
                <td>	Professor Incharge Academic</td>
                <td>		Dr. Dipti Bharti</td>
                <td>7631870202</td>
            </tr>
            <tr>
            <td>2.</td>
                <td>	Assistant Professor Incharge Academic</td>
                <td>Dr. Md. Asjad Mokhtar</td>
                <td>2008</td>
            </tr>
<tr>
<td>3.</td>
                <td>Professor Incharge Admission</td>
                <td>	Mr. Ajeet Kumar Gupta</td>
                <td>2008</td>
</tr>
<tr>
<td>4.</td>
                <td>Assistant Professor Incharge Admission</td>
                <td>Mr. Raju Rajak</td>
                <td>2008</td>
</tr>
<tr>
<td>5.</td>
                <td>	PG Coordinator</td>
                <td>	Dr. Anamika</td>
                <td>2008</td>
</tr>
          </tbody>
      </table>
  </div>
  <div className='t3' style={{marginBottom:"20px"}}>
    <h5 style={{justifyContent:"center",alignItems:"center",marginLeft:"350px"}}>Exam Section</h5>
    <table>
          <thead>
              <tr>
                <th>SL#</th>
                  <th>	RESPONSIBILITY</th>
                  <th>NAME OF FACULTY</th>
                  <th>CONTACT</th>
              </tr>
          </thead>
          <tbody id="name">
            <tr>
              <td>1.</td>
                <td>	Controller of Exam</td>
                <td>	Dr. Raman Kumar Jha</td>
                <td>7631870202</td>
            </tr>
            <tr>
            <td>2.</td>
                <td>	Assistant Controller of Exam</td>
                <td>	Mr. Ajeet Kumar Gupta</td>
                <td>2008</td>
            </tr>
          </tbody>
      </table>
  </div>
  <div className='t3' style={{marginBottom:"20px"}}>
    <h5 style={{justifyContent:"center",alignItems:"center",marginLeft:"350px"}}>Office Section</h5>
    <table>
          <thead>
              <tr>
                <th>SL#</th>
                  <th>	RESPONSIBILITY</th>
                  <th>NAME OF FACULTY</th>
                  <th>CONTACT</th>
              </tr>
          </thead>
          <tbody id="name">
            <tr>
              <td>1.</td>
                <td>	Professor Incharge Office</td>
                <td>	Dr. Dipti Bharti</td>
                <td>7631870202</td>
            </tr>
            <tr>
            <td>2.</td>
                <td>	</td>
                <td>	</td>
                <td></td>
            </tr>
          </tbody>
      </table>
  </div>

  <div className='t4' style={{marginBottom:"20px"}}>
    <h5 style={{justifyContent:"center",alignItems:"center",marginLeft:"350px"}}>Hostel Section</h5>
    <table>
          <thead>
              <tr>
                <th>SL#</th>
                  <th>	RESPONSIBILITY</th>
                  <th>NAME OF FACULTY</th>
                  <th>CONTACT</th>
              </tr>
          </thead>
          <tbody id="name">
            <tr>
              <td>1.</td>
                <td>	Chief Warden</td>
                <td>	Mr. Shyam Sundar Chaudhary</td>
                <td>7631870202</td>
            </tr>
            <tr>
            <td>2.</td>
                <td>	Warden (V C Jha)</td>
                <td>	Dr. Tarique Rasid</td>
                <td>2008</td>
            </tr>
<tr>
<td>3.</td>
                <td>	Assistant Warden-01 (V C Jha)</td>
                <td>		Md. Mazahaul Haque</td>
                <td>2008</td>
</tr>
<tr>
<td>4.</td>
                <td>Assistant Warden-02 (V C Jha)</td>
                <td>	Mr. Mayank Kumar Singh</td>
                <td>2008</td>
</tr>
<tr>
<td>5.</td>
                <td>		Warden (Vidyapatti)</td>
                <td>Mr. Prabhat Kumar</td>
                <td>2008</td>
</tr>
<tr>
<td>6.</td>
                <td>Assistant Warden-01 (Vidyapatti)</td>
                <td>	Mr. Sanjay Kumar</td>
                <td>2008</td>
</tr>
<tr>
<td>7.</td>
                <td>	 Assistant Warden-02 (Vidyapatti)</td>
                <td>	Mr. Mayank Kumar Singh</td>
                <td>2008</td>
</tr>
<tr>
<td>8.</td>
                <td>Warden-01 (Shyama)</td>
                <td>	Dr. Anupama</td>
                <td>2008</td>
</tr>
<tr>
<td>9.</td>
                <td>			Warden-02 (Shyama)</td>
                <td>	Dr. Dipti Bharti</td>
                <td>2008</td>
</tr>
<tr>
<td>10.</td>
                <td>Assistant Warden (Shyama)</td>
                <td>	Mrs. Shweta Kumari</td>
                <td>2008</td>
</tr>
          </tbody>
      </table>
  </div>






  <div className='t5' style={{marginBottom:"20px"}}>
    <h5 style={{justifyContent:"center",alignItems:"center",marginLeft:"350px"}}>Other Section</h5>
    <table>
          <thead>
              <tr>
                <th>SL#</th>
                  <th>	RESPONSIBILITY</th>
                  <th>NAME OF FACULTY</th>
                  <th>CONTACT</th>
              </tr>
          </thead>
          <tbody id="name">
            <tr>
              <td>1.</td>
                <td>	NBA Coordinator</td>
                <td>		Dr. Anamika</td>
                <td>7631870202</td>
            </tr>
            <tr>
            <td>2.</td>
                <td>	Website Incharge</td>
                <td>	Mr. Akhilesh Kumar	</td>
                <td></td>
            </tr>
          </tbody>
      </table>
  </div>
</div>

    </div>
  )
}
