import React from 'react';

const HowItWorks = () => {
    return (
        <div className='my-10 md:my-20'>
            <h2 className='text-center font-bold text-4xl mb-10'>How Inlingo Works</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-5'>
                <div className='border-2 border-gray-400 rounded-md p-4 space-y-2'>
                    <h3 className='bg-teal-400 text-3xl px-4 py-5 rounded-md badge'>1</h3>
                    <h2 className='text-4xl font-bold'>Find your tutor.</h2>
                    <p className='text-[14px]'>We’ll connect you with a tutor who will motivate, challenge, and inspire you.</p>
                    <img src="https://i.ibb.co/Qvvkb425/how1.webp" alt="" className='w-96 mx-auto'/>
                </div>
                <div className='border-2 border-gray-400 rounded-md p-4 space-y-2'>
                    <h3 className='bg-yellow-300 text-3xl px-4 py-5 rounded-md badge'>2</h3>
                    <h2 className='text-4xl font-bold mb-5'>Start learning.</h2>
                    <p className='text-[14px]'>Your tutor will guide the way through your first lesson and help you plan your next steps.</p>
                    <img src="https://i.ibb.co/s9s2HxPH/tutor-1.jpg" alt="" className='w-fit mx-auto'/>
                </div>
                <div className='border-2 border-gray-400 rounded-md p-4 space-y-2'>
                    <h3 className='bg-blue-600 text-3xl px-4 py-5 rounded-md badge'>3</h3>
                    <h2 className='text-4xl font-bold mb-5'>Speak. Read. Write. Repeat.</h2>
                    <p className='text-[14px]'>Choose how many lessons you want to take each week and get ready to reach your goals!</p>
                    <img src="https://i.ibb.co/0pR6BkZt/tuor3.jpg" alt="" className='w-fit mx-auto rounded-2xl'/>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;