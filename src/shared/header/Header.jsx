import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {


    const menu = <>
<NavLink className='npnav '>Home</NavLink>
       <NavLink className='npnav'>About</NavLink>
       <NavLink className='npnav'>Mechinery</NavLink>
       <NavLink className='npnav'>Contact Us</NavLink>
       <NavLink className='npnav'>Media</NavLink>
    </>
    return (
        <div className='w-3/4 flex justify-between items-center mx-auto py-6 '>
           <div className="flex w-full px-4 bg-white py-4 -mx-12 items-center justify-between  ">
  <div className="  ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
     {
        menu
     }
      </ul>
   <img className='w-48' src={logo} alt="" />
    </div>
  </div>
  <div className="navbar-start mr-10 hidden lg:flex">
    <ul className="gap-6 menu-horizontal px-1">
    {menu}
    </ul>
  </div>
 
</div>
<div className="navbar-end bg-np w-40 py-8 px-6 text-white skewed-heading-bg text-center ">
  
      <div class="skewed-heading-content flex items-center">
      <NavLink>GET A QUOTE</NavLink>
     
		</div>
   
  </div>
        </div>
    );
};

export default Header;