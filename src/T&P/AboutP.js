import React from "react";
import { Link } from "react-router-dom";
export default function AboutP() {
  return (
    <div style={{ display: "flex" }}>
      <div className="list-group" style={{ width: "500px", margin: "10px" }}>
        <Link
          className="list-group-item list-group-item-action"
          style={{ background: "grey", color: "White" }}
        >
          Training & Placement
        </Link>
        <Link
          to="/About Placement"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          About Placement
        </Link>
        <Link
          to="/Placement Brochure"
          className="list-group-item list-group-item-action "
        >
          Placement Brochure
        </Link>
        <Link
          to="/ Placement List"
          className="list-group-item list-group-item-action"
        >
          {" "}
          Placement List
        </Link>
        <Link
          to="/Gate and CAT Qualified List"
          className="list-group-item list-group-item-action"
        >
          Gate and CAT Qualified List
        </Link>
        <Link
          to="/Other Competitive Achievement"
          className="list-group-item list-group-item-action"
        >
          Other Competitive Achievement
        </Link>
        <Link
          to="/Student Experience- Roadmap,guidance"
          className="list-group-item list-group-item-action"
        >
          Student Experience- Roadmap,guidance
        </Link>
      </div>
      <div
        style={{
          marginLeft: "40px",
          marginTop: "20px",
          marginBottom: "20px",
          width: "1000px",
        }}
      >
        <h3>About Placement</h3>
        <hr></hr>
        <p>
          DCE,Darbhanga with its glorious past, has been rendering yeoman
          service to the nation and engineering fraternity by channelising the
          youthful talent from Bihar and elsewhere and producing brilliant
          engineers. Our well placed alumni are a proud testimony to this. They
          have done the institution proud and carved a niche for themselves, in
          India and abroad. In these fast changing times, when demands are many,
          challenges are multifold and patience in nano-seconds, we are
          conscious of the responsibilities on our shoulders. Our students with
          the cutting edge of technology, are always alert and equipped with the
          most up-to-date knowledge. DCE not just provide exposure to technical
          aspect but also flames the igniting thought and determination to
          become the captain of their problems in the rapid changing
          technological arena. I take the opportunity to invite you for the
          recruitment of fresh talents. We would like to have you on our campus
          and explore our young talents who put their heart, mind and soul to
          the smallest act of their work. Looking forward to seeing you on DCE
          Campus.
        </p>
        <hr></hr>
        <center>
            <h4>Team Member</h4>
        </center>
        <hr></hr>

        <table>
          <thead>
              <tr>
                <th>SL#</th>
                  <th>NAME</th>
                  <th>DESIGNATION</th>
                  <th>MOBILE NUMBER</th>
                  <th>MAIL ID</th>
                  <th>IMAGE</th>
              </tr>
          </thead>
          <tbody id="name">
            <tr>
              <td>1.</td>
                <td>Mr. Prafulla Chandra</td>
                <td>Training & Placement Officer</td>
                <td>+91-8884911159</td>
                <td>prafuldce@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
            </tr>
            <tr>
            <td>2.</td>
            <td>Mr. Mazharul Haque</td>
                <td>Departmental coordinator(EEE)</td>
                <td>+91-7903340957</td>
                <td>mazhar0964@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
            </tr>
<tr>
<td>3.</td>
<td>Mr. Zoheb Hasan</td>
                <td>Departmental coordinator(CSE)</td>
                <td>+91-9910513260</td>
                <td>zohebhasan54@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
</tr>
<tr>
<td>4.</td>
<td>Mr. Ishant Kumar</td>
                <td>Departmental coordinator(CE)</td>
                <td>+91-8340206796</td>
                <td>ishant.bit.2013@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
</tr>
<tr>
<td>5.</td>
<td>Md. Alimullah Anwar</td>
                <td>Departmental coordinator(ME)</td>
                <td>+91-7722043755</td>
                <td>alimullah.anwar@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
</tr>

<tr>
<td>6.</td>
<td>Mr. Vishal Kumar</td>
                <td>Departmental coordinator(ME)</td>
                <td>+91-8809656233</td>
                <td>vk20june@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
</tr>
          </tbody>
      </table>

      <hr></hr>
        <center>
            <h4>Volunteer</h4>
        </center>
        <hr></hr>

        <table>
          <thead>
              <tr>
                <th>SL#</th>
                  <th>NAME</th>
                  <th>BRANCH</th>
                  <th>MOBILE NUMBER</th>
                  <th>MAIL ID</th>
                  <th>IMAGE</th>
              </tr>
          </thead>
          <tbody id="name">
            <tr>
              <td>1.</td>
                <td>Prity Kumari</td>
                <td>Civil Engineering</td>
                <td>---------------</td>
                <td>pritykumari18dce@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
            </tr>
            <tr>
            <td>2.</td>
            <td>Kishan Seth</td>
                <td>Civil Engineering</td>
                <td>+91-8434501903</td>
                <td>kishanseth27dce@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
            </tr>
<tr>
<td>3.</td>
<td>Prakash Kaushal</td>
                <td>CSE</td>
                <td>+91-9431803564</td>
                <td>pkaushal41119@gmail.com	</td>
                <td><img className="toggle" src="" alt="pc"/></td>
</tr>
<tr>
<td>4.</td>
<td>Aditi Vats</td>
                <td>CSE</td>
                <td>-----------</td>
                <td>aditivats002@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
</tr>
<tr>
<td>5.</td>
<td>Akash Kumar</td>
                <td>Mechanical Engineering</td>
                <td>+91-7464049009</td>
                <td>akashkumar909769@gmail.com	</td>
                <td><img className="toggle" src="" alt="pc"/></td>
</tr>

<tr>
<td>6.</td>
<td>Varsha kumari</td>
                <td>Mechanical Engineering</td>
                <td>----------</td>
                <td>varshakumari852002@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
</tr>
<tr>
<td>7.</td>
<td>Aman Kishor Mahto</td>
                <td>EEE</td>
                <td>+91-9304019434</td>
                <td>amanakash258@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
</tr>
<tr>
<td>8.</td>
<td>Pragya Pushp</td>
                <td>EEE</td>
                <td>----------</td>
                <td>pushppragya@gmail.com</td>
                <td><img className="toggle" src="" alt="pc"/></td>
</tr>
<tr>
<td>6.</td>
<td>Manish Kumar</td>
                <td>CSE</td>
                <td>+91-7255964983</td>
                <td>manishkmrjhamuzz@gmail.com	</td>
                <td><img className="toggle" src="" alt="pc"/></td>
</tr>

          </tbody>
      </table>


      </div>
    </div>
  );
}
