import React, { useEffect, useState } from "react";
import BannerImg from "../assets/banner.json";
import Lottie from "lottie-react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import useAuthContext from "../Hooks/useAuthContext";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

const Banner = () => {
    const { user } = useAuthContext();
    //tutor
    const [tutor, setTutor] = useState(null);
    useEffect(() => {
        axios
            .get(
                "https://assignment-11-server-omega-vert.vercel.app/tutors?tutor=tutor",
            )
            .then((result) => {
                setTutor(result.data);
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
    }, [tutor]);

    //tutor review
    const [review, setReview] = useState(null);
    useEffect(() => {
        axios
            .get(
                "https://assignment-11-server-omega-vert.vercel.app/tutors?countRev=countRev",
            )
            .then((result) => {
                setReview(result.data);
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
    }, [review]);

    //total language
    const [language, setLanguage] = useState(null);
    useEffect(() => {
        axios
            .get(
                "https://assignment-11-server-omega-vert.vercel.app/tutors?countLang=countLang",
            )
            .then((result) => {
                setLanguage(result.data);
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
    }, [language]);

    return (
        <section className="relative overflow-hidden max-w-7xl mx-auto container">
            {/* Subtle background blobs */}
            {/* <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#7F3D27]/6 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-[#7F3D27]/4 blur-3xl" /> */}

            <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-6 my-12 md:my-20 px-1">
                {/* ── Left: Text Content ── */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl gap-6">
                    {/* Eyebrow badge */}
                    <div className="badge badge-outline border-[#7F3D27]/40 text-[#7F3D27] text-xs font-medium tracking-widest uppercase px-4 py-3 rounded-full">
                        🌍 &nbsp; 50+ Languages Available
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-base-content">
                        Learn faster with your{" "}
                        <span className="relative inline-block text-[#7F3D27]">
                            best
                            <svg
                                className="absolute -bottom-1 left-0 w-full"
                                viewBox="0 0 200 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M2 6 Q100 1 198 6"
                                    stroke="#7F3D27"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    fill="none"
                                    opacity="0.5"
                                />
                            </svg>
                        </span>{" "}
                        language tutor.
                    </h1>

                    {/* Subtext */}
                    <p className="text-base-content/60 text-base md:text-lg leading-relaxed max-w-md">
                        Connect with expert tutors worldwide. Practice real
                        conversations, get personalized feedback, and reach
                        fluency faster than ever.
                    </p>

                    {/* CTA Row */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                        <Link
                            to={user ? "/findTutors" : "/login"}
                            className="btn bg-[#7F3D27] text-white border-[#7F3D27] hover:bg-[#6a3220] hover:border-[#6a3220] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-semibold px-7 gap-2 text-[15px] w-full sm:w-auto"
                        >
                            Get Started <FaArrowRight className="text-xs" />
                        </Link>

                        <Link
                            to="/aboutUs"
                            className="btn btn-ghost text-base-content/70 hover:text-[#7F3D27] hover:bg-[#7F3D27]/8 font-medium text-[15px] w-full sm:w-auto transition-colors duration-200"
                        >
                            Learn more
                        </Link>
                    </div>

                    {/* Social proof row */}
                    <div className="flex items-center gap-4 mt-1">
                        {/* Stacked avatars */}
                        <div className="flex -space-x-2.5">
                            {[
                                "bg-[#C4896F]",
                                "bg-[#7F3D27]",
                                "bg-[#A05C3E]",
                                "bg-[#D4A58A]",
                            ].map((color, i) => (
                                <div
                                    key={i}
                                    className={`w-8 h-8 rounded-full ${color} ring-2 ring-base-100 flex items-center justify-center text-white text-[10px] font-bold`}
                                >
                                    {["AR", "LK", "MJ", "SB"][i]}
                                </div>
                            ))}
                        </div>
                        <div className="text-sm text-base-content/55 leading-tight">
                            <span className="font-semibold text-base-content/80">
                                12,000+
                            </span>{" "}
                            learners started this month
                        </div>
                    </div>
                </div>

                {/* ── Right: Lottie Animation ── */}
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex-shrink-0">
                    {/* Decorative ring behind the animation */}
                    <div
                        className="absolute inset-4 rounded-full border-2 border-dashed border-[#7F3D27]/15 animate-spin-slow"
                        style={{ animationDuration: "20s" }}
                    />
                    <Lottie
                        animationData={BannerImg}
                        loop={true}
                        className="relative w-full"
                    />
                </div>
            </div>

            {/* Stats bar */}
            <div className="relative grid grid-cols-3 gap-4 border-t border-base-200 pt-8 mt-4 mb-2">
                {[
                    { value: language, label: "Languages" },
                    { value: tutor, label: "Expert Tutors" },
                    { value: review, label: "User Reviews" },
                ].map(({ value, label }) => (
                    <div
                        key={label}
                        className="flex flex-col items-center gap-1 text-center"
                    >
                        <span className="text-2xl md:text-3xl font-bold text-[#7F3D27]">
                            {value}
                        </span>
                        <span className="text-xs md:text-sm text-base-content/50 font-medium tracking-wide">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Banner;
