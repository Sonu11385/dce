import React from "react";
import { Link } from "react-router-dom";

export default function AcademicCal() {
  return (
    <div style={{ display: "flex" }}>
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
          className="list-group-item list-group-item-action active"
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
      <div style={{ marginLeft: "100px", marginTop: "20px",width:"600px" }}>
        <h3>Academic Calendar</h3>
        <hr></hr>
        <ul>
       <li style={{textAlign:"left"}}>
          The academic session is divided into two semesters each of
          approximately 20 weeks duration: An Autumn/ Odd semester
          (July-November) and a spring/ Even Semester (January-May).
          </li>
          <br></br>
        <li style={{textAlign:"left"}}>
          The Court of A.K. University, Patna will approve the academic calendar
          consisting of schedule of activities for a session inclusive of dates
          for registration, Mid-Semester and End-Semester Examinations;
          inter-semester breaks. It will be announced at the beginning of the
          semester. The academic calendar shall usually provide for at least 90
          working days (including examination dates) in each semester, excluding
          holidays and days when classes are suspended.
        </li>
        </ul>
      </div>
    </div>
  );
}
