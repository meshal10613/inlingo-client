import React from "react";
import { Link } from "react-router";

const faqs = [
    {
        id: "faq-1",
        question: "How does Inlingo work?",
        answer: "Inlingo helps you achieve your language learning ambitions. Find your ideal teacher and book a 1-on-1 lesson. There's no subscription or rigid schedule — learn when you want, as much as you want. If you'd prefer to learn without a teacher, use Inlingo's handy learning tools to improve vocabulary, train your ear with podcasts, and test your knowledge with quizzes.",
    },
    {
        id: "faq-2",
        question: "Is Inlingo worth it for learning a language?",
        answer: "Absolutely. Inlingo gives you the freedom and flexibility to learn with a teacher you like, at a price you can afford, on a schedule that works for you. No hard commitments — lessons are pay-as-you-go, and teachers set their own prices. Browse teachers with different styles until you find the right fit, then supplement with community posts, vocabulary sets, podcasts, and practice prompts.",
    },
    {
        id: "faq-3",
        question: "How do I become a teacher on Inlingo?",
        answer: null, // custom render
    },
    {
        id: "faq-4",
        question: "What languages can I learn on Inlingo?",
        answer: "Inlingo supports 50+ languages — from widely spoken ones like English, Spanish, French, and Mandarin, to less common ones like Catalan, Swahili, and Welsh. Whatever your goal, there's a tutor ready to help.",
    },
    {
        id: "faq-5",
        question: "Can I try a lesson before committing?",
        answer: 'Yes! Many tutors on Inlingo offer trial lessons at a reduced rate so you can get a feel for their teaching style before booking regular sessions. Look for the "Trial" tag on tutor profiles.',
    },
];

const FAQ = () => {
    return (
        <section className="my-12 md:my-20">
            {/* Section Header */}
            <div className="text-center mb-10">
                <div className="badge badge-outline border-[#7F3D27]/40 text-[#7F3D27] text-xs font-medium tracking-widest uppercase px-4 py-3 rounded-full mb-4">
                    Got Questions?
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-base-content tracking-tight">
                    Frequently asked{" "}
                    <span className="text-[#7F3D27]">questions</span>
                </h2>
                <p className="text-base-content/55 mt-3 text-base max-w-md mx-auto leading-relaxed">
                    Everything you need to know about getting started with
                    Inlingo.
                </p>
            </div>

            {/* Accordion */}
            <div className="max-w-7xl mx-auto space-y-3">
                {faqs.map((faq, index) => (
                    <div
                        key={faq.id}
                        className="collapse collapse-arrow border border-base-200 bg-base-100 rounded-2xl hover:border-[#7F3D27]/30 transition-colors duration-200"
                    >
                        <input
                            type="radio"
                            name="faq-accordion"
                            defaultChecked={index === 0}
                        />
                        <div className="collapse-title font-semibold text-base md:text-[17px] text-base-content pr-10">
                            {faq.question}
                        </div>
                        <div className="collapse-content">
                            <div className="pt-1 pb-2 border-t border-base-200">
                                {faq.id === "faq-3" ? (
                                    <p className="text-base-content/65 text-sm md:text-base leading-relaxed">
                                        Anyone is welcome to apply to be a
                                        teacher on Inlingo. You can apply by
                                        clicking{" "}
                                        <Link
                                            to="/addTutorials"
                                            className="text-[#7F3D27] font-medium underline underline-offset-2 hover:opacity-75 transition-opacity"
                                        >
                                            here
                                        </Link>
                                        . There are two types of teachers:{" "}
                                        <span className="font-medium text-base-content">
                                            Professional Teachers
                                        </span>{" "}
                                        — with proven experience and
                                        qualifications — and{" "}
                                        <span className="font-medium text-base-content">
                                            Community Tutors
                                        </span>
                                        , who are passionate language-lovers
                                        eager to share their knowledge with
                                        others.
                                    </p>
                                ) : (
                                    <p className="text-base-content/65 text-sm md:text-base leading-relaxed">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 text-center">
                <p className="text-base-content/50 text-sm">
                    Still have questions?{" "}
                    <Link
                        to="/aboutUs"
                        className="text-[#7F3D27] font-medium underline underline-offset-2 hover:opacity-75 transition-opacity"
                    >
                        Contact our support team
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default FAQ;
