import React from "react";
import { Link } from "react-router-dom";

export default function Aicte() {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="list-group"
        style={{ margin: "50px", width: "300px", height: "200px" }}
      >
        <Link
          className="list-group-item list-group-item-action"
          style={{ background: "grey", color: "White" }}
        >
          Approval
        </Link>
        <Link
          to="/NIRF"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          AICTE
        </Link>
      </div>
      <div style={{ marginLeft: "80px", marginTop: "50px", marginBottom:"20px" }}>
        <h3>AICTE Banner</h3>
        <hr></hr>
        <table>
          <thead>
            <tr>
              <th>SL#</th>
              <th>ACADEMIC YEAR</th>
              <th>DOCUMENT</th>
            </tr>
          </thead>
          <tbody id="name">
            <tr>
              <td>1.</td>
              <td>2022-2023</td>
              <td>
                <a href="https://www.dce-darbhanga.org/wp-content/uploads/2022/07/EOA-Report-2022-2023.pdf">
                  Download AICTE 2022-2023 EoA Report
                </a>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>2022-2023</td>
              <td>
                <a href="https://www.dce-darbhanga.org/wp-content/uploads/2021/07/EOA-Report_21-22.pdf">
                  Download AICTE 2021-2022 EoA Report
                </a>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>2022-2023</td>
              <td>
                <a href="https://www.dce-darbhanga.org/wp-content/uploads/2020/07/EOA_Report_2020-21.pdf">
                  Download AICTE 2020-2021 EoA Report
                </a>
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td>2022-2023</td>
              <td>
                <a href="https://www.dce-darbhanga.org/wp-content/uploads/2019/08/EOA-Report-2019-20.pdf">
                  Download AICTE 2019-2020 EoA Report
                </a>
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td>2022-2023</td>
              <td>
                <a href="https://www.dce-darbhanga.org/wp-content/uploads/2019/02/EOA-2018-2019.pdf">
                  Download AICTE 2018-2019 EoA Report
                </a>
              </td>
            </tr>
            <tr>
            <td>6.</td>
            <td>2022-2023</td>
              <td>
                <a href="https://www.dce-darbhanga.org/wp-content/uploads/2019/08/EOA-Report-2017-18.pdf">
                  Download AICTE 2017-2018 EoA Report
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
