import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import useAuthContext from '../Hooks/useAuthContext';

const FindTutors = () => {
    const {search, setSearch} = useAuthContext();
    const loadTutors = useLoaderData();
    const [tutors, setTutors] = useState(loadTutors);

    useEffect(() => {
        const searchData = search.toLowerCase();
        axios.get(`http://localhost:3000/tutors?language=${searchData}`)
        .then((result) => {
            setTutors(result.data)
        })
        .catch((error) => {
            toast.error(`${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        })
    }, [search]);

    return (
        <div>
            <h2 className='text-center text-4xl font-semibold mb-5 text-[#7F3D27] py-5 rounded-md'>Find the right tutor for you.</h2>
            <div className='w-fit mx-auto mb-5 md:mb-10'>
                <input type="search" defaultValue={search} onChange={(e) => setSearch(e.target.value)} name="search" id="" placeholder='Find tutors by language' className='input min-w-[calc(100vw-40px)] md:min-w-[calc(100vw-400px)] mx-auto'/>
            </div>
            <div className='flex flex-col gap-5 my-10'>
                {
                    tutors.map((tutor) => 
                    <div key={tutor._id} className='border-2 border-gray-400 p-5 xl:p-7 rounded-xl flex flex-col md:flex-row items-center gap-10'>
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
                            <p>{tutor.description}</p>
                            <Link to={`/tutor/${tutor._id}`} className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9] w-full'>View Details</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FindTutors;