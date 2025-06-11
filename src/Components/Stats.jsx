import React from 'react';
import CountUp from 'react-countup';

export const Stats = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:py-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                <div className="text-center border-2 border-gray-400 py-10 rounded-md shadow-md hover:shadow-2xl">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        <CountUp end={100} duration={5}/>
                    </h6>
                    <p className="font-bold">Experienced tutors</p>
                </div>
                <div className="text-center border-2 border-gray-400 py-10 rounded-md shadow-md hover:shadow-2xl">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        <CountUp end={100} duration={5}/>
                    </h6>
                    <p className="font-bold">tutor reviews</p>
                </div>
                <div className="text-center border-2 border-gray-400 py-10 rounded-md shadow-md hover:shadow-2xl">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        <CountUp end={100} duration={5}/>
                    </h6>
                    <p className="font-bold">Languages</p>
                </div>
                <div className="text-center border-2 border-gray-400 py-10 rounded-md shadow-md hover:shadow-2xl">
                    <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                        <CountUp end={100} duration={5}/>
                    </h6>
                    <p className="font-bold">Users</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;