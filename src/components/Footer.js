import React from "react";
import ig from "../images/ig.png";
import fb from "../images/fb.png";
import linkedin from "../images/linkedin.png";
import twiter from "../images/twiter.png";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="https://www.instagram.com/" className="me-4 text-reset" target="_blank" rel="noreferrer">
          <img className="social" src={ig} alt="ig" style={{height:"20px",width:"20px", margin:"5px"}}/>
          </a>
          <a href="https://www.instagram.com/" className="me-4 text-reset" target="_blank" rel="noreferrer">
          <img className="social" src={fb} alt="fb" style={{height:"20px",width:"20px", margin:"5px"}}/>
          </a>
          <a href="https://www.instagram.com/" className="me-4 text-reset"  target="_blank" rel="noreferrer">
          <img className="social" src={linkedin} alt="linkedin" style={{height:"20px",width:"20px", margin:"5px"}}/>
          </a>
          <a href="https://www.instagram.com/" className="me-4 text-reset"  target="_blank" rel="noreferrer">
          <img className="social" src={twiter} alt="twiter" style={{height:"20px",width:"20px", margin:"5px"}}/>
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                DCE Darbhanga
              </h6>
              <p>
                DCE is a government owned engineering college in Bihar, India,
                inaugurated by Nitish Kumar(Chief Minister of Bihar) ESTD in
                2008. It is affiliated with the Aryabhata Knowledge University,
                Patna. It was previously known as Jagannath Mishra Institute of
                Technology(JMIT). In 2008 it reopened with a new name, Darbhanga
                College of Engineering, under Lalit Narayan Mithila
                University(LNMU). In 2011, it became a member of the AKU
                University.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
              <p>
                <Link to="Admission" className="text-reset">
                  Admission
                </Link>
              </p>
              <p>
                <Link to="/Disciplinary Rule" className="text-reset">
                  Disciplinary Rule
                </Link>
              </p>
              <p>
                <Link to="Anti Ragging" className="text-reset">
                 Anti Ragging
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Email Directory
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                 Placement
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <Link to="/" className="text-reset">
                  CSE
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  EEE
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  ME
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  CE
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Human & Science
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Darbhanga College of Engineering,Mabbi
              </p>
              <p>
              <MDBIcon icon="home" className="me-2" />
                P.O. Lal Sahpur, Darbhanga,Bihar–846005
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
          DCE,Darbhanga
      </div>
    </MDBFooter>
  );
}
