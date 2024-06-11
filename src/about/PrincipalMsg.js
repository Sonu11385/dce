import React from "react";
import { Link } from "react-router-dom";
import Principal from "../images/Principal.jpeg";

export default function PrincipalMsg() {
  return (
    <div style={{ display: "flex" }}>
      <div className="list-group" style={{ margin: "10px", width: "500px" }}>
        <Link
          className="list-group-item list-group-item-action"
          style={{ background: "grey", color: "White" }}
        >
          About Us
        </Link>
        <Link
          to="/Histroy"
          className="list-group-item list-group-item-action "
          aria-current="true"
        >
          Histroy
        </Link>
        <Link
          to="/Principal's Message"
          className="list-group-item list-group-item-action active"
        >
          Principal's Message
        </Link>
        <Link
          to="/Vission & Mission"
          className="list-group-item list-group-item-action"
        >
          Vission & Mission
        </Link>
        <Link
          to="/Administration"
          className="list-group-item list-group-item-action"
        >
          Administration
        </Link>
        <Link
          to="/Affiliation"
          className="list-group-item list-group-item-action"
        >
          Affiliation
        </Link>
        <Link
          to="/Allotment and Surrender Report"
          className="list-group-item list-group-item "
        >
          Allotment and Surrender Report
        </Link>
        <Link to="/Visit Us" className="list-group-item list-group-item-action">
          Visit Us
        </Link>
        <Link
          to="/Contact Us"
          className="list-group-item list-group-item-action "
        >
          Contact Us
        </Link>
      </div>
      <div className="card mb-3" style={{ margin: "10px", width: "950px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Principal}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">Principal's Message</h2>
              <p className="card-text" style={{fontSize:"20px"}}>
                Welcome to <b> Darbhanga College of Engineering (DCE).</b> Our aim is to
                provide you the best quality education. In fact, the education
                is hidden in the student itself, we just encourage them to
                explore and enjoy the learning. 
                <br /> It is humbling and inspiring to
                hear how generation after generation of engineers graduates have
                benefited from the academic excellence and practical expertise
                of this unique institution. I am honored to lead a team of
                wonderful faculty and administrators. Together, we help students
                learn, reflect and prepare to surmount every challenge created
                by a swiftly changing and highly competitive world. We do this
                by staying true to our roots while embracing the future.
              </p>
              <p className="card-text" style={{textAlign:"end",fontFamily:"sans-serif"}}>
                <small className="text-muted" style={{marginRight:"45px"}}>with regards</small>
                <h5> <b> Dr. Sandeep Tiwari </b></h5>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
