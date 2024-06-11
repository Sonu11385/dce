import React from "react";
import { Link } from "react-router-dom";

export default function WomenGC() {
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
          className="list-group-item list-group-item-action active"
        >
          Women Grievance Cell
        </Link>
      </div>
      <div style={{ marginLeft: "100px", marginTop: "20px",width:"700px",marginBottom:"20px" }}>
        <h3>Women Grievance Cell</h3>
        <hr></hr>
        <div className="t2" style={{ marginBottom: "20px" }}>
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
                <td>Dr.Anupama</td>
                <td>Associate Professor: President</td>
              </tr>
              <tr>
                <td>2.</td>
                <td> Mrs. Pooja</td>
                <td>Assistant Professor: Member </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Mrs. Shweta Kumari</td>
                <td>Assistant Professor: Member </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Dr. Pooja</td>
                <td>Assistant Professor: Member</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <p>
          Woman Grievance cell has been constituted under a committee to ensure
          safe working environment for the woman employees and girls student of
          the institute. The protection of Woman from sexual Harassment Act,
          2013, was passed by the India government to protect against Sexual
          harassment and abouse of woman in the workplace.
        </p>
        <br></br>
        <a href="https://www.dce-darbhanga.org/wp-content/uploads/2023/04/womanXgrievanceXcellXletter.pdf"><strong>Woman Grievance Cell Letter</strong></a>
      </div>
    </div>
  );
}
