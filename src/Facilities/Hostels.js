import React from "react";
import { Link } from "react-router-dom";
import ssc from "../images/ssc.jpg";

export default function Hostels() {
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
        <Link
          to="/Hostels"
          className="list-group-item list-group-item-action active"
        >
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
          className="list-group-item list-group-item-action"
        >
          e-Material for students
        </Link>
      </div>

      <div style={{ marginLeft: "100px", marginTop: "20px", width: "700px" }}>
        <h3>Hostels</h3>
        <hr></hr>
        <p>
          DCE Darbhanga, provides hostel facilities to students in two boys’
          hostels and one girls’ hostel. Presently, most of girls and many of
          the boys are accommodated in these hostels. The hostels are guarded
          round the clock by able private security staffs. Patrolling is also
          done by security personnel during night. There is a chief warden for
          all hostel and also separate wardens for each and every hostel in
          order to maintain discipline. Each hostel have arrangement of central
          mess. Water and electricity supply are also provided. Newspapers and
          magazines are put up in the common rooms. Cleanliness and hygiene are
          taken care of and maintained in every aspect. Presently in the campus
          one more Boy’s and one girl’s hostel is in under construction.
        </p>
        <div class="card" style={{ width: "20rem", margin: "10px" }}>
          <img src={ssc} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Mr. Shyam Sundar Choudhary</h5>
            <p class="card-text">Chief Warden, All Hostels</p>
          </div>
        </div>
      </div>
    </div>
  );
}
