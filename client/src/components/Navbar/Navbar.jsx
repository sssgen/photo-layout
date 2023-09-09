import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbarWrapper'>
            <div className='navbar'>
                <div className='navbarLinks'>
                    <Link className='navbarLink' to='/' >Main</Link> 
                </div>
                <div className='navbarLinks'>
                    <Link className='navbarLink' to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;