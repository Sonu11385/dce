
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import "./Navbar.css" ;
import toggle from '../images/toggle.png';

export default function Navbar() {
 
  return (
    <>
       <div>
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} alt="" style={{height:"40px",width:"40px"}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><img className="toggle" src={toggle} alt="toggle"/></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>

                                         {/* ABOUT */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           About Us
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/History">History</Link></li>
            <li><Link className="dropdown-item" to="/Principal's Message">Principal's Message</Link></li>
            <li><Link className="dropdown-item" to="/Vision & Mission">Vision & Mission</Link></li>
            <li><Link className="dropdown-item" to="/Administration">Administration</Link></li>
            <li><Link className="dropdown-item" to="/Affiliation">Affiliation</Link></li>
            <li><Link className="dropdown-item" to="/Allotment & Surrender Report">Allotment & Surrender Report</Link></li>
            <li><Link className="dropdown-item" to="/Visit US">Visit US</Link></li>
            <li><Link className="dropdown-item" to="/Contact Us">Contact Us</Link></li>
          </ul>
        </li>

                                       {/* ACADEMIC */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Academics
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><Link className="dropdown-item" to="/Admission">Admission</Link></li>
            <li><Link className="dropdown-item" to="/Academic Regulation">Academic Regulation</Link></li>
            <li><Link className="dropdown-item" to="/Academic Calender">Academic Calender</Link></li>
            <li><Link className="dropdown-item" to="/List Of Holidays">List Of Holidays</Link></li>
            <li><Link className="dropdown-item" to="/Attendence">Attendence</Link></li>
            <li><Link className="dropdown-item" to="/Syllabus">Syllabus</Link></li>
            <li><Link className="dropdown-item" to="/Disciplinary Rule">Disciplinary Rule</Link></li>
            <li><Link className="dropdown-item" to="/Anti Ragging">Anti Ragging</Link></li>
            <li><Link className="dropdown-item" to="/MOM of Academic Council">MOM of Academic Council</Link></li>
            <li><Link className="dropdown-item" to="/Notice from Govt.">Notice from Govt.</Link></li>
            <li><Link className="dropdown-item" to="/Course Structure">Course Structure</Link></li>
            <li><Link className="dropdown-item" to="/Women Grievance Cell">Women Grievance Cell</Link></li>

          </ul>
        </li>
                                                  {/* DEPARTMENT */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Department
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/">Computer Scienece & Engineering</Link></li>
            <li><Link className="dropdown-item" to="/">Electrical & Electronics Engineering</Link></li>
            <li><Link className="dropdown-item" to="/">Mechanical Engineering</Link></li>
            <li><Link className="dropdown-item" to="/">Civil Engineering</Link></li>
            <li><Link className="dropdown-item" to="/">Scienece & Humanities</Link></li>
          </ul>
        </li>

                                                      {/* FACILITIES */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Facilities
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/Computer Center">Computer Center</Link></li>
            <li><Link className="dropdown-item" to="/Central Library">Central Library</Link></li>
            <li><Link className="dropdown-item" to="/Hostels">Hostels</Link></li>
            <li><Link className="dropdown-item" to="/Sports Facilities">Sports Facilities</Link></li>
            <li><Link className="dropdown-item" to="/Medical Facilities">Medical Facilities</Link></li>
            <li><Link className="dropdown-item" to="/Guest House">Guest House</Link></li>
            <li><Link className="dropdown-item" to="/Bank">Bank</Link></li>
            <li><Link className="dropdown-item" to="/Club">Club</Link></li>
            <li><Link className="dropdown-item" to="/Wi-fi">Wi-fi</Link></li>
            <li><Link className="dropdown-item" to="/e-Matrial for Students">e-Matrial for Students</Link></li>
          </ul>
        </li>                       
                                        
                                                  {/* TrainingAndPlacement */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Training & Placement
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/About Placement">About Placement</Link></li>
            <li><Link className="dropdown-item" to="/Placement Brochure">Placement Brochure</Link></li>
            <li><Link className="dropdown-item" to="/Placement List">Placement List</Link></li>
            <li><Link className="dropdown-item" to="/Gate and CAT Qualified Lis">Gate and CAT Qualified List</Link></li>
            <li><Link className="dropdown-item" to="/Ohter Competitive Achievement">Ohter Competitive Achievement</Link></li>
            <li><Link className="dropdown-item" to="/Student Experience-Roadmap,guidance">Student Experience-Roadmap,guidance</Link></li>
          </ul>
        </li>


                                            {/* Student Corner */}
                                            <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Student Corner
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/Clubs in Dce Darbhanga">Clubs in Dce Darbhanga</Link></li>
            <li><Link className="dropdown-item" to="/NSS">NSS</Link></li>
            <li><Link className="dropdown-item" to="/Engagement or Partnership">Engagement or Partnership</Link></li>
            <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/Achievements">Achievements</Link></li>
          </ul>
        </li>




                                                     {/* Activities */}
                                                     <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Activities
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/R & D">R & D</Link></li>
            <li><Link className="dropdown-item" to="/Start Up & Incubation Cell">Start Up & Incubation Cell</Link></li>
            <li><Link className="dropdown-item" to="/Internship">Internship</Link></li>
            <li><Link className="dropdown-item" to="/Hackathon">Hackathon</Link></li>
            <li><Link className="dropdown-item" to="/Spoken Tutorial">Spoken Tutorial</Link></li>
          </ul>
        </li>
                                                     


                                                          {/* Alumni */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Alumni
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/About DCE-Alumni">About DCE-Alumni</Link></li>
            <li><Link className="dropdown-item" to="/Membership">Membership</Link></li>
            <li><Link className="dropdown-item" to="/Alumni Media Gallary">Alumni Media Gallary</Link></li>
          </ul>
        </li>


                                                     {/* Approval */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Approval
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="AICTE">AICTE</Link></li>
          </ul>
        </li>


                                                {/* NIRF */}
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/NIRF">NIRF</Link>
        </li>

                                                  {/* LOGIN */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/WebMail">WebMail</Link></li>
            <li><Link className="dropdown-item" to="/Admin Home Page">Admin Home Page</Link></li>
            <li><Link className="dropdown-item" to="/Faculty Login">Faculty Login</Link></li>
            <li><Link className="dropdown-item" to="/Student Login">Student Login</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    {/* <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input" onClick={()=>{props.togglemode(null)}} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div> */}
  </div>
</nav> 
    </div>
    </>
  )
}


