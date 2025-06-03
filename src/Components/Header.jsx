import React from 'react';
import ILogo from '../assets/inlingo-removebg.png';
import { Link, NavLink } from 'react-router';

const Header = () => {
    const links = <>
        <li><NavLink to="/" className="font-semibold text-[16px]">Home</NavLink></li>
        <li><NavLink to="/findTutors" className="font-semibold text-[16px]">Find tutors</NavLink></li>
        <li><NavLink to="/addTutors" className="font-semibold text-[16px]">Add Tutors</NavLink></li>
        <li><NavLink to="/myTutors" className="font-semibold text-[16px]">My Tutors</NavLink></li>
        <li><NavLink to="/myBookedTutors" className="font-semibold text-[16px]">My booked tutors</NavLink></li>
    </>;
    return (
        <div className="navbar my-2 md:my-5">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-4xl font-semibold flex items-center">
                    <img src={ILogo} alt="" className='w-16'/>
                    <span className='animate-pulse'>Inlingo</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9]'>Login</Link>
            </div>
        </div>
    );
};

export default Header;