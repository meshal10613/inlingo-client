import React from 'react';
import ILogo from '../assets/inlingo-removebg.png';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const Footer = () => {
    return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 bg-secondary">
        <div className="flex flex-col md:flex-row items-baseline justify-between pb-10 space-y-10">
        <div className="">
            <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
            >
            <img src={ILogo} alt="" className='w-16'/>
            <span className=''>Inlingo</span>
            </a>
            <div className="mt-6 lg:max-w-sm">
            {/* <p className="text-sm text-gray-800">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm text-gray-800">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
            </p> */}
            <div className="flex">
                <p className="mr-1 text-gray-800">Phone:</p>
                <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                +880 1764 447574
                </a>
            </div>
            <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                syedmohiuddinmeshal24@gmail.com
                </a>
            </div>
            </div>
        </div>
        <div className="space-y-2 text-sm">
            <h6 className="text-base font-bold tracking-wide text-gray-900">Useful Links</h6>
            <div className="grid grid-flow-col gap-4">
                <ul>
                    <li><NavLink to="/" className="font-semibold">Home</NavLink></li>
                    <li><NavLink to="/findTutors" className="font-semibold">Find Tutors</NavLink></li>
                    <li><NavLink to="/addTutorials" className="font-semibold">Add Tutorials</NavLink></li>
                    <li><NavLink to="/myTutorials" className="font-semibold">My Tutorials</NavLink></li>
                    <li><NavLink to="/myBookedTutors" className="font-semibold">My booked Tutors</NavLink></li>
                </ul>
            </div>
        </div>
        <div>
            <div className="">
            <span className="text-base font-bold tracking-wide text-gray-900">
                Subscribe for updates
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
                <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                <button
                type="submit"
                className='btn h-12 border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9] items-center'
                >
                Subscribe
                </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
                Subcribe for upcoming offer, event & updates
            </p>
            </div>
        </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-5 md:pb-10 border-t-2 border-t-gray-400 lg:flex-row">
        <p className="text-sm text-gray-600">
            © Copyright 2025 Inlingo. All rights reserved.
        </p>
        <ul className="flex mb-3 space-y-2 lg:mb-0 sm:space-y-0 space-x-5">
            <li><Link to="https://www.facebook.com/meshal.67/" target='_blank'>
                <FaFacebook size={25} className='text-blue-600 cursor-pointer'/>
            </Link></li>
            <li><Link to="https://www.linkedin.com/in/10613-meshal" target='_blank'>
                <FaLinkedin size={25} className='text-blue-700 cursor-pointer'/>
            </Link></li>
            <li><Link to="https://github.com/meshal10613" target='_blank'>
                <FaGithub size={25} className='cursor-pointer'/>
            </Link></li>
        </ul>
        </div>
    </div>
    );
};

export default Footer;