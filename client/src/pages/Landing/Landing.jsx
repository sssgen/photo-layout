import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../../components/UI/MainButton/MainButton';
import './Landing.scss';



const Landing = () => {
    return (
        <div className='landingWrapper'>
            <div className='header'>
                <div className='headerSlider'>
                    <div className='headerInfo'>
                        <h1>Photo printing service</h1>
                        <p>Share bright moments with loved ones</p>
                        <Link to='contact'><MainButton>Contact</MainButton></Link>
                    </div>
                </div>
            </div>
            
            <div></div>
        </div>
    );
};

export default Landing;
