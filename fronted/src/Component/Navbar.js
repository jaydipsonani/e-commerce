import React from 'react'
import '../Component/css/Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({query, setQuery}) => {

    const navigate = useNavigate()

    const btnHandler = () => {
        axios.post('http://localhost:5000/logout', {
        })
            .then(function (response) {
                console.log(response.data);
                if (window.confirm('are you sure you want to log out?')) {
                if (response.data.status === "successfully logged out") {
                        navigate("/");
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            localStorage.removeItem('token');
    }

    return (
        <div className='static'>
            <nav className="navbar">
                <div className="navbar-logo">
                   <img style={{height:"50px", width:"100px", border:"none"}} src={require(`../Component/image/i (1).webp`)}/>
                <input style={{marginLeft:"20px", borderRadius:"5px"}} value={query} onChange={(e) => setQuery(e.target.value)}  type="search" placeholder='search here' />
                    </div>
                <ul className="navbar-links">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/cart"><FaShoppingCart></FaShoppingCart></Link></li>
                    <li><div className='btn btn-warning text-dark' onClick={btnHandler}>Log out</div></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar