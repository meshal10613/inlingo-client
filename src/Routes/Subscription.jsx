import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Subscription = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const pricing = {
        monthly: [
        {
            title: "Starter",
            price: "$15",
            description: "Perfect for beginners starting their language journey.",
            features: ["1 language", "Basic tutor access", "Community support"]
        },
        {
            title: "Pro",
            price: "$29",
            description: "For consistent learners who want more features.",
            features: ["3 languages", "Priority tutor access", "Practice materials"]
        },
        ],
        yearly: [
        {
            title: "Starter",
            price: "$150",
            description: "Save 17% – billed annually.",
            features: ["1 language", "Basic tutor access", "Community support"]
        },
        {
            title: "Pro",
            price: "$290",
            description: "Save 17% – billed annually.",
            features: ["3 languages", "Priority tutor access", "Practice materials"]
        },
        ],
    };

    const handleSubscription = () => {
        Swal.fire({
            title: "Sorry!",
            text: "Payment gateway hasn't integrated yet",
            icon: "info",
            confirmButtonColor: "#7F3D27"
        });
    };

    return (
        <section className="py-16 px-4 md:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Choose Your Plan</h2>
                
                {/* Toggle */}
                <div className="inline-flex items-center mb-10 bg-white p-2 rounded-full shadow">
                <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-5 py-2 rounded-full font-medium ${billingCycle === 'monthly' ? 'bg-primary text-white' : 'text-gray-600'} cursor-pointer`}
                >
                    Monthly
                </button>
                <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-5 py-2 rounded-full font-medium ${billingCycle === 'yearly' ? 'bg-primary text-white' : 'text-gray-600'} cursor-pointer`}
                >
                    Yearly
                </button>
                </div>

                {/* Pricing Cards */}
                <div className="grid gap-8 md:grid-cols-2 mt-4">
                {pricing[billingCycle].map((plan, index) => (
                    <div key={index} className="bg-white shadow-md rounded-xl p-8 text-left border hover:shadow-lg transition">
                    <h3 className="text-2xl font-bold text-gray-800">{plan.title}</h3>
                    <p className="text-3xl font-semibold text-primary mt-2">{plan.price}</p>
                    <p className="text-gray-600 mt-2 mb-4">{plan.description}</p>
                    <ul className="mb-6 space-y-2 text-gray-700">
                        {plan.features.map((feature, i) => (
                        <li key={i}>✔ {feature}</li>
                        ))}
                    </ul>
                    <button onClick={handleSubscription} className="w-full py-2 bg-primary text-white font-medium rounded cursor-pointer">
                        Get Started
                    </button>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
};

export default Subscription;