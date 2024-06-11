import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="list-group"
        style={{ margin: "50px", width: "500px", height: "200px" }}
      >
        <Link
          className="list-group-item list-group-item-action"
          style={{ background: "grey", color: "White" }}
        >
          Alumni
        </Link>
        <Link
          to="/About DCE-Alumni"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          About DCE-Alumni
        </Link>
        <Link
          to="/Membership"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          Membership
        </Link>
        <Link
          to="/Alumni Media Gallary"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          Alumni Media Gallary
        </Link>
      </div>
      <div style={{ marginLeft: "80px", marginTop: "50px", width: "800px" }}>
        <p>
          Dear Alumni,
          <br></br>
          <br></br>
          As a fellow alumnus and the current Faculty Coordinator, I am
          delighted to reconnect with our esteemed alumni community. Our alma
          mater continues to flourish, and I am proud to be part of its growth.
          <br></br>
          Having experienced the transformative journey that our college offers
          firsthand, I understand the special bond we share. We have all walked
          the same paths, sat in the same classrooms, and embarked on a journey
          that has shaped our lives. Now, as a member of the faculty, I have the
          privilege of contributing to the education and development of the next
          generation.
          <br></br>
          It is crucial for us to maintain a strong connection between our
          esteemed alumni and the institution. Your achievements and experiences
          are a testament to the exceptional education you received here. We
          take immense pride in your accomplishments, and we hope you feel the
          same pride in being associated with your alma mater.
          <br></br> 
          I invite you to
          actively engage with your alma mater through various avenues. Consider
          sharing your expertise and insights by conducting guest lectures and
          workshops, where your industry experiences can inspire and guide
          current students. Become a mentor to offer support and guidance to
          students as they navigate their academic and professional journeys.
          Additionally, attend alumni networking events to reconnect with old
          friends, expand your professional network, and collaborate on exciting
          projects.
          <br></br> 
          
          Your involvement and contributions will greatly enrich the
          lives of current students and strengthen our alumni network. Please
          reach out to our Alumni Relations Office for more information on how
          to get involved. We eagerly await your participation and look forward
          to reconnecting with you at our upcoming events.
          <br></br>
          <br></br>
          Warm regards,
          <br></br>
<strong>Vinayak Jha</strong>
<br></br>
Faculty coordinator
<br></br>
DCE Alumni cell
        </p>
        <div style={{marginLeft:"",marginTop:"20px", marginBottom:"10px"}}>
<center><h3>List Of Alumni</h3></center>
<hr></hr>
<embed src= 
"https://www.dce-darbhanga.org/wp-content/uploads/2023/06/AlumniXRecord.pdf" 
 width="800" height="700"/> 
 <br></br>
<a href="https://www.dce-darbhanga.org/wp-content/uploads/2023/06/AlumniXRecord.pdf" target="_blank" rel="noreferrer">Download</a>                 
</div>
      </div>
    </div>
  );
}
