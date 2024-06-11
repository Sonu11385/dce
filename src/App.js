import "./App.css";
import Title from "./components/Title";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

            // ACADEMIC SECTION
import AcademicCal from "./Acadimcs/AcademicCal";
import AcademicReg from "./Acadimcs/AcademicReg";
import Admission from "./Acadimcs/Admission";
import AntiRagging from "./Acadimcs/AntiRagging";
import Attendence from "./Acadimcs/Attendence";
import Disciplinary from "./Acadimcs/Disciplinary";
import ListOfHolidays from "./Acadimcs/ListOfHolidays";
import Mom from "./Acadimcs/Mom";
import NoticeFromGovt from "./Acadimcs/NoticeFromGovt";
import Syllabus from "./Acadimcs/Syllabus";
import CourseStructure from "./Acadimcs/CourseStructure";
import WomenGC from "./Acadimcs/WomenGC";

                  // ABOUT SECTION
import Administration from "./about/Administration";
import Affiliation from "./about/Affiliation";
import Allotment from "./about/Allotment";
import Contact from "./about/Contact";
import History from "./about/History";
import PrincipalMsg from "./about/PrincipalMsg";
import Visit from "./about/Visit";
import VissionMission from "./about/VissionMission";

                        //  FACILIIIES
import ComputerCenter from "./Facilities/ComputerCenter";
import Bank from "./Facilities/Bnak";
import CentralLibrary from "./Facilities/CentralLibrary";
import Club from "./Facilities/Club";
import GuestHouse from "./Facilities/GuestHouse";
import Hostels from "./Facilities/Hostels";
import MedicalFaci from "./Facilities/MedicalFaci";
import SportsFaci from "./Facilities/SportsFaci";
import Wifi from "./Facilities/Wifi";
import EMaterials from "./Facilities/EMaterials";

                      // NIRF
import Nirf from "./Nirf/Nirf";

                          // APPORVAL
import Aicte from "./Approval/Aicte";


                      //  ALUMNI
import About from "./Alumni/About"
import Membership from "./Alumni/Membership"
import AlumniG from "./Alumni/AlumniG"


                  // Activities
                  import RD from "./Activities/RD"
                  import Hackathon from "./Activities/Hackathon"
                  import Internship from "./Activities/Intership"
                  import SpokenTutorial from "./Activities/SpokenTutorial"
                  import Startup from "./Activities/Startup"

                    //  Student Corner
                    import Clubs from "./StudentCorner/Clubs"
                    import Nss from "./StudentCorner/Nss"
                    import EorP from "./StudentCorner/EorP"
                    import Sports from "./StudentCorner/Sports"
                    import Achievements from "./StudentCorner/Achievements"


                        //  Training and Placement
                        import AboutP from "./T&P/AboutP"
                        import PlacementB from "./T&P/PlacementB"
                        import PlacementL from "./T&P/PlacementL"
                        import GandC from "./T&P/GandC"
                        import OCA from "./T&P/OCA"
                        import SERG from "./T&P/SERG"

                        // LOGIN
                        import Webmail from "./Login/Webmail";
                         import Admin from "./Login/Admin";
                         import Faculty from "./Login/Faculty";
                         import Student from "./Login/Student"




function App() {

  return (
    <>
      <BrowserRouter>
      <Title></Title>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
         
                  {/* ABOUT SECTION */}

          <Route path="Administration" element={<Administration />} />
          <Route path="Affiliation" element={<Affiliation />} />
          <Route path="Allotment & Surrender Report" element={<Allotment />} />
          <Route path="Contact Us" element={<Contact />} />
          <Route path="History" element={<History />} />
          <Route path="Principal's Message" element={<PrincipalMsg />} />
          <Route path="Visit Us" element={<Visit />} />
          <Route path="Vision & Mission" element={<VissionMission />} />

                      {/* ACADEMIC SECTION */}
          <Route path="Academic Calender" element={<AcademicCal />} />
          <Route path="Academic Regulation" element={<AcademicReg />} />
          <Route path="Admission" element={<Admission />} />
          <Route path="Anti Ragging" element={<AntiRagging />} />
          <Route path="Attendence" element={<Attendence />} />
          <Route path="Disciplinary Rule" element={<Disciplinary />} />
          <Route path="List Of Holidays" element={<ListOfHolidays />} />
          <Route path="MOM of Academic Council" element={<Mom />} />
          <Route path="Notice from Govt." element={<NoticeFromGovt />} />
          <Route path="Syllabus" element={<Syllabus />} />
          <Route path="Course Structure" element={<CourseStructure />} />
          <Route path="Women Grievance Cell" element={<WomenGC />} />



                                {/* FACILITIES */}

          <Route path="Computer Center" element={<ComputerCenter/>} />
          <Route path="Central Library" element={<CentralLibrary />} />
          <Route path="Hostels" element={<Hostels />} />
          <Route path="Sports Facilities" element={<SportsFaci />} />
          <Route path="Medical Facilities" element={<MedicalFaci />} />
          <Route path="Guest House" element={<GuestHouse />} />
          <Route path="e-Matrial for Students" element={<EMaterials />} />
          <Route path="Bank" element={<Bank />} />
          <Route path="Club" element={<Club />} />
          <Route path="Wi-fi" element={<Wifi />} />


                      {/* NIRF */}
                      <Route path="NIRF" element={<Nirf />} />   


                      {/* Approval       */}
                      <Route path="AICTE" element={<Aicte />} />


          
                         {/* Alumni */}
                         <Route path="About DCE-Alumni" element={<About />} />
                         <Route path="Membership" element={<Membership />} />
                         <Route path="Alumni Media Gallary" element={<AlumniG />} />


                         {/* Activities */}
                         <Route path="R & D" element={<RD />} />
                         <Route path="Start Up & Incubation Cell" element={<Startup />} />
                         <Route path="Internship" element={<Internship />} />
                         <Route path="Hackathon" element={<Hackathon />} />
                         <Route path="Spoken Tutorial" element={<SpokenTutorial />} />



                         {/* Student Corner */}
                         <Route path="Clubs in Dce Darbhanga" element={<Clubs />} />
                         <Route path="NSS" element={<Nss />} />
                         <Route path="Engagement or Partnership" element={<EorP />} />
                         <Route path="Sports" element={<Sports />} />
                         <Route path="Achievements" element={<Achievements />} />
                     

                     {/* TrainingAndPlacement */}
                     <Route path="About Placement" element={<AboutP />} />
                         <Route path="Placement Brochure" element={<PlacementB />} />
                         <Route path="Placement List" element={<PlacementL />} />
                         <Route path="Gate and CAT Qualified List" element={<GandC />} />
                         <Route path="Other Competitive Achievement" element={<OCA />} />
                         <Route path="Student Experience-Roadmap,guidance" element={<SERG />} />


          
                            {/* LOGIN */}
                            <Route path="WebMail" element={<Webmail />} />
                         <Route path="Admin Home Page" element={<Admin />} />
                         <Route path="Faculty Login" element={<Student />} />
                         <Route path="Student Login" element={<Faculty />} />


         



          


          
           <Route path="News" element={<News />} />

          
          

          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
