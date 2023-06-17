import React from 'react';
import Header from '../shared/header/Header';
import Topbar from '../shared/topbar/Topbar';
import Footer from '../shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
         <div className=' relative  -mb-48 z-10'>
         <Topbar></Topbar>
            <Header></Header>
            </div>  
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default MainLayOut;