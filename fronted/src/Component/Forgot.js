import React, { useState } from 'react'
import './css/Forgot.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Forgot = () => {
    const navigate = useNavigate()

  let [email, setemail] = useState('');
  let [otp, setotp] = useState('');
  let [password, setpassword] = useState('');
  let [error, setError] = useState('');

  let [authmode, setauthmode] = useState("otp")

  const changeAuthMode = () => {
    setauthmode(authmode === "otp" ? "c_otp" : "otp")

    if(!email.trim()){
      alert("please enter your email")
      return;
    }
    axios.post('http://localhost:5000/forget_password', {
      email: email

    }).then(function (response) {

      console.log(response);

      if (response.data.status === "success") {

        alert("successfully sent otp in your register email address")
        if (authmode === "c_otp") {
          setauthmode(authmode === "c_otp" ? "new-otp" : "otp")
        }
      }
      else {
        alert("Check your email address")
      }
    }).catch(function (error) {
      console.log(error);
    })

  }

  const changeAuthMode1 = () => {
    if(!email.trim()){
      alert("please enter your email")
      return;
    }
    axios.post('http://localhost:5000/check_otp', {
      email: email,
      otp: otp,
      password: password

    }).then(function (response) {

      console.log(response);

      if (response.data.status === "password change successfully") {
        navigate("/")
        alert("successfully changed your password")

      }
      else {
        alert("Check your otp")
      }
    }).catch(function (error) {
      // handle error
      console.log(error);
    })

  }

  if (authmode === "otp") {

    return (
      <>
      {console.log("good")}
        <div className="Auth-form-container main">
          <div className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">forget password</h3>
              <div className="form-group mt-3">
                <label>enter email address</label>
                <input
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>

              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" onClick={changeAuthMode}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="Auth-form-container main">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">change password</h3>
            <div className="form-group mt-3">
              <label>Enter email</label>
              <input
                type="email"
                onChange={(e) => setemail(e.target.value)}
                className="form-control mt-1"
                placeholder="enter password"
              />
            </div>
            <div className="form-group mt-3">
              <label>enter otp</label>
              <input
                type="text"
                onChange={(e) => setotp(e.target.value)}
                className="form-control mt-1"
                placeholder="enter otp"
              />
            </div>
            <div className="form-group mt-3">
              <label>enter new password</label>
              <input
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                className="form-control mt-1"
                placeholder="enter new password"
              />
            </div>

            <div className="d-grid gap-2 mt-3 btn">
              {/* <button type="submit" className="btn btn-primary"> */}
              <Link className="btn btn-primary text-white" onClick={changeAuthMode1} >Submit</Link>
              {/* </button> */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
