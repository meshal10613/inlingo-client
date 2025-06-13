import React from 'react';
import LanguageCategory from '../Components/LanguageCategory';
import Banner from '../Components/Banner';
import Stats from '../Components/Stats';
import HowItWorks from '../Components/HowItWorks';
import FAQ from '../Components/FAQ';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Stats/>
            <LanguageCategory/>
            <FAQ/>
            <HowItWorks/>
        </div>
    );
};

export default Home;