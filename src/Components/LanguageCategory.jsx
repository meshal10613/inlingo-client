import React, { useEffect, useState } from 'react';
import EnglishLogo from '../assets/english-removebg.png'
import { Link, useLoaderData, useNavigate } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import useAuthContext from '../Hooks/useAuthContext';


const LanguageCategory = () => {
    const [showAll, setShowAll] = useState(false);
    const [display, setDisplay] = useState([]);
    const {setSearch} = useAuthContext();
    const allTutors = useLoaderData();
    const navigate = useNavigate();

    const uniqueTutors = [];
    const seenLanguages = new Set();
    for (const tutor of allTutors) {
        if (!seenLanguages.has(tutor.language)) {
            seenLanguages.add(tutor.language);
            uniqueTutors.push(tutor);
        }
    }

    const handleLanguageCategory = (tutor) => {
        navigate("/findTutors");
        setSearch(tutor.language);
    };

    useEffect(() => {
        if(showAll){
            setDisplay(uniqueTutors);
        }else{
            setDisplay(uniqueTutors.slice(0, 9));
        }
    }, [showAll]);

    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mx-auto gap-10'>
                {
                    display.map((tutor) => 
                    <div onClick={() => handleLanguageCategory(tutor)} key={tutor._id} className='border-2 border-gray-400 rounded-md p-5 flex gap-5 justify-between items-center cursor-pointer transition-all hover:-translate-y-1'>
                        <img src={EnglishLogo} alt="" className='w-12 h-12'/>
                        <h2 className='text-2xl font-semibold'>{tutor.language} Tutors</h2>
                        <p><FaArrowRight /></p>
                    </div>
                    )
                }
            </div>
            <div className='my-4'>
                {
                    showAll ?
                    <button onClick={() => setShowAll(!showAll)} className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9]'>Hide All</button> :
                    <button onClick={() => setShowAll(!showAll)} className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9]'>Show All</button>
                }
            </div>
        </div>
    );
};

export default LanguageCategory;