import React from 'react';
import { motion } from "motion/react"

const Loading = () => {
    return (
        <div className='w-11/12 md:w-11/12 mx-auto'>
                <div className="flex justify-center items-center p-10 rounded-xl">
                <motion.div
                    className="w-8 h-8 rounded-[50%] border-2 border-t-red-500 will-change-transform"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>
        </div>
    );
};

export default Loading;