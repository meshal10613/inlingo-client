import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Bounce, toast } from 'react-toastify';

export const Stats = () => {
    //user
    const [users, setUsers] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:3000/users?user=user")
        .then((result) => {
            setUsers(result.data)
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
    }, [users]);
    //tutor
    const [tutor, setTutor] = useState(null);
        useEffect(() => {
        axios.get("http://localhost:3000/tutors?tutor=tutor")
        .then((result) => {
            setTutor(result.data)
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
    }, [tutor]);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:py-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                <div className="text-center border-2 border-gray-400 py-10 rounded-md shadow-md hover:shadow-2xl">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        <CountUp end={tutor} duration={5}/>
                    </h6>
                    <p className="font-bold">Experienced tutors</p>
                </div>
                <div className="text-center border-2 border-gray-400 py-10 rounded-md shadow-md hover:shadow-2xl">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        <CountUp end={100} duration={5}/>
                    </h6>
                    <p className="font-bold">tutor reviews</p>
                </div>
                <div className="text-center border-2 border-gray-400 py-10 rounded-md shadow-md hover:shadow-2xl">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        <CountUp end={100} duration={5}/>
                    </h6>
                    <p className="font-bold">Languages</p>
                </div>
                <div className="text-center border-2 border-gray-400 py-10 rounded-md shadow-md hover:shadow-2xl">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        <CountUp end={users} duration={5}/>
                    </h6>
                    <p className="font-bold">Users</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;