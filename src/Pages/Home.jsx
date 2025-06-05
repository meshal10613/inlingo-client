import React from 'react';
import LanguageCategory from '../Components/LanguageCategory';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            <Banner/>
            <LanguageCategory/>
        </div>
    );
};

export default Home;