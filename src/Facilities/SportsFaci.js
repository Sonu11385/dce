import React from "react";
import { Link } from "react-router-dom";

export default function SportsFaci() {
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
          className="list-group-item list-group-item-action active"
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
        <h3>Sports Facilities</h3>
        <hr></hr>
        <p>
          A healthy mind resides in a healthy body. The students are encouraged
          to take up sports actively.For “Healthy Mind in Healthy
          Body,facilities for other outdoor and indoor games like Volleyball,
          Football, Cricket, Basketball, Badminton, Table Tennis, etc. are
          available.The institute believes that playing sports helps the
          students to build a spirit of teamwork and sportsmanship which will
          help them to lead better lives.
        </p>
        <div class="card" style={{ width: "17rem", margin: "10px" }}>
          <img src=",,," class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">XYZ</h5>
            <p class="card-text">P/I (Sports)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
