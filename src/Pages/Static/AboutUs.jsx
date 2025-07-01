import React from 'react';

const AboutUs = () => {
    return (
        <section className="py-16 px-4 md:px-10 text-gray-800">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">About Us</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Welcome to <span className="font-semibold text-primary">Inlingo</span> – your gateway to mastering new languages with confidence and clarity.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                At Inlingo, we connect passionate learners with experienced tutors from around the world. Whether you're aiming to become fluent in Dutch, English, or any other language, our platform is built to make your learning journey faster, smarter, and more personalized.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Our mission is simple: to help you speak with confidence, learn with purpose, and grow beyond borders.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Every tutor on Inlingo is carefully selected based on their teaching experience, communication skills, and ability to inspire learners of all levels.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                Join thousands of learners already transforming their language skills with <span className="font-semibold text-primary">Inlingo</span>. Wherever you are in the world, your fluency starts here.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;