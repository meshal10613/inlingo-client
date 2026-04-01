// import React from 'react';
// import { FaDollarSign, FaStar } from 'react-icons/fa';
// import { Link, useLoaderData } from 'react-router';
// import useAuthContext from '../Hooks/useAuthContext';
// import axios from 'axios';
// import { Bounce, toast } from 'react-toastify';

// const TutorDetails = () => {
//     const {user} = useAuthContext();
//     const tutor = useLoaderData();

//     const handleBookTutor = (id) => {
//         const bookedData = {
//             tutorId: id,
//             photoURL: tutor.photoURL,
//             language: tutor.language,
//             price: tutor.price,
//             tutorName: tutor.tutorName,
//             tutorEmail: tutor.tutorEmail,
//             rating: tutor.rating,
//             email: user.email,
//         };
//         axios.post("https://assignment-11-server-omega-vert.vercel.app/booked-tutors", bookedData)
//         .then((result) => {
//             if(result.data.insertedId){
//                 toast.success(`Tutor booked successfully`, {
//                     position: "top-right",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: false,
//                     pauseOnHover: false,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                     transition: Bounce,
//                 })
//             }
//         })
//         .catch((error) => {
//             toast.error(`${error.message}`, {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: false,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//                 transition: Bounce,
//             })
//         })
//     };

//     return (
//         <div className='border-2 border-gray-400 p-5 xl:p-7 rounded-xl flex flex-col md:flex-row items-center gap-10 my-5 md:my-20'>
//             <div>
//                 <img src={tutor.photoURL} alt="tutor-img" className='w-40 rounded-md'/>
//             </div>
//             <div className='space-y-3'>
//                 <div className='flex gap-4 items-center'>
//                     <h2 className='text-2xl font-semibold'>{tutor.tutorName}</h2>
//                     <p className='flex items-center gap-1 text-xl'>
//                         {tutor.rating} 
//                         <FaStar size={20} className='text-yellow-400'/>
//                     </p>
//                 </div>
//                 <p className='text-[16px]'>Language: {tutor.language}</p>
//                 <p className='text-xl flex items-center'>
//                     {/* <span className='text-xl' size={20}>৳</span> */}
//                     <FaDollarSign size={16}/>
//                     {tutor.price}
//                 </p>
//                 <p>{tutor.description}</p>
//                 <Link onClick={() => handleBookTutor(tutor._id)} className='btn text-[16px] border-1 border-[#7F3D27] text-[#D9D9D9] bg-[#7F3D27] transition-all hover:text-[#7F3D27] hover:bg-[#D9D9D9] w-full'>Book Now</Link>
//             </div>
//         </div>
//     );
// };

// export default TutorDetails;


import React from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import useAuthContext from '../Hooks/useAuthContext';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

