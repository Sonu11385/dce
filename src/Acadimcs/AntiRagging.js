import React from "react";
import { Link } from "react-router-dom";

export default function AntiRagging() {
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
          className="list-group-item list-group-item-action active "
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
      <div style={{ marginLeft: "100px", marginTop: "20px", width:"700px" }}>
        <h3>Anti-Ragging Committee</h3>
        <hr></hr>

        <div className="t1" style={{ marginBottom: "20px" }}>
          <table>
            <thead>
              <tr>
                <th>SL#</th>
                <th>NAME</th>
                <th>DESIGNATION</th>
              </tr>
            </thead>
            <tbody id="name">
              <tr>
                <td>1.</td>
                <td> Dr. Ashutosh Narayan</td>
                <td> Principal</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Dr. Dipti Bharti</td>
                <td>PI Academic</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Dr. Anupama</td>
                <td>Associate Professor</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Dr. Raman Kumar Jha</td>
                <td> HoD, Mathematic</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Dr. Md. Asjad Mokhtar</td>
                <td>HoD, ME</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Mr. Shyam Sundar Chaudhary</td>
                <td>HoD, CE</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Dr. Anamika</td>
                <td>HoD, EEE</td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Mr. Ajeet Kumar Gupta</td>
                <td>HoD, CSE</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <p>
          <strong>About Ragging: </strong>Ragging in any form is banned inside
          and outside the campus. Strict action is taken against persons
          flouting this rule; no leniency is shown. Suspension and/or withdrawal
          from the hostel/ college is the first action against the offender. The
          Supreme Court of India has also defined ragging as a criminal offense.
        </p>
        <p>
          <strong>Definition of student ragging: </strong>Any conduct by a
          student, whether by words spoken or written or by an act which
          includes physical abuse, lewd acts, teasing, rough or rude treatment,
          indulging in rowdy, undisciplined and obscene activities which causes
          or is likely to cause annoyance, undue hardship, physical or
          psychological harm or mental trauma or raise apprehension or fear in a
          fresher / junior student or other students or forcing a student to do
          any act which such a student is not willing to do and which has the
          effect of causing or generating a sense of shame or embarrassment or
          danger to a student’s life or adversely affect the physique or psyche
          of a fresher or a junior student.
        </p>
      </div>
    </div>
  );
}
