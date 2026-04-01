import React from "react";

const steps = [
    {
        number: "01",
        title: "Find your tutor.",
        description:
            "We'll connect you with a tutor who will motivate, challenge, and inspire you to reach your language goals.",
        image: "https://i.ibb.co/Qvvkb425/how1.webp",
        accent: "bg-teal-400/15 text-teal-600 border-teal-400/30",
        dot: "bg-teal-400",
    },
    {
        number: "02",
        title: "Start learning.",
        description:
            "Your tutor will guide you through your first lesson and help you plan your next steps toward fluency.",
        image: "https://i.ibb.co/s9s2HxPH/tutor-1.jpg",
        accent: "bg-amber-400/15 text-amber-600 border-amber-400/30",
        dot: "bg-amber-400",
    },
    {
        number: "03",
        title: "Speak. Read. Write. Repeat.",
        description:
            "Choose how many lessons you want each week and get ready to hit your goals — one session at a time.",
        image: "https://i.ibb.co/0pR6BkZt/tuor3.jpg",
        accent: "bg-blue-400/15 text-blue-600 border-blue-400/30",
        dot: "bg-blue-500",
    },
];

const HowItWorks = () => {
    return (
        <section className="my-12 md:my-20 max-w-7xl mx-auto container">
            {/* Section Header */}
            <div className="text-center mb-12">
                <div className="badge badge-outline border-[#7F3D27]/40 text-[#7F3D27] text-xs font-medium tracking-widest uppercase px-4 py-3 rounded-full mb-4">
                    Simple Process
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-base-content tracking-tight">
                    How <span className="text-[#7F3D27]">Inlingo</span> works
                </h2>
                <p className="text-base-content/55 mt-3 text-base max-w-md mx-auto leading-relaxed">
                    Go from total beginner to confident speaker in three simple
                    steps.
                </p>
            </div>

            {/* Connector line — desktop only */}
            <div className="hidden xl:flex items-center justify-center mb-[-28px] px-[12%] relative z-0">
                <div className="w-full h-px border-t-2 border-dashed border-[#7F3D27]/20" />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="group flex flex-col bg-base-100 border border-base-200 rounded-2xl overflow-hidden hover:border-[#7F3D27]/25 hover:shadow-lg transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="overflow-hidden h-52 bg-base-200">
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col gap-3 flex-1">
                            {/* Step badge */}
                            <span
                                className={`badge border font-bold text-sm px-3 py-3 rounded-lg w-fit ${step.accent}`}
                            >
                                Step {step.number}
                            </span>

                            <h3 className="text-xl md:text-2xl font-bold text-base-content group-hover:text-[#7F3D27] transition-colors duration-200 leading-snug">
                                {step.title}
                            </h3>

                            <p className="text-base-content/60 text-sm md:text-[15px] leading-relaxed">
                                {step.description}
                            </p>

                            {/* Progress dots */}
                            <div className="flex items-center gap-1.5 mt-auto pt-4">
                                {steps.map((s) => (
                                    <div
                                        key={s.number}
                                        className={`h-1.5 rounded-full transition-all duration-200 ${
                                            s.number === step.number
                                                ? `w-6 ${step.dot}`
                                                : "w-1.5 bg-base-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
