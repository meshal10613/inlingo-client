import React from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import useAuthContext from '../Hooks/useAuthContext';

const TutorDetails = () => {
    const {user} = useAuthContext();
    const tutor = useLoaderData();

    const handleBookTutor = (id) => {
        const bookedData = {
            tutorId: id,
            photoURL: tutor.photoURL,
            language: tutor.language,
            price: tutor.price,
            tutorEmail: tutor.tutorEmail,
            email: user.email,
        };
        console.log(bookedData)
    };

    return (
        <div className='border-2 border-gray-400 p-5 xl:p-7 rounded-xl flex flex-col md:flex-row items-center gap-10 my-5 md:my-20'>
            <div>
                <img src={tutor.photoURL} alt="tutor-img" className='w-40 rounded-md'/>
            </div>
            <div className='space-y-3'>
                <div className='flex gap-4 items-center'>
                    <h2 className='text-2xl font-semibold'>{tutor.tutorName}</h2>
                    <p className='flex items-center gap-1 text-xl'>
                        {tutor.rating} 
                        <FaStar size={20} className='text-yellow-400'/>
                    </p>
                </div>
                <p className='text-[16px]'>Language: {tutor.language}</p>
                <p className='text-xl flex items-center'>
                    {/* <span className='text-xl' size={20}>৳</span> */}
                    <FaDollarSign size={16}/>
                    {tutor.price}
                </p>
                <p>{tutor.description}</p>
                <Link onClick={() => handleBookTutor(tutor._id)} className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9] w-full'>Book Now</Link>
            </div>
        </div>
    );
};

export default TutorDetails;