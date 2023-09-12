import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes.js';
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx';

const WebsiteRoutes = () => {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
            {PublicRoutes.map(({path, element, key}) =>{
                return <Route path={path} element={element} key={key} />
                })
            }
            </Routes>
        <Footer />  
        </BrowserRouter>
    );
};

export default WebsiteRoutes;