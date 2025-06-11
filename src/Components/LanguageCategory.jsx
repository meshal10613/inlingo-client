import React from 'react';
import EnglishLogo from '../assets/english-removebg.png'
import { Link, useLoaderData, useNavigate } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import useAuthContext from '../Hooks/useAuthContext';


const LanguageCategory = () => {
    const {setSearch} = useAuthContext();
    const allTutors = useLoaderData();
    const navigate = useNavigate();
    console.log(allTutors);

    const uniqueTutors = [];
    const seenLanguages = new Set();
    for (const tutor of allTutors) {
        if (!seenLanguages.has(tutor.language)) {
            seenLanguages.add(tutor.language);
            uniqueTutors.push(tutor);
        }
    }
    console.log(uniqueTutors)

    const handleLanguageCategory = (tutor) => {
        navigate("/findTutors")
        setSearch(tutor.language)
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mx-auto gap-10'>
            {
                uniqueTutors.map((tutor) => 
                <div onClick={() => handleLanguageCategory(tutor)} key={tutor._id} className='border-2 border-gray-400 rounded-md p-5 flex gap-5 justify-between items-center cursor-pointer transition-all hover:-translate-y-1'>
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