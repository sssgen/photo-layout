import React, { useState } from 'react';
import MainButton from '../../components/UI/MainButton/MainButton';
import emailIcon from '../../images/emailIcon.png';
import phoneIcon from '../../images/phoneIcon.png';
import placeIcon from '../../images/placeIcon.png';
import './ContactUs.scss';

const ContactUs = () => {
    
    function submitForm(e){
        e.preventDefault()
        console.log(username, email)
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className='contactWrapper'>
            <div className='contactAddress'>
                <h1>Contacts</h1>
                <p><img src={placeIcon} alt='location'/>Kyiv, lorem ipsum 22-a</p>
                <p><img src={phoneIcon} alt='phone number'/>+380 98 888 8888</p>
                <p><img src={emailIcon} alt='email'/>kyivprint@gmail.com</p> 
            </div>
            <form className='contactForm' onSubmit={(e) => submitForm(e)}>
                <input 
                    type='text'
                    required='required'
                    placeholder='Username..'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type='email'
                    required='required'
                    placeholder='Email..'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <MainButton onClick={()=> submitForm() }>Send</MainButton>
            </form>
        </div>
    );  
};

export default ContactUs;