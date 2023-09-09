import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx'; 
import { PublicRoutes } from './PublicRoutes.js';

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
        </BrowserRouter>
    );
};

export default WebsiteRoutes;