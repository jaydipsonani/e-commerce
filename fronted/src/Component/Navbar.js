import React, { useState } from 'react'
import '../Component/css/Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import axios from 'axios';

const Navbar = ({ query, setQuery }) => {

    const [isOpen, setIsOpen] = useState(false)

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

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className='static'>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img style={{ height: "50px", width: "100px", border: "none" }} src={require(`../Component/image/i (1).webp`)} alt="Logo" />
                    <input style={{ marginLeft: "20px", borderRadius: "5px" }} value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder='search here' />
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <IoMdMenu />
                </div>
                <ul className={`offcanvas-menu ${isOpen ? 'open' : ''}`}>
                    <li><Link onClick={closeMenu} to="/Home">Home</Link></li>
                    <li><Link onClick={closeMenu} to="/about">About</Link></li>
                    <li><Link onClick={closeMenu} to="/service">Services</Link></li>
                    <li><Link onClick={closeMenu} to="/cart"><FaShoppingCart /></Link></li>
                    <li><div className='btn btn-warning text-dark' onClick={btnHandler}>Log out</div></li>
                </ul>
            </nav>
        

        </div>
    )
}

export default Navbar