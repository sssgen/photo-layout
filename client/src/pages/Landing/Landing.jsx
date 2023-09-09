import React from 'react';
import './Landing.scss'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='landingWrapper'>
            <div className='header'>
                <div className="headerInfo">
                    <h2>Photo printing service</h2>
                    <p>Share bright moments with loved ones</p>
                    <Link to='contact'><button>Contact</button></Link>
                </div>
            </div>
            <h1>Sosal</h1>
        </div>
    );
};

export default Landing;
