import React from 'react';
import styles from './MainButton.module.scss'

const MainButton = ({ children }) => {
    return (
        <button className={styles.main}>
            {children}
        </button>
    );
};

export default MainButton;