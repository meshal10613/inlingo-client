import React from 'react';
import errorImg from '../assets/error.json';
import { Link, useRouteError } from 'react-router';
import Lottie from 'lottie-react';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <div className='w-fit mx-auto h-fit flex flex-col items-center justify-center gap-3 mt-12'>
                    <Lottie animationData={errorImg} loop={true} />
                    <h2 className='text-xl'>{error.error.message}</h2>
                    <Link to="/" className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9]'><FaArrowLeft />Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;