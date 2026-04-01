import React, { useState } from 'react';
import Swal from 'sweetalert2';

const pricing = {
    monthly: [
        {
            title: 'Starter',
            price: '$15',
            per: '/month',
            description: 'Perfect for beginners taking their first steps in language learning.',
            features: [
                '1 language',
                'Basic tutor access',
                'Community support',
                'Learning progress tracker',
            ],
            highlighted: false,
        },
        {
            title: 'Pro',
            price: '$29',
            per: '/month',
            description: 'For consistent learners who want more power and flexibility.',
            features: [
                '3 languages',
                'Priority tutor access',
                'Practice materials & quizzes',
                'Session recordings',
                'Dedicated support',
            ],
            highlighted: true,
        },
    ],
    yearly: [
        {
            title: 'Starter',
            price: '$150',
            per: '/year',
            description: 'Save 17% — everything in Starter, billed annually.',
            features: [
                '1 language',
                'Basic tutor access',
                'Community support',
                'Learning progress tracker',
            ],
            highlighted: false,
        },
        {
            title: 'Pro',
            price: '$290',
            per: '/year',
            description: 'Save 17% — everything in Pro, billed annually.',
            features: [
                '3 languages',
                'Priority tutor access',
                'Practice materials & quizzes',
                'Session recordings',
                'Dedicated support',
            ],
            highlighted: true,
        },
    ],
};

const CheckIcon = () => (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const Subscription = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const handleSubscription = () => {
        Swal.fire({
            title: 'Coming Soon!',
            text: 'Payment gateway is not integrated yet. Stay tuned!',
            icon: 'info',
            confirmButtonColor: '#7F3D27',
            confirmButtonText: 'Got it',
        });
    };

    return (
        <section className="my-12 md:my-20 max-w-7xl mx-auto container">

            {/* Section Header */}
            <div className="text-center mb-12">
                <div className="badge badge-outline border-[#7F3D27]/40 text-[#7F3D27] text-xs font-medium tracking-widest uppercase px-4 py-3 rounded-full mb-4">
                    Pricing
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-base-content tracking-tight">
                    Choose your{' '}
                    <span className="text-[#7F3D27]">plan</span>
                </h2>
                <p className="text-base-content/55 mt-3 text-base max-w-md mx-auto leading-relaxed">
                    Flexible pricing that grows with you. Cancel anytime, no hidden fees.
                </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-10 gap-1">
                <div className="flex items-center bg-base-200 p-1 rounded-full gap-1">
                    {['monthly', 'yearly'].map((cycle) => (
                        <button
                            key={cycle}
                            onClick={() => setBillingCycle(cycle)}
                            className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200 cursor-pointer ${
                                billingCycle === cycle
                                    ? 'bg-[#7F3D27] text-white shadow-sm'
                                    : 'text-base-content/60 hover:text-base-content'
                            }`}
                        >
                            {cycle}
                            {cycle === 'yearly' && (
                                <span className={`ml-2 text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                                    billingCycle === 'yearly'
                                        ? 'bg-white/20 text-white'
                                        : 'bg-[#7F3D27]/10 text-[#7F3D27]'
                                }`}>
                                    -17%
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {pricing[billingCycle].map((plan) => (
                    <div
                        key={plan.title}
                        className={`relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden
                            ${plan.highlighted
                                ? 'border-[#7F3D27]/40 shadow-xl shadow-[#7F3D27]/8'
                                : 'border-base-200 hover:border-[#7F3D27]/25 hover:shadow-lg'
                            }`}
                    >
                        {/* Popular badge */}
                        {plan.highlighted && (
                            <div className="bg-[#7F3D27] text-white text-xs font-semibold tracking-widest uppercase text-center py-2 px-4">
                                Most Popular
                            </div>
                        )}

                        <div className={`flex flex-col flex-1 p-7 md:p-8 gap-6 ${plan.highlighted ? 'bg-base-100' : 'bg-base-100'}`}>

                            {/* Plan name & price */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-bold text-base-content tracking-wide">{plan.title}</h3>
                                <div className="flex items-end gap-1">
                                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-[#7F3D27]' : 'text-base-content'}`}>
                                        {plan.price}
                                    </span>
                                    <span className="text-base-content/45 text-sm mb-1">{plan.per}</span>
                                </div>
                                <p className="text-base-content/55 text-sm leading-relaxed">{plan.description}</p>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-base-200" />

                            {/* Features */}
                            <ul className="flex flex-col gap-3 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-base-content/70">
                                        <span className={`flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 ${
                                            plan.highlighted
                                                ? 'bg-[#7F3D27]/10 text-[#7F3D27]'
                                                : 'bg-base-200 text-base-content/50'
                                        }`}>
                                            <CheckIcon />
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button
                                onClick={() => handleSubscription(plan)}
                                className={`btn w-full font-semibold mt-2 transition-all duration-200 cursor-pointer ${
                                    plan.highlighted
                                        ? 'bg-[#7F3D27] text-white border-[#7F3D27] hover:bg-[#6a3220] hover:border-[#6a3220]'
                                        : 'bg-transparent border-[#7F3D27] text-[#7F3D27] hover:bg-[#7F3D27] hover:text-white hover:border-[#7F3D27]'
                                }`}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Trust note */}
            <p className="text-center text-sm text-base-content/40 mt-8">
                No credit card required to browse tutors. &nbsp;·&nbsp; Cancel anytime. &nbsp;·&nbsp; Secure payments.
            </p>
        </section>
    );
};

export default Subscription;