import React from "react";
import { Link } from "react-router-dom";
import lib from "../images/lib.jpg"

export default function CentralLibrary() {
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
          className="list-group-item list-group-item-action active"
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
          className="list-group-item list-group-item-action"
        >
          e-Material for students
        </Link>
      </div>

      <div style={{ marginLeft: "100px", marginTop: "20px", width: "700px" }}>
        <h3>Central Library</h3>
        <hr></hr>
        <p>
          Library at Darbhanga College of Engineering, buildings with enough
          infrastructure to augment the needs of students. DCE Darbhanga has a
          well-maintained library equipped with thousands of books related to
          different streams of engineering. It has rightly been said that the
          soul of a technical college lies in its library & laboratories. In
          this contest, DCE is fortunate enough to have a quite rich, compact
          and well organized library. The library has unique collection of some
          foreign and Indian journals in various branches of engineering and has
          more than 10000 of text and reference books. The working hour of
          library is the same as that of the college. There is an uninterrupted
          power supply is maintained by means of generators of the institute. A
          number of magazines and newspapers, reputed Journals is also provided
          along with the curriculum books in the reading room.
        </p>
        <div class="card" style={{ width: "17rem", margin: "10px" }}>
          <img src={lib} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Mr. Sanjay Kumar</h5>
            <p class="card-text">P/I (Library)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
