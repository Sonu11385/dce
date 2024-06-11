import React from "react";
import { Link } from "react-router-dom";

export default function Bank() {
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
        <Link to="/Guest House" className="list-group-item list-group-item">
          Guest House
        </Link>
        <Link
          to="/Bank"
          className="list-group-item list-group-item-action active"
        >
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
          className="list-group-item list-group-item-action"
        >
          e-Material for students
        </Link>
      </div>

      <div style={{ marginLeft: "100px", marginTop: "20px", width: "700px" }}>
        <h3>Bank</h3>
        <hr></hr>
        <p>
          There is a functional extension branch of Central Bank within the
          institute premises. It provides all modern banking facilities to cater
          to the needs of students and the employees in the campus. The fees
          transactions are also carried out here. Also, an ATM of Central Bank
          is situated near the gate of the college campus to enable hassle free
          money withdrawal at any time.!!
        </p>
      </div>
    </div>
  );
}
