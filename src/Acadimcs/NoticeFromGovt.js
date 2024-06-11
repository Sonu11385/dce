import React from 'react'
import { Link } from 'react-router-dom'

export default function NoticeFromGovt() {
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
          className="list-group-item list-group-item-action "
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
          className="list-group-item list-group-item-action active"
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
<div style={{marginLeft:"100px",marginTop:"20px",width:"700px"}}>
<h3>Notice From Govt.</h3>
<hr></hr>
</div>
  </div>
  )
}
