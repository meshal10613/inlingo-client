import React, { Suspense } from 'react';
import Loading from './Loading';
import TutorsIBooked from './TutorsIBooked';
import useAuthContext from '../Hooks/useAuthContext';

const MyBookedTutors = () => {
    const {user} = useAuthContext();
    const MyBookedTutorsPromise = fetch(`http://localhost:3000/booked-tutors?email=${user?.email}`).then(res => res.json())
    return (
        <div>
            <Suspense fallback={<Loading/>}>
                <TutorsIBooked MyBookedTutorsPromise={MyBookedTutorsPromise}/>
            </Suspense>
        </div>
    );
};

export default MyBookedTutors;