
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layout/MainLayOut';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Machineries from '../pages/products/Machineries';
import Media from '../pages/media/Media';


 export const router = createBrowserRouter([
  {  path:'/',
    element: <MainLayOut></MainLayOut>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about-us',
            element:<About></About>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        },
        {
            path:'/all-machinery',
            element:<Machineries></Machineries>
        },
        {
            path:'/media',
            element:<Media></Media>
        },
    ]

}

 ])