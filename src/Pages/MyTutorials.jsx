import React, { Suspense } from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import TutorialIAdd from '../Components/TutorialIAdd';
// import MyTutorialsPromise from '../API/MyTutorialsPromise';
import Loading from './Loading';

const MyTutorials = () => {
    const {user} = useAuthContext();
    const MyTutorialsPromise = fetch(`http://localhost:3000/tutors?email=${user?.email}`).then(res => res.json())
    return (
        <div>
            <Suspense fallback={<Loading/>}>
                <TutorialIAdd MyTutorialsPromise={MyTutorialsPromise}/>
            </Suspense>
        </div>
    );
};

export default MyTutorials;