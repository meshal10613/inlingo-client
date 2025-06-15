import axios from 'axios';
import React, { use, useState } from 'react';
import { FaRegEdit, FaStar } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import TutorialsEmptyState from './TutorialsEmptyState';

const TutorialIAdd = ({MyTutorialsPromise}) => {
    const myTutorialsData = use(MyTutorialsPromise);
    const [myTutorials, setMyTutorials] = useState(myTutorialsData);

    if(myTutorials.length < 1){
        return <TutorialsEmptyState/>;
    };

    const handleDeleteTutor = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://assignment-11-server-omega-vert.vercel.app/tutors/${id}`)
                .then((result) => {
                    if(result.data.deletedCount){
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });
                        const remainingTutorials = myTutorialsData.filter((t) => t._id !== id);
                        setMyTutorials(remainingTutorials);
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
                });
            }
        });
    };

    return (
        <div>
            <div className='flex flex-col gap-10'>
                {
                    myTutorials.map((tutorial) => 
                    <div key={tutorial._id} className='flex flex-col md:flex-row items-center justify-between gap-10 border-2 border-gray-400 p-5 md:p-10 rounded-2xl'>
                        <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
                            <img src={tutorial.photoURL} alt="" className='w-52 md:w-40 rounded-md'/>
                            <div className='space-y-1'>
                                <div className='flex gap-4 items-center'>
                                    <h2 className='text-2xl font-semibold'>{tutorial.language}</h2>
                                    <p className='flex items-center gap-1 text-xl'>
                                        {tutorial.rating} 
                                        <FaStar size={20} className='text-yellow-400'/>
                                    </p>
                                </div>
                                <p>{tutorial.price}</p>
                                <p>{tutorial.description}</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <Link to={`/updateTutorial/${tutorial._id}`} className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:scale-90'>Update <FaRegEdit /></Link>
                            <button onClick={() => handleDeleteTutor(tutorial._id)} className='btn text-[16px] border-1 border-[#7F3D27] text-[#7F3D27] bg-[#D9D9D9] transition-all hover:scale-90'>Delete <MdDelete /></button>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default TutorialIAdd;