import React from 'react';
import LanguageCategory from '../Components/LanguageCategory';
import Banner from '../Components/Banner';
import Stats from '../Components/Stats';
import HowItWorks from '../Components/HowItWorks';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Stats/>
            <LanguageCategory/>
            <HowItWorks/>
        </div>
    );
};

export default Home;