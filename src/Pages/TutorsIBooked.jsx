import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';
import BookedEmptyState from '../Components/BookedEmptyState';
import useAuthContext from '../Hooks/useAuthContext';

const TutorsIBooked = () => {
    const {user} = useAuthContext();
    const [refresh, setRefresh] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-omega-vert.vercel.app/booked-tutors?email=${user?.email}`,  {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => setRefresh(data));
    }, [refresh]);
    

    const handleReview = (tutor) => {
        // document.getElementById(`${tutor._id}`).style.color="yellow";

        const updatedData = {
            id: tutor.tutorId,
            tutorRating: parseInt(tutor.rating) + 1,
        };
        axios.patch("https://assignment-11-server-omega-vert.vercel.app/booked-tutors", updatedData)
        .then((result) => {
            if(result.data.modifiedCount){
                toast.success(`Review ${tutor.tutorName} successfully`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });  
            }            
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
            });
        })

        axios.get(`https://assignment-11-server-omega-vert.vercel.app/tutors/${tutor.tutorId}`, {
            withCredentials: true
        })
        .then((result) => {
            if(result.data){
                const newUpdatedDoc = {
                    id: result.data._id,
                    rating: parseInt(result.data.rating) + 1
                };
                axios.patch("https://assignment-11-server-omega-vert.vercel.app/tutors", newUpdatedDoc)
                .then((result) => {
                    console.log(result.data)
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
                    });
                })
            }
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
            });
        })
    };

    if(refresh.length < 1){
        return <BookedEmptyState/>;
    };

    return (
        <div>
            <div>
                {
                    refresh.map((tutor) => 
                    <div key={tutor._id} className='border-2 border-gray-400 p-5 xl:p-7 rounded-xl flex items-center justify-between my-5'>
                        <div className='flex items-center gap-4 md:gap-10'>
                            <div>
                                <img src={tutor.photoURL} alt="tutor-img" className='w-28 h-28 md:w-40 md:h-40 rounded-md'/>
                            </div>
                            <div className='space-y-2'>
                                <div className='flex gap-4 items-center'>
                                    <h2 className='text-2xl font-semibold'>{tutor.tutorName}</h2>
                                </div>
                                <p className='text-[16px]'>Language: {tutor.language}</p>
                                <p className='text-[16px]'>Price: {tutor.price}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleReview(tutor)} className='flex items-center gap-2 text-xl border border-gray-400 py-1 px-2 rounded-md cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl'>
                                {tutor.rating} 
                                <FaStar id={tutor._id} size={20} />
                            </button>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default TutorsIBooked;