import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import useAuthContext from '../Hooks/useAuthContext';

const FindTutors = () => {
    const { search, setSearch } = useAuthContext();
    const loadTutors = useLoaderData();
    const [tutors, setTutors] = useState(loadTutors);
    const [sortBy, setSortBy] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const searchData = search.toLowerCase();
        axios
            .get(`https://assignment-11-server-omega-vert.vercel.app/tutors?language=${searchData}&sortBy=${sortBy}`)
            .then((result) => {
                setTutors(result.data);
            })
            .catch((error) => {
                toast.error(`${error.message}`, {
                    position: 'top-right',
                    autoClose: 5000,
                    theme: 'light',
                    transition: Bounce,
                });
            })
            .finally(() => setLoading(false));
    }, [search, sortBy]);

    return (
        <div className="my-12 md:my-16 max-w-7xl mx-auto container">

            {/* Page Header */}
            <div className="text-center mb-10">
                <div className="badge badge-outline border-[#7F3D27]/40 text-[#7F3D27] text-xs font-medium tracking-widest uppercase px-4 py-3 rounded-full mb-4">
                    Browse Tutors
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-base-content tracking-tight">
                    Find the right tutor{' '}
                    <span className="text-[#7F3D27]">for you.</span>
                </h1>
                <p className="text-base-content/55 mt-3 text-base max-w-md mx-auto leading-relaxed">
                    Search by language, filter by rating, and connect with an expert tutor today.
                </p>
            </div>

            {/* Search & Sort Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <label className="input input-bordered flex items-center gap-2 flex-1 focus-within:border-[#7F3D27]">
                    <svg className="w-4 h-4 text-base-content/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    </svg>
                    <input
                        type="search"
                        defaultValue={search}
                        onChange={(e) => setSearch(e.target.value)}
                        name="search"
                        placeholder="Search by language..."
                        className="grow text-sm"
                    />
                </label>

                <select
                    className="select select-bordered w-full sm:w-48 text-sm focus:border-[#7F3D27]"
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                >
                    <option value="">Sort: Default</option>
                    <option value="az">Name: A → Z</option>
                    <option value="za">Name: Z → A</option>
                </select>
            </div>

            {/* Results count */}
            {!loading && (
                <p className="text-sm text-base-content/45 mb-6 font-medium">
                    {tutors.length} tutor{tutors.length !== 1 ? 's' : ''} found
                    {search ? ` for "${search}"` : ''}
                </p>
            )}

            {/* Loading skeleton */}
            {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="bg-base-100 border border-base-200 rounded-2xl p-5 flex flex-col gap-4 animate-pulse">
                            <div className="w-20 h-20 rounded-full bg-base-300 mx-auto" />
                            <div className="space-y-2">
                                <div className="h-4 bg-base-300 rounded w-3/4 mx-auto" />
                                <div className="h-3 bg-base-300 rounded w-1/2 mx-auto" />
                                <div className="h-3 bg-base-300 rounded w-5/6" />
                                <div className="h-9 bg-base-300 rounded-xl mt-3" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Tutor Grid */}
            {!loading && tutors.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {tutors.map((tutor) => (
                        <div
                            key={tutor._id}
                            className="group flex flex-col bg-base-100 border border-base-200 rounded-2xl p-5 hover:border-[#7F3D27]/25 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Avatar */}
                            <div className="flex justify-center mb-4">
                                <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#7F3D27]/20 ring-offset-2 ring-offset-base-100 group-hover:ring-[#7F3D27]/50 transition-all duration-300">
                                    <img
                                        src={tutor.photoURL}
                                        alt={tutor.tutorName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-2 flex-1 text-center">
                                <h2 className="text-base font-bold text-base-content group-hover:text-[#7F3D27] transition-colors duration-200 leading-snug">
                                    {tutor.tutorName}
                                </h2>

                                {/* Language badge */}
                                <span className="badge bg-[#7F3D27]/8 text-[#7F3D27] border-0 text-xs font-medium px-3 py-2.5 rounded-lg mx-auto">
                                    {tutor.language}
                                </span>

                                {/* Rating */}
                                <div className="flex items-center justify-center gap-1.5 text-sm">
                                    <FaStar className="text-amber-400 text-sm" />
                                    <span className="font-semibold text-base-content">{tutor.rating}</span>
                                    <span className="text-base-content/35 text-xs">/ 5</span>
                                </div>

                                {/* Description */}
                                <p className="text-xs text-base-content/50 leading-relaxed line-clamp-2 px-1">
                                    {tutor.description}
                                </p>

                                {/* CTA */}
                                <Link
                                    to={`/tutor/${tutor._id}`}
                                    className="btn btn-sm mt-auto bg-[#7F3D27] text-white border-[#7F3D27] hover:bg-[#6a3220] hover:border-[#6a3220] hover:-translate-y-0.5 hover:shadow-md w-full font-medium tracking-wide transition-all duration-200"
                                >
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Empty state */}
            {!loading && tutors.length === 0 && (
                <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#7F3D27]/8 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#7F3D27]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-base-content">No tutors found</h3>
                    <p className="text-sm text-base-content/50 max-w-xs">
                        We couldn't find any tutors matching{' '}
                        <span className="font-medium text-[#7F3D27]">"{search}"</span>.
                        Try a different language or clear your search.
                    </p>
                    <button
                        onClick={() => setSearch('')}
                        className="btn btn-sm border-[#7F3D27] text-[#7F3D27] bg-transparent hover:bg-[#7F3D27] hover:text-white hover:border-[#7F3D27] transition-all duration-200 mt-2"
                    >
                        Clear search
                    </button>
                </div>
            )}
        </div>
    );
};

export default FindTutors;