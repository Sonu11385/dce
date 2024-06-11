import React from "react";
import { Link } from "react-router-dom";

export default function EMaterials() {
  return (
    <div style={{ display: "flex" }}>
      <div className="list-group" style={{ margin: "10px", width: "500px" }}>
        <Link
          className="list-group-item list-group-item-action"
          style={{ background: "grey", color: "White" }}
        >
          Facilities
        </Link>
        <Link
          to="/Computer Center"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          Computer Center
        </Link>
        <Link
          to="/Central Library"
          className="list-group-item list-group-item-action"
        >
          Central Library
        </Link>
        <Link to="/Hostels" className="list-group-item list-group-item-action">
          Hostels
        </Link>
        <Link
          to="/Sports Facilities"
          className="list-group-item list-group-item-action"
        >
          Sports Facilities
        </Link>
        <Link
          to="/Medical Facilities"
          className="list-group-item list-group-item-action"
        >
          Medical Facilities
        </Link>
        <Link to="/GuestHouse" className="list-group-item list-group-item">
          Guest House
        </Link>
        <Link to="/Bank" className="list-group-item list-group-item-action">
          Bank
        </Link>
        <Link to="/Club" className="list-group-item list-group-item-action">
          Club
        </Link>
        <Link to="/Wifi" className="list-group-item list-group-item-action">
          Wi-fi
        </Link>
        <Link
          to="/EMaterials"
          className="list-group-item list-group-item-action active"
        >
          e-Material for students
        </Link>
      </div>
      <div
        style={{
          marginLeft: "100px",
          marginTop: "20px",
          width: "900px",
          marginBottom: "20px",
        }}
      >
        <h3>e-Material for students</h3>
        <hr></hr>
        <div className="t1">
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>SUBJECT NAME</th>
                <th>SEMESTER</th>
                <th>BRANCH</th>
                <th>DOWNLOAD</th>
              </tr>
            </thead>
            <tbody id="name">
              <tr>
                <td>1.</td>
                <td>Concrete by Prof. Achintya</td>
                <td>4th</td>
                <td>Civil</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/03/CONCRETE_for_Civil_Engg_Students_.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td> Mechanical System Design (MSD)</td>
                <td>8th</td>
                <td>Mech</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/03/MSD_unit03_L1-1.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td> Function in C Language (PPS-100204)</td>
                <td>2nd</td>
                <td>Civil+Mech</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/03/FUNCTION.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td> BEE (Transformer)</td>
                <td>2nd</td>
                <td>CSE+EEE</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/03/BEE-Module-4-Transformer.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Call By Value (PPS-100204)</td>
                <td>2nd</td>
                <td>Civil+Mech</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/CALL-BY-VALUE.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Environmental Engineering</td>
                <td>6th</td>
                <td>Civil</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/water-treatment-plant_3RD-4TH.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>7.</td>
                <td>
                  Seismic Design Step (An Introduction to Beginners) by Prof.
                  Achintya
                </td>
                <td>8th</td>
                <td>Civil</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/SEISMIC_DESIGN_STEPS.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Management Information System</td>
                <td>8th</td>
                <td>Mech</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/mis_tutorial.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>9.</td>
                <td>MIS Short Notes</td>
                <td>8th</td>
                <td>Mech</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/ManagmentInformationSystem.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>10.</td>
                <td>MIS Notes</td>
                <td>8th</td>
                <td>Mech</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/MIS_Short_Notes.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>11.</td>
                <td>Cement by Prof. Achintya</td>
                <td>4th</td>
                <td>Civil</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/Cement_.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>12.</td>
                <td>Introduction to Earthquake by Prof. Achintya</td>
                <td>4th</td>
                <td>Civil</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/Introduction_to_Earthquake.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>13.</td>
                <td>
                  Non recurrent Disaster Mitigation Earthquake by Prof. Achintya
                </td>
                <td>4th</td>
                <td>Civil</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/Non_recurrent_Disaster_Mitigation_Earthquake.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>14.</td>
                <td> Flood-Recurrent Natural Disaster by Prof. Achintya</td>
                <td>4th</td>
                <td>Civil</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/Flood_-_Recurrent_Disaster.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>15.</td>
                <td>DISATER MANAGEMENT by Prof. Achintya</td>
                <td>4th</td>
                <td>Civil</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/DISATER__MANAGEMENT.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>16.</td>
                <td>
                  Awareness and Conciousness of Natural Disasters by Prof.
                  Achintya
                </td>
                <td>4th</td>
                <td>Civil</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/Awareness_and_Conciousness_of_Natural_Disasters.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>17.</td>
                <td>Materials, Testing & Evaluation Prepared</td>
                <td>4th</td>
                <td>Civil</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/MaterialsTesting-Evaluation-module-2.pdf">
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td>18.</td>
                <td>Pre-Stressed Concrete</td>
                <td>8th</td>
                <td>Civil</td>
                <td>
                  <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/04/Pre-StressedConcreteDesign_reduce.pdf">
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
