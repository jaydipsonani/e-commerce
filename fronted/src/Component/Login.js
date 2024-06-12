import axios from 'axios';
import './css/Login.css';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export const Login = () => {

    const navigate = useNavigate(' ')

    let [email, setemail] = useState('');
    let [password, setpassword] = useState('');
    let [type, setType] = useState('password')
    let [error, setError] = useState('');

    const show = () => {
      type === "password" ? setType("text") : setType("password");
    }
  
    const btnhandler = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/login', {
          email: email,
          password: password
      });
      console.log(response.data);

      if (response.data.status === "success") {
        localStorage.setItem('token', response.data.token);
        navigate("/Home");
        
      }
      if (response.data.status === "user not found") {
        setError(response.data.status);
        alert("user not found")
     
      }
      if (response.data.status === "check_password") {
        setError(response.data.status);
        alert("check your password")

      }
      if (response.data.status === "user already logged in") {
        alert("user already logged in ")
      }

      } catch (error) {
        console.log(error);
      }
      handleClear();

    }

    const handleClear = () => {
      setemail('')
      setpassword('')
    }

  return (
    <div className='hello'>
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setemail(e.target.value) }}
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-2">
              <label>Password</label>
              <input
                type={type}
                value={password}
                onChange={(e) => { setpassword(e.target.value) }}
                className="form-control mt-1"
                placeholder="Enter password"
              />

              <input className='input' onClick={show} type='checkbox'/> show password

            </div>
            <div className="d-grid gap-2 mt-2">
              <button className='btn btn-primary' onClick={btnhandler} >Submit</button>
            </div>
            <p className='mt-3'><a href='#'><Link to="/register">you don't have any account?</Link></a></p>
            <p className="forgot-password text-right mt-2">
              <a href="#"><Link to="/forget">Forgot password?</Link></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
