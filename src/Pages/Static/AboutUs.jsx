import React from 'react';
import { Link } from 'react-router';

const stats = [
    { value: '50+', label: 'Languages' },
    { value: '5,000+', label: 'Expert Tutors' },
    { value: '12,000+', label: 'Active Learners' },
    { value: '98%', label: 'Satisfaction Rate' },
];

const values = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: 'Expert Tutors',
        desc: 'Every tutor is carefully selected for teaching experience, communication skills, and ability to inspire learners of all levels.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
        ),
        title: 'Global Reach',
        desc: 'Connect with tutors and learners from every corner of the world. Language has no borders — neither do we.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Learn on Your Terms',
        desc: 'No subscriptions, no rigid schedules. Book lessons when you want, with a tutor that fits your pace and budget.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: 'Proven Results',
        desc: 'Thousands of learners have reached fluency with Inlingo. Our structured approach and personalized feedback actually works.',
    },
];

const AboutUs = () => {
    return (
        <div className="my-12 md:my-20 max-w-7xl mx-auto container">

            {/* ── Hero Block ── */}
            <div className="relative overflow-hidden rounded-3xl bg-[#7F3D27] px-8 py-16 md:px-16 md:py-20 text-center mb-16">
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5" />
                <div className="pointer-events-none absolute -bottom-10 -right-10 w-80 h-80 rounded-full bg-white/5" />

                <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
                    <div className="badge border border-white/30 text-white/80 text-xs font-medium tracking-widest uppercase px-4 py-3 rounded-full bg-white/10">
                        Our Story
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                        Breaking language barriers,{' '}
                        <span className="text-[#F5C9B0]">one lesson at a time.</span>
                    </h1>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed">
                        Inlingo was built on a simple belief — that everyone deserves access to a great language tutor, no matter where they live or what they can afford.
                    </p>
                    <Link
                        to="/findTutors"
                        className="btn bg-white text-[#7F3D27] border-white hover:bg-[#F5EDE8] hover:border-[#F5EDE8] font-semibold px-8 transition-all duration-200 mt-2"
                    >
                        Find a Tutor
                    </Link>
                </div>
            </div>

            {/* ── Mission ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
                <div className="flex flex-col gap-5">
                    <div className="badge badge-outline border-[#7F3D27]/40 text-[#7F3D27] text-xs font-medium tracking-widest uppercase px-4 py-3 rounded-full w-fit">
                        Our Mission
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content tracking-tight leading-snug">
                        Helping you speak with{' '}
                        <span className="text-[#7F3D27]">confidence</span>,<br />
                        learn with purpose.
                    </h2>
                    <p className="text-base-content/60 text-base leading-relaxed">
                        At Inlingo, we connect passionate learners with experienced tutors from around the world. Whether you're aiming to become fluent in Spanish, Japanese, or any of our 50+ supported languages, our platform is built to make your journey faster, smarter, and more personal.
                    </p>
                    <p className="text-base-content/60 text-base leading-relaxed">
                        We believe fluency isn't just about grammar rules — it's about real conversations, cultural understanding, and the confidence to express yourself. That's what every Inlingo lesson is designed to build.
                    </p>
                </div>

                {/* Stats card */}
                <div className="grid grid-cols-2 gap-4">
                    {stats.map(({ value, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center justify-center gap-1 bg-base-100 border border-base-200 rounded-2xl p-6 text-center hover:border-[#7F3D27]/25 hover:shadow-md transition-all duration-200"
                        >
                            <span className="text-3xl md:text-4xl font-bold text-[#7F3D27]">{value}</span>
                            <span className="text-sm text-base-content/50 font-medium">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Values ── */}
            <div className="mb-4">
                <div className="text-center mb-10">
                    <div className="badge badge-outline border-[#7F3D27]/40 text-[#7F3D27] text-xs font-medium tracking-widest uppercase px-4 py-3 rounded-full mb-4">
                        What We Stand For
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content tracking-tight">
                        Built around{' '}
                        <span className="text-[#7F3D27]">you</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {values.map(({ icon, title, desc }) => (
                        <div
                            key={title}
                            className="group flex gap-5 p-6 bg-base-100 border border-base-200 rounded-2xl hover:border-[#7F3D27]/25 hover:shadow-md transition-all duration-200"
                        >
                            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#7F3D27]/8 flex items-center justify-center text-[#7F3D27] group-hover:bg-[#7F3D27]/14 transition-colors duration-200">
                                {icon}
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-semibold text-base text-base-content group-hover:text-[#7F3D27] transition-colors duration-200">
                                    {title}
                                </h3>
                                <p className="text-sm text-base-content/55 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;