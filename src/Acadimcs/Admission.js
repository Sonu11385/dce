import React from 'react'
import { Link } from 'react-router-dom'

export default function Admission() {
  return (
    <div style={{display:"flex"}}>
    <div className="list-group" style={{ width: "500px", margin: "10px" }}>
        <Link
          className="list-group-item list-group-item-action"
          style={{ background: "grey", color: "White" }}
        >
          Academics
        </Link>
        <Link
          to="/Admission"
          className="list-group-item list-group-item-action active "
          aria-current="true"
        >
          Admission
        </Link>
        <Link
          to="/Academic Regulation"
          className="list-group-item list-group-item-action "
        >
          Academic Regulation
        </Link>
        <Link
          to="/Academic Calendar"
          className="list-group-item list-group-item-action"
        >
          Academic Calendar
        </Link>
        <Link
          to="/List of Holidays"
          className="list-group-item list-group-item-action"
        >
          List of Holidays
        </Link>
        <Link to="/Attendence" className="list-group-item list-group-item ">
          Attendence
        </Link>
        <Link to="/Syllabus" className="list-group-item list-group-item-action">
          Syllabus
        </Link>
        <Link
          to="/Disciplinary Rule"
          className="list-group-item list-group-item-action "
        >
          Disciplinary Rule
        </Link>
        <Link
          to="/Anti Ragging"
          className="list-group-item list-group-item-action "
        >
          Anti Ragging
        </Link>
        <Link
          to="MOM of Academic Council"
          className="list-group-item list-group-item-action "
        >
          MOM of Academic Council
        </Link>
        <Link
          to="Notice from Govt."
          className="list-group-item list-group-item-action "
        >
          Notice from Govt.
        </Link>
        <Link
          to="/Course Structure"
          className="list-group-item list-group-item-action"
        >
 Course Structure
        </Link>
        <Link
          to="/Women Grievance Cell"
          className="list-group-item list-group-item-action"
        >
          Women Grievance Cell
        </Link>
      </div>
<div style={{marginLeft:"100px",marginTop:"20px",width:"600px"}}>
  <h3>Admission</h3>
  <hr></hr>
 <p> Admission in DCE for four years B.Tech. course is made through Bihar Combined Entrance Competitive Examination (B.C.E.C.E.) conducted by Bihar Combined Entrance Competitive Examination Board. The candidates desirous of seeking Admission in DCE are advised to appear in Screening & Main Examination of B.C.E.C.E. The details for filling up the form for B.C.E.C.E. is available in its prospectus.</p>
 
<p>Please visit the Board Website:<a href='https://bceceboard.bihar.gov.in'> https://bceceboard.bihar.gov.in</a> for more detail about admission Process in DCE.
</p>
</div>
    </div>
  )
}
