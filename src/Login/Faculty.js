import React from 'react'
import "./Faculty.css";
import { FaShareAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { LuLogIn } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";

export default function Faculty() {
  return (
    <>
      <div className="header_div">
        <div className="header_div1">Faculty Login</div>
        <div className="header_div2">
          <FaShareAlt /> Share <CiFacebook /> <CiTwitter />
        </div>
      </div>
      <div className="body_div">
        <form>
          <div className="form_header">
            <LuLogIn className="loginbutton"/> Faculty Login
          </div>
          <div className="form_body">
            <label htmlFor="Username">Username</label>
            <input type="text"></input>
            <label htmlFor="Password">Password</label>
            <input type="password"></input>
          </div>

          <div className="form_footer">
            <button>
              <FaCheck />
              Login
            </button>
            <button>
              <FaExclamationCircle />
              Forget Password
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
