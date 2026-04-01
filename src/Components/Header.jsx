// import React from 'react';
// import ILogo from '../assets/inlingo-removebg.png';
// import { Link, NavLink, useNavigate } from 'react-router';
// import useAuthContext from '../Hooks/useAuthContext';
// import { Tooltip } from 'react-tooltip';
// import { Bounce, toast } from 'react-toastify';

// const Header = () => {
//     const { user, SignOutUser } = useAuthContext();
//     const navigate = useNavigate();
//     const links = <>
//         <li><NavLink to="/" className="font-semibold text-[16px]">Home</NavLink></li>
//         {
//             !user &&
//             <li><NavLink to="/findTutors" className="font-semibold text-[16px]">Find Tutors</NavLink></li>
//         }
//         {
//             user &&
//             <>
//                 <li>
//                     <details>
//                     <summary className="font-semibold text-[16px]">Tutors</summary>
//                     <ul className="w-40">
//                         <li><NavLink to="/findTutors" className="font-semibold text-[16px]">Find Tutors</NavLink></li>
//                         <li><NavLink to="/addTutorials" className="font-semibold text-[16px]">Add Tutorials</NavLink></li>
//                         <li><NavLink to="/myTutorials" className="font-semibold text-[16px]">My Tutorials</NavLink></li>
//                         <li><NavLink to="/myBookedTutors" className="font-semibold text-[16px]">My booked Tutors</NavLink></li>
//                     </ul>
//                     </details>
//                 </li>
//             </>
//         }
//         <li><NavLink to="/aboutUs" className="font-semibold text-[16px]">About Us</NavLink></li>
//         <li><NavLink to="/blogs" className="font-semibold text-[16px]">Blogs</NavLink></li>
//         <li><NavLink to="/subscription" className="font-semibold text-[16px]">Subscription</NavLink></li>
//         </>
//     const handleSignOut = () => {
//         SignOutUser()
//         .then(() => {
//             toast.success('Signout successfully', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: false,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//                 transition: Bounce,
//             });
//             navigate("/");
//         })
//         .catch((error) => {
//             toast.error(`${error.message}`, {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: false,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//                 transition: Bounce,
//             })
//         })
//     };

//     return (
//         <div className="navbar mb-2 md:mb-5 sticky top-0 z-30 bg-secondary md:px-[5%]">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                 </div>
//                     <ul
//                         tabIndex={0}
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                         {links}
//                     </ul>
//                 </div>
//                 <a className="text-xl md:text-4xl font-semibold flex items-center">
//                     <img src={ILogo} alt="" className='w-10 md:w-16'/>
//                     <span className='animate-pulse'>Inlingo</span>
//                 </a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {links}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 {/* <label className="toggle text-base-content mr-3">
//                     <input type="checkbox" value="synthwave" className="theme-controller" onClick={toggleTheme} />

//                     <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

//                     <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
//                 </label> */}
//                 {
//                     user ?
//                     <div className='flex gap-1 md:gap-2 items-center'>
//                         <img src={user?.photoURL} data-tooltip-id="my-tooltip" referrerPolicy='no-referrer' alt="" className='w-8 h-8 md:w-12 md:h-12 border border-gray-400 rounded-full cursor-pointer'/>
//                         <Tooltip id="my-tooltip" className='z-10'>
//                             <h3>{user?.displayName}</h3>
//                         </Tooltip>
//                         <button onClick={handleSignOut} className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9]'>Logout</button>
//                     </div> :
//                     <Link to="/login" className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9]'>Login</Link>
//                 }
//             </div>
//         </div>
//     );
// };

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import ILogo from "../assets/inlingo-removebg.png";
import { Link, NavLink, useNavigate } from "react-router";
import useAuthContext from "../Hooks/useAuthContext";
import { Bounce, toast } from "react-toastify";

