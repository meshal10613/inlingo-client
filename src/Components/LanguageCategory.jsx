import React from 'react';
import EnglishLogo from '../assets/english-removebg.png'
import { useLoaderData } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';

const LanguageCategory = () => {
    const allTutors = useLoaderData();
    console.log(allTutors);
    // let newTutors = [];
    // const filterTutors = allTutors.filterTutors((p) => newTutors.includes(p.language))
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mx-auto gap-10'>
            {
                allTutors.map((tutor) => 
                <div key={tutor._id} className='border-2 border-gray-400 rounded-md p-5 flex gap-5 justify-between items-center cursor-pointer transition-all hover:-translate-y-1'>
                    <img src={EnglishLogo} alt="" className='w-12 h-12'/>
                    <h2 className='text-2xl font-semibold'>{tutor.language} Tutors</h2>
                    <p><FaArrowRight /></p>
                </div>
                )
            }
        </div>
    );
};

export default LanguageCategory;