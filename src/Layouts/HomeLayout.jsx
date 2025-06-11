import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <Header/>
                <div className='min-h-[calc(100vh-489px)]'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default HomeLayout;