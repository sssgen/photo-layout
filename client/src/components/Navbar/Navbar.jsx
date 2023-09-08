import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbarWrapper'>
            <div className='navbar'>
                <div className='navbarLogo'>
                <h1>DimonSosal</h1>
                </div>
                <div className='navbarLinks'>
                    <a className='navbarLink' href="#">Our service</a>
                    <a className='navbarLink' href="#">Pricelist</a>
                    <a className='navbarLink' href="#">Reviews</a>
                    <a className='navbarLink' href="#">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;