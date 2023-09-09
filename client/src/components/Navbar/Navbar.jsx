import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbarWrapper'>
            <div className='navbar'>
                <div className='navbarLogo'>
                <h1>DimonSosal</h1>
                </div>
                <div className='navbarLinks'>
                    <Link className='navbarLink' to="/service">Our service</Link>
                    <Link className='navbarLink' to="/price">Pricelist</Link>
                    <Link className='navbarLink' to="/reviews">Reviews</Link>
                    <Link className='navbarLink' to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;