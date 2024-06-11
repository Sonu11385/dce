import React from 'react'
import "./Admin.css";

export default function Admin() {
  return (
    <>
    <div className="mainbox">
        <form>
          <div className="username">
            <label htmlFor="username"> Username or E-mail</label>
            <input type="text"></input>
          </div>

          <div className="password">
            <label htmlFor="Password">Password</label>
            <input type="password"></input>
          </div>
          <div className="footer_div">
            <div className="checkbox">
              <label htmlFor="Checkbox">Remember Me</label>
              <input type="checkbox"></input>
            </div>
            <div className="button">
              <button type="button">Login</button>
            </div>
          </div>
        </form>
      </div>
      <div className="footer_para">
      <p>Lost your password</p>
      <p><a href='/'>Go to Home page </a> </p>
      </div>
      </>
  )
}
