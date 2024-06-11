import React from 'react'
import logo from '../images/logo.png'
import "./Title.css";

export default function Title() {
  return (
    <>
     <div className='title'>
      <div className='collegeName' >
        <h2>दरभंगा अभियंत्रण महाविद्यालय,दरभंगा</h2>
        <h3>Darbhanga College of Engineering,Darbhanga</h3>
      </div>
      <div>
        <img src={logo} className="logo" alt="..." />
      </div>
      <div className='detail'>
        <h6>An Institute of Science and Technology Department under the Government of Bihar. <br /> Affiliated by Bihar Engineering University.</h6>
      </div>
    </div>
    </>
  )
}
