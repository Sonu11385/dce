import React from "react";
import { Link } from "react-router-dom";
import akg from "../images/akg.jpg"

export default function ComputerCenter() {
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
          className="list-group-item list-group-item-action active"
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
          className="list-group-item list-group-item-action "
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
      <div style={{ marginLeft: "100px", marginTop: "20px",width:"700px" }}>
        <h3>Computer Center</h3>
        <hr></hr>
        <p>
          DCE,Darbhanga has a well-equipped centralized computer center to cater
          to the needs of students and faculty in the university. It is housed,
          in a magnificent state-of-the-art building having specialized
          laboratories to provide a variety of platforms and computing
          environment for students. DCE,Darbhanga computer center presently has
          around 150 computers connected into LAN in two floors providing
          internet access and programming facilities to all software related
          laboratories of all the departments of the college, predominantly CE,
          ME, CSE, EEE Department All academic buildings, library,
          administrative blocks, residential buildings, and all the hostels of
          DCE, Darbhanga are connected using optical fiber links and around 95
          Wi-Fi access points.
        </p>
        <div class="card" style={{width:"17rem",margin:"10px"}}>
  <img src={akg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mr. Ajeet Kumar Gupta</h5>
    <p class="card-text">HoD CSE Department</p>
  </div>
</div>
      </div>
    </div>
  );
}
