import React from 'react';
import ILogo from '../assets/inlingo-removebg.png';
import { Link, NavLink, useNavigate } from 'react-router';
import useAuthContext from '../Hooks/useAuthContext';
import { Tooltip } from 'react-tooltip';
import { Bounce, toast } from 'react-toastify';

const Header = () => {
    const { user, SignOutUser } = useAuthContext();
    const navigate = useNavigate();
    const links = <>
        <li><NavLink to="/" className="font-semibold text-[16px]">Home</NavLink></li>
        <li><NavLink to="/findTutors" className="font-semibold text-[16px]">Find tutors</NavLink></li>
        <li><NavLink to="/addTutors" className="font-semibold text-[16px]">Add Tutors</NavLink></li>
        <li><NavLink to="/myTutors" className="font-semibold text-[16px]">My Tutors</NavLink></li>
        <li><NavLink to="/myBookedTutors" className="font-semibold text-[16px]">My booked tutors</NavLink></li>
    </>;

    const handleSignOut = () => {
        SignOutUser()
        .then(() => {
            toast.success('Signout successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            navigate("/");
        })
        .catch((error) => {
            toast.error(`${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        })
    };

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
                {
                    user ? 
                    <div className='flex gap-1 items-center'>
                        <img src={user?.photoURL} data-tooltip-id="my-tooltip" referrerPolicy='no-referrer' alt="" className='w-12 h-12 border border-gray-400 rounded-full cursor-pointer'/>
                        <Tooltip id="my-tooltip" className='z-10'>
                            <h3>{user?.displayName}</h3>
                        </Tooltip>
                        <button onClick={handleSignOut} className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9]'>Logout</button>
                    </div> :
                    <Link to="/login" className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9]'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;