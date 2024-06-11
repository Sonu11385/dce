import React from "react";
import { Link } from "react-router-dom";

export default function MedicalFaci() {
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
          className="list-group-item list-group-item-action active"
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
          className="list-group-item list-group-item-action"
        >
          e-Material for students
        </Link>
      </div>

      <div style={{ marginLeft: "100px", marginTop: "20px", width: "700px" }}>
        <h3>Medical Facilities</h3>
        <hr></hr>
        <p>
          For the protection, preservation and promotion of health, a
          well-organized program of health instruction is essential for the
          students. The college provides medical facilities and health education
          program for the beneﬁt of the students. The college invites a
          registered medical practitioner from time to time to examine the
          student’s health.
        </p>
      </div>
    </div>
  );
}