const TutorDetails = () => {
    const { user } = useAuthContext();
    const tutor = useLoaderData();

    const handleBookTutor = (id) => {
        const bookedData = {
            tutorId: id,
            photoURL: tutor.photoURL,
            language: tutor.language,
            price: tutor.price,
            tutorName: tutor.tutorName,
            tutorEmail: tutor.tutorEmail,
            rating: tutor.rating,
            email: user.email,
        };
        axios.post('https://assignment-11-server-omega-vert.vercel.app/booked-tutors', bookedData)
            .then((result) => {
                if (result.data.insertedId) {
                    toast.success('Tutor booked successfully!', {
                        position: 'top-right',
                        autoClose: 5000,
                        theme: 'light',
                        transition: Bounce,
                    });
                }
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 5000,
                    theme: 'light',
                    transition: Bounce,
                });
            });
    };

    // Render star rating
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <FaStar
                key={i}
                size={15}
                className={i < Math.round(rating) ? 'text-amber-400' : 'text-base-300'}
            />
        ));
    };

    return (
        <div className="my-12 md:my-20 max-w-7xl mx-auto container">

            {/* Main card */}
            <div className="bg-base-100 border border-base-200 rounded-2xl overflow-hidden shadow-sm">

                {/* Top banner strip */}
                <div className="h-24 bg-gradient-to-r from-[#7F3D27] to-[#A05C3E] relative">
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />
                </div>

                <div className="px-6 md:px-10 pb-10">
                    {/* Avatar — overlapping the banner */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-12 mb-8">
                        <div className="avatar">
                            <div className="w-24 md:w-28 rounded-2xl ring-4 ring-base-100 shadow-md">
                                <img src={tutor.photoURL} alt={tutor.tutorName} referrerPolicy="no-referrer" />
                            </div>
                        </div>

                        {/* Price badge — top right on desktop */}
                        <div className="flex items-center gap-1.5 bg-[#7F3D27]/8 border border-[#7F3D27]/20 text-[#7F3D27] rounded-xl px-4 py-2.5 w-fit">
                            <FaDollarSign size={15} />
                            <span className="text-2xl font-bold leading-none">{tutor.price}</span>
                            <span className="text-sm text-[#7F3D27]/60 font-medium">/lesson</span>
                        </div>
                    </div>

                    {/* Name + rating */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-base-content tracking-tight">
                                {tutor.tutorName}
                            </h1>
                            <div className="flex items-center gap-2 mt-1.5">
                                <div className="flex items-center gap-0.5">
                                    {renderStars(tutor.rating)}
                                </div>
                                <span className="text-sm font-semibold text-base-content/70">{tutor.rating}</span>
                                <span className="text-xs text-base-content/40">• Verified Tutor</span>
                            </div>
                        </div>
                    </div>

                    {/* Info chips */}
                    <div className="flex flex-wrap gap-2.5 mb-7">
                        <div className="badge bg-[#7F3D27]/10 text-[#7F3D27] border-0 font-medium text-sm px-3 py-3 rounded-lg gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                            {tutor.language}
                        </div>
                        <div className="badge badge-ghost text-base-content/50 font-medium text-sm px-3 py-3 rounded-lg gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Flexible scheduling
                        </div>
                        <div className="badge badge-ghost text-base-content/50 font-medium text-sm px-3 py-3 rounded-lg gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            Certified
        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-base-200 mb-7" />

                    {/* About */}
                    <div className="mb-8">
                        <h2 className="text-sm font-bold tracking-widest uppercase text-base-content/35 mb-3">
                            About this tutor
                        </h2>
                        <p className="text-base-content/65 text-base leading-relaxed">
                            {tutor.description}
                        </p>
                    </div>

                    {/* CTA row */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={() => handleBookTutor(tutor._id)}
                            className="btn flex-1 bg-[#7F3D27] text-white border-[#7F3D27] hover:bg-[#6a3220] hover:border-[#6a3220] font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            Book a Lesson
                        </button>
                        <Link
                            to="/findTutors"
                            className="btn flex-1 sm:flex-none bg-transparent border-base-300 text-base-content/60 hover:border-[#7F3D27]/40 hover:text-[#7F3D27] hover:bg-transparent font-medium transition-all duration-200"
                        >
                            ← Back to Tutors
                        </Link>
                    </div>
                </div>
            </div>

            {/* What to expect */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                    {
                        icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        ),
                        title: 'Real Conversations',
                        desc: 'Practice speaking from your very first lesson.',
                    },
                    {
                        icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        ),
                        title: 'Personalized Plan',
                        desc: 'Lessons tailored to your goals and learning style.',
                    },
                    {
                        icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        ),
                        title: 'Pay as You Go',
                        desc: 'No subscriptions. Book only what you need.',
                    },
                ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex gap-4 p-5 bg-base-100 border border-base-200 rounded-2xl">
                        <div className="w-10 h-10 rounded-xl bg-[#7F3D27]/8 flex items-center justify-center text-[#7F3D27] flex-shrink-0">
                            {icon}
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-base-content">{title}</p>
                            <p className="text-xs text-base-content/50 leading-relaxed mt-0.5">{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TutorDetails;