const Header = () => {
    const { user, SignOutUser } = useAuthContext();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [tutorsOpen, setTutorsOpen] = useState(false);
    const tutorRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const handleOutside = (e) => {
            if (tutorRef.current && !tutorRef.current.contains(e.target)) {
                setTutorsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, []);

    const handleSignOut = () => {
        SignOutUser()
            .then(() => {
                toast.success("Signed out successfully", {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "light",
                    transition: Bounce,
                });
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                    transition: Bounce,
                });
            });
    };

    const navLinkClass = ({ isActive }) =>
        `text-sm font-medium tracking-wide transition-colors duration-200 relative pb-0.5
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full
        after:bg-[#7F3D27] after:transition-all after:duration-300
        ${
            isActive
                ? "text-[#7F3D27] after:w-full"
                : "text-base-content/60 hover:text-[#7F3D27] after:w-0 hover:after:w-full"
        }`;

    const tutorSubLinks = [
        { to: "/findTutors", label: "Find Tutors" },
        { to: "/addTutorials", label: "Add Tutorials" },
        { to: "/myTutorials", label: "My Tutorials" },
        { to: "/myBookedTutors", label: "Booked Tutors" },
    ];

    const closeDrawer = () => {
        document.getElementById("mobile-drawer").checked = false;
    };

    const drawerLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                        `font-medium text-[15px] rounded-lg transition-colors ${isActive ? "text-[#7F3D27] bg-[#7F3D27]/10" : "hover:bg-base-200"}`
                    }
                >
                    Home
                </NavLink>
            </li>

            {!user && (
                <li>
                    <NavLink
                        to="/findTutors"
                        onClick={closeDrawer}
                        className={({ isActive }) =>
                            `font-medium text-[15px] rounded-lg transition-colors ${isActive ? "text-[#7F3D27] bg-[#7F3D27]/10" : "hover:bg-base-200"}`
                        }
                    >
                        Find Tutors
                    </NavLink>
                </li>
            )}

            {user && (
                <li>
                    <details>
                        <summary className="font-medium text-[15px] rounded-lg hover:bg-base-200">
                            Tutors
                        </summary>
                        <ul className="pl-4 mt-1 space-y-0.5">
                            {tutorSubLinks.map(({ to, label }) => (
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        onClick={closeDrawer}
                                        className={({ isActive }) =>
                                            `text-[14px] font-medium rounded-lg transition-colors ${isActive ? "text-[#7F3D27] bg-[#7F3D27]/10" : "hover:bg-base-200"}`
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </details>
                </li>
            )}

            <li>
                <NavLink
                    to="/aboutUs"
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                        `font-medium text-[15px] rounded-lg transition-colors ${isActive ? "text-[#7F3D27] bg-[#7F3D27]/10" : "hover:bg-base-200"}`
                    }
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/blogs"
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                        `font-medium text-[15px] rounded-lg transition-colors ${isActive ? "text-[#7F3D27] bg-[#7F3D27]/10" : "hover:bg-base-200"}`
                    }
                >
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/subscription"
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                        `font-medium text-[15px] rounded-lg transition-colors ${isActive ? "text-[#7F3D27] bg-[#7F3D27]/10" : "hover:bg-base-200"}`
                    }
                >
                    Subscription
                </NavLink>
            </li>
        </>
    );

    return (
        <div
            className={`sticky top-0 z-30 transition-all duration-300 ${scrolled ? "shadow-sm backdrop-blur-md bg-base-100/90" : "bg-base-100"}`}
        >
            <div className="navbar max-w-7xl mx-auto px-4 md:px-6 min-h-[64px]">
                {/* ── Navbar Start ── */}
                <div className="navbar-start gap-2">
                    {/* Mobile Drawer */}
                    <div className="drawer lg:hidden">
                        <input
                            id="mobile-drawer"
                            type="checkbox"
                            className="drawer-toggle"
                        />
                        <div className="drawer-content">
                            <label
                                htmlFor="mobile-drawer"
                                className="btn btn-ghost btn-sm btn-square"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                        </div>

                        <div className="drawer-side z-50">
                            <label
                                htmlFor="mobile-drawer"
                                aria-label="close sidebar"
                                className="drawer-overlay"
                            />
                            <div className="min-h-full w-72 bg-base-100 flex flex-col">
                                {/* Drawer Header */}
                                <div className="flex items-center gap-3 px-5 py-5 border-b border-base-200">
                                    <img
                                        src={ILogo}
                                        alt="Inlingo"
                                        className="w-9 h-9 object-contain"
                                    />
                                    <span className="text-2xl font-bold text-[#7F3D27] tracking-wide">
                                        Inlingo
                                    </span>
                                </div>

                                {/* Drawer Nav */}
                                <ul className="menu p-4 gap-0.5 flex-1">
                                    {drawerLinks}
                                </ul>

                                {/* Drawer Footer */}
                                <div className="p-4 border-t border-base-200">
                                    {user ? (
                                        <>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="avatar">
                                                    <div className="w-9 rounded-full ring-2 ring-[#C4896F] ring-offset-base-100 ring-offset-1">
                                                        <img
                                                            src={user?.photoURL}
                                                            referrerPolicy="no-referrer"
                                                            alt={
                                                                user?.displayName
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-semibold truncate">
                                                        {user?.displayName}
                                                    </p>
                                                    <p className="text-xs text-base-content/50 truncate">
                                                        {user?.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    closeDrawer();
                                                    handleSignOut();
                                                }}
                                                className="btn btn-sm w-full border-[#7F3D27] text-[#7F3D27] bg-transparent hover:bg-[#7F3D27] hover:text-white hover:border-[#7F3D27]"
                                            >
                                                Sign out
                                            </button>
                                        </>
                                    ) : (
                                        <Link
                                            to="/login"
                                            onClick={closeDrawer}
                                            className="btn btn-sm w-full bg-[#7F3D27] text-white border-[#7F3D27] hover:bg-[#6a3220] hover:border-[#6a3220]"
                                        >
                                            Sign in
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2.5">
                        <img
                            src={ILogo}
                            alt="Inlingo"
                            className="w-9 h-9 md:w-10 md:h-10 object-contain"
                        />
                        <span className="text-[22px] md:text-[26px] font-bold text-[#7F3D27] tracking-wide leading-none">
                            Inlingo
                        </span>
                    </Link>
                </div>

                {/* ── Navbar Center — Desktop nav ── */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 px-0">
                        <li>
                            <NavLink to="/" className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>

                        {!user && (
                            <li>
                                <NavLink
                                    to="/findTutors"
                                    className={navLinkClass}
                                >
                                    Find Tutors
                                </NavLink>
                            </li>
                        )}

                        {user && (
                            <li ref={tutorRef} className="relative">
                                <button
                                    onClick={() => setTutorsOpen((v) => !v)}
                                    className={`text-sm font-medium tracking-wide flex items-center gap-1.5 transition-colors duration-200 bg-transparent hover:bg-transparent border-none px-3 py-2 focus:outline-none rounded-lg
                                    ${tutorsOpen ? "text-[#7F3D27]" : "text-base-content/60 hover:text-[#7F3D27]"}`}
                                >
                                    Tutors
                                    <svg
                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${tutorsOpen ? "rotate-180" : ""}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>

                                {tutorsOpen && (
                                    <ul className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 menu bg-base-100 rounded-xl shadow-lg border border-base-200 w-52 p-1.5 z-50">
                                        {tutorSubLinks.map(({ to, label }) => (
                                            <li key={to}>
                                                <NavLink
                                                    to={to}
                                                    onClick={() =>
                                                        setTutorsOpen(false)
                                                    }
                                                    className={({ isActive }) =>
                                                        `text-[13.5px] font-medium rounded-lg py-2 transition-colors ${isActive ? "text-[#7F3D27] bg-[#7F3D27]/10" : "hover:bg-base-200"}`
                                                    }
                                                >
                                                    {label}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )}

                        <li>
                            <NavLink to="/aboutUs" className={navLinkClass}>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs" className={navLinkClass}>
                                Blogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/subscription"
                                className={navLinkClass}
                            >
                                Subscription
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* ── Navbar End ── */}
                <div className="navbar-end gap-3">
                    {user ? (
                        <div className="flex items-center gap-2 md:gap-3">
                            <div
                                className="tooltip tooltip-bottom"
                                data-tip={user?.displayName}
                            >
                                <div className="avatar cursor-pointer">
                                    <div className="w-9 md:w-10 rounded-full ring-2 ring-[#C4896F] ring-offset-base-100 ring-offset-1 hover:scale-105 transition-transform duration-200">
                                        <img
                                            src={user?.photoURL}
                                            referrerPolicy="no-referrer"
                                            alt={user?.displayName}
                                        />
                                    </div>
                                </div>
                            </div>

                            <span className="hidden xl:block text-sm font-medium text-base-content/70 max-w-[100px] truncate">
                                {user?.displayName?.split(" ")[0]}
                            </span>

                            <button
                                onClick={handleSignOut}
                                className="btn btn-sm border-[#7F3D27] text-[#7F3D27] bg-transparent hover:bg-[#7F3D27] hover:text-white hover:border-[#7F3D27] font-medium tracking-wide transition-all duration-200"
                            >
                                Sign out
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="btn btn-sm bg-[#7F3D27] text-white border-[#7F3D27] hover:bg-[#6a3220] hover:border-[#6a3220] font-medium tracking-wide"
                        >
                            Sign in
                        </Link>
                    )}
                </div>
            </div>

            {/* Scroll border accent */}
            <div
                className={`h-px bg-gradient-to-r from-transparent via-[#7F3D27]/20 to-transparent transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    );
};

export default Header;
