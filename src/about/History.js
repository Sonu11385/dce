import React from "react";
import { Link } from "react-router-dom";

export default function History() {
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
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Histroy
        </Link>
        <Link
          to="/Principal's Message"
          className="list-group-item list-group-item-action"
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
          className="list-group-item list-group-item"
        >
          Allotment and Surrender Report
        </Link>
        <Link to="/Visit Us" className="list-group-item list-group-item-action">
          Visit Us
        </Link>
        <Link
          to="/Contact Us"
          className="list-group-item list-group-item-action"
        >
          Contact Us
        </Link>
      </div>
      <div class="card" style={{ margin: "10px", width: "900px" }}>
        <div class="card-header" style={{ textAlign: "center" ,backgroundColor:"yellow"}}>
          <h1 style={{}}>
            <b>History</b>
          </h1>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              <b> Darbhanga College of Engineering</b> (DCE Darbhanga) is a
              government owned engineering college in Bihar, India, inaugurated
              by Nitish Kumar(chief minister of Bihar) ESTD in 2008. It is
              affiliated with the Aryabhatta Knowledge University, Patna and
              approved by the AICTE. The college is administered by Department
              of Science and Technology, Bihar.
              <br /> It was previously known as
              Jagannath Mishra Institute of Technology (JMIT). In 2008 it
              reopened with a new name, Darbhanga College of Engineering, under
              Lalit Narayan Mithila University (LNMU). In 2011, it became a
              member of the AKU Family. The owners of this property were Late
              Sri Jyoti Prasad Singh Ji, landlord of Hariharpur Estate who
              constructed it in 1935. after the great earthquake of Bihar in
              1934, this was constructed by M/s Bhambhri & Co. Ahmedabad and is
              an earthquake-proof construction. It changed hands in 1982 due to
              the continuous security threat issues for then JMIT.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
