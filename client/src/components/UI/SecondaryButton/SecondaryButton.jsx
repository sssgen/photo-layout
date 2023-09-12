import React from 'react';
import styles from './SecondaryButton.module.scss';

const SecondaryButton = ({children}) => {
    return (
        <button className={styles.secondary}>
            {children}
        </button>
    );
};

export default SecondaryButton;