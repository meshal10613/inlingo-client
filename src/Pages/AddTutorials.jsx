import React from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

const AddTutorials = () => {
    const {user} = useAuthContext();

    const handleNewTutorial = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const tutorData = Object.fromEntries(formData.entries());

        axios.post("http://localhost:3000/tutors", tutorData, {
            withCredentials: true
        })
        .then((result) => {
            if(result.data.insertedId){
                toast.success('Tutor added successfully', {
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
            })
        })
    };

    return (
        <div className='md:w-9/12 mx-auto shadow-xl mt-5 md:mt-10 p-5 md:p-10 rounded-md'>
            <h2 className='text-center text-4xl font-semibold mb-5 bg-[#D9D9D9] text-[#7F3D27] py-5 rounded-md'>Add a new tutorial!</h2>
            <div>
                <form onSubmit={handleNewTutorial} className='space-y-5'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                        {/* name */}
                        <div className='flex flex-col gap-1 w-full'>
                            <label className="label">Name</label>
                            <input type="text" name='tutorName' defaultValue={user?.displayName} className="input w-full" placeholder="Enter Your Name" readOnly/>
                        </div>
                        {/* email */}
                        <div className='flex flex-col gap-1 w-full'>
                            <label className="label">Email</label>
                            <input type="email" name='tutorEmail' defaultValue={user?.email} className="input w-full" placeholder="Enter Your Email" readOnly/>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                        {/* photo */}
                        <div className='flex flex-col gap-1 w-full'>
                            <label className="label">Photo URL</label>
                            <input type="text" name='photoURL' className="input w-full" placeholder="Enter Your Photo URL" />
                        </div>
                        {/* email */}
                        <div className='flex flex-col gap-1 w-full'>
                            <label className="label">Language</label>
                            <input type="text" name='language' className="input w-full" placeholder="Enter Language" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                        {/* price */}
                        <div className='flex flex-col gap-1 w-full'>
                            <label className="label">Price</label>
                            <input type="text" name='price' className="input w-full" placeholder="Enter Price" />
                        </div>
                        {/* rating */}
                        <div className='flex flex-col gap-1 w-full'>
                            <label className="label">Rating</label>
                            <input type="text" defaultValue={0} name='rating' className="input w-full" placeholder="Enter Rating" readOnly/>
                        </div>
                    </div>
                    {/* description */}
                    <div className='flex flex-col gap-1 w-full'>
                        <label className="label">Description</label>
                        <input type='text' name='description' className="input w-full textarea" placeholder="Enter Description"/>
                    </div>
                    <button type='submit' className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9] w-full'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddTutorials;