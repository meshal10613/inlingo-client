import React from 'react';
import BannerImg from '../assets/banner.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import useAuthContext from '../Hooks/useAuthContext';

const Banner = () => {
    const { user } = useAuthContext();
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between my-12 md:my-20'>
            <div className='space-y-4'>
                <h2 className='text-7xl font-bold'>Learn faster with your best language tutor.</h2>
                <Link to={`${user ? "/findTutors" : "/login"}`} className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9]'>Get Started <FaArrowRight /></Link>
            </div>
            <div>
                <Lottie animationData={BannerImg} loop={true} className='w-fit'/>
            </div>
        </div>
    );
};

export default Banner;