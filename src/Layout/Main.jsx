import React from 'react';
import Navbar from '../component/shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;