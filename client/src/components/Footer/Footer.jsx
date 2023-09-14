import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerMain}>
                    <Link to='/'>
                        <img className='logo' src={logo} alt='logo'/>
                    </Link>
                    <p> Kyiv, lorem ipsum 22-a </p>
                    <p> kyivprint@gmail.com </p>
                </div>
                <div className={styles.footerLinks}>
                    <h3>For customer</h3>
                    <Link>Price</Link>
                    <Link>Reviews</Link>
                    <Link to='/contact'>Contacts</Link>
                    <Link>Delivery</Link>
                    <Link>Master</Link>
                </div>
                <div className={styles.footerLinks}>
                    <h3>Production</h3>
                    <Link>Services</Link>
                    <Link>Irregular pictures</Link>
                    <Link>Board games</Link>
                </div>
                <div className={styles.footerLinks}>
                    <h3>Call us!</h3>
                    <h4>+380 98 888 8888</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;