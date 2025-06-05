import React from 'react';
import { Link } from 'react-router';
import EmptyImg from '../assets/alert-error.png'

const BookedEmptyState = () => {
    return (
        <div id="lesson-default" class="text-center bg-[#D9D9D9] py-16 rounded-2xl space-y-2 md:space-y-3 my-10">
            <img className="inline-flex justify-center items-center w-fit" src={EmptyImg} alt=""/>
            <p className="opacity-80">You haven't booked any tutors yet</p>
            <h1 className="text-3xl font-medium">Please Book a Tutor</h1>
            <Link to="/findTutors" className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9]'>Book a Tutor</Link>
        </div>
    );
};

export default BookedEmptyState;