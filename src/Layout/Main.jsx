import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/shared/Footer';
import Navbar from "../component/shared/Navbar"

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