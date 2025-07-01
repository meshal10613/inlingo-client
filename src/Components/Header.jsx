import React from 'react';
import ILogo from '../assets/inlingo-removebg.png';
import { Link, NavLink, useNavigate } from 'react-router';
import useAuthContext from '../Hooks/useAuthContext';
import { Tooltip } from 'react-tooltip';
import { Bounce, toast } from 'react-toastify';

const Header = () => {
    const { user, SignOutUser, toggleTheme } = useAuthContext();
    const navigate = useNavigate();
    const links = <>
        <li><NavLink to="/" className="font-semibold text-[16px]">Home</NavLink></li>
        {
            !user && 
            <li><NavLink to="/findTutors" className="font-semibold text-[16px]">Find Tutors</NavLink></li>
        }
        {
            user && 
            <>
                <li>
                    <details>
                    <summary className="font-semibold text-[16px]">Tutors</summary>
                    <ul className="w-40">
                        <li><NavLink to="/findTutors" className="font-semibold text-[16px]">Find Tutors</NavLink></li>
                        <li><NavLink to="/addTutorials" className="font-semibold text-[16px]">Add Tutorials</NavLink></li>
                        <li><NavLink to="/myTutorials" className="font-semibold text-[16px]">My Tutorials</NavLink></li>
                        <li><NavLink to="/myBookedTutors" className="font-semibold text-[16px]">My booked Tutors</NavLink></li>
                    </ul>
                    </details>
                </li>
            </>
        }
        <li><NavLink to="/aboutUs" className="font-semibold text-[16px]">About Us</NavLink></li>
        <li><NavLink to="/blogs" className="font-semibold text-[16px]">Blogs</NavLink></li>
        <li><NavLink to="/subscription" className="font-semibold text-[16px]">Subscription</NavLink></li>
        </>
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
        <div className="navbar mb-2 md:mb-5 sticky top-0 z-30 bg-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-xl md:text-4xl font-semibold flex items-center">
                    <img src={ILogo} alt="" className='w-10 md:w-16'/>
                    <span className='animate-pulse'>Inlingo</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="toggle text-base-content mr-3">
                    <input type="checkbox" value="synthwave" className="theme-controller" onClick={toggleTheme} />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
                    
                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                </label>
                {
                    user ? 
                    <div className='flex gap-1 md:gap-2 items-center'>
                        <img src={user?.photoURL} data-tooltip-id="my-tooltip" referrerPolicy='no-referrer' alt="" className='w-8 h-8 md:w-12 md:h-12 border border-gray-400 rounded-full cursor-pointer'/>
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