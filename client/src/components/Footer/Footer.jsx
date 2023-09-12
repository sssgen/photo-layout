import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerMain}>
                
            </div>
            <div className={styles.footerLinks}>
                <h3>For customer</h3>
                <Link>Price</Link>
                <Link>Reviews</Link>
                <Link>Contacts</Link>
                <Link>Delivery</Link>
                <Link>Master</Link>
            </div>
            <div className={styles.footerLinks}>
                <h3>Production</h3>
                <Link>Services</Link>
                <Link>Irregular pictures</Link>
                <Link>Board games</Link>
            </div>
            <div className={styles.footerContact}>

            </div>
        </div>
    );
};

export default Footer;