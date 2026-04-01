import React, { useEffect, useState } from "react";
import EnglishLogo from "../assets/english-removebg.png";
import { useLoaderData, useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import useAuthContext from "../Hooks/useAuthContext";

const LanguageCategory = () => {
    const [showAll, setShowAll] = useState(false);
    const [display, setDisplay] = useState([]);
    const { setSearch } = useAuthContext();
    const allTutors = useLoaderData();
    const navigate = useNavigate();

    const uniqueTutors = [];
    const seenLanguages = new Set();
    for (const tutor of allTutors) {
        if (!seenLanguages.has(tutor.language)) {
            seenLanguages.add(tutor.language);
            uniqueTutors.push(tutor);
        }
    }

    const handleLanguageCategory = (tutor) => {
        navigate("/findTutors");
        setSearch(tutor.language);
    };

    useEffect(() => {
        setDisplay(showAll ? uniqueTutors : uniqueTutors.slice(0, 9));
    }, [showAll]);

    return (
        <section className="my-12 md:my-20 max-w-7xl mx-auto container">
            {/* Section Header */}
            <div className="text-center mb-10">
                <div className="badge badge-outline border-[#7F3D27]/40 text-[#7F3D27] text-xs font-medium tracking-widest uppercase px-4 py-3 rounded-full mb-4">
                    Browse by Language
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-base-content tracking-tight">
                    Find tutors in your{" "}
                    <span className="text-[#7F3D27]">language</span>
                </h2>
                <p className="text-base-content/55 mt-3 text-base max-w-md mx-auto leading-relaxed">
                    Choose from a wide range of languages and get matched with
                    expert tutors instantly.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {display.map((tutor) => (
                    <div
                        key={tutor._id}
                        onClick={() => handleLanguageCategory(tutor)}
                        className="group flex items-center gap-4 p-4 md:p-5 rounded-2xl border border-base-200 bg-base-100 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#7F3D27]/30"
                    >
                        {/* Language icon */}
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#7F3D27]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7F3D27]/14 transition-colors duration-200">
                            <img
                                src={EnglishLogo}
                                alt={tutor.language}
                                className="w-7 h-7 md:w-8 md:h-8 object-contain"
                            />
                        </div>

                        {/* Language name */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-[15px] md:text-base font-semibold text-base-content group-hover:text-[#7F3D27] transition-colors duration-200 truncate">
                                {tutor.language}
                            </h3>
                            <p className="text-xs text-base-content/45 mt-0.5 font-medium">
                                Explore tutors
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-base-200 group-hover:bg-[#7F3D27] transition-all duration-200">
                            <FaArrowRight className="text-[11px] text-base-content/50 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Show All / Hide toggle */}
            {uniqueTutors.length > 9 && (
                <div className="mt-8 text-center">
                    <button
                        onClick={() => setShowAll((v) => !v)}
                        className="btn border-[#7F3D27] text-[#7F3D27] bg-transparent hover:bg-[#7F3D27] hover:text-white hover:border-[#7F3D27] font-semibold px-8 gap-2 transition-all duration-200"
                    >
                        {showAll ? (
                            <>Show Less</>
                        ) : (
                            <>
                                View All {uniqueTutors.length} Languages{" "}
                                <FaArrowRight className="text-xs" />
                            </>
                        )}
                    </button>
                </div>
            )}
        </section>
    );
};

export default LanguageCategory;
