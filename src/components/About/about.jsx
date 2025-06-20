import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div>
            <h1 className="text-white text-5xl font-bebas pt-32 mb-6 flex flex-col items-center max-w-screen-lg mx-auto">About Me</h1>
        <motion.div
                className="w-full max-w-[350px] h-[1px] bg-gray-300 mb-4 mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true, amount: 0.25 }}
            >
        </motion.div>
        <motion.div
            className="flex flex-col items-center max-w-screen-lg mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true, amount: 0.25 }}
        >
            
            
            <div className="bg-gray-800 text-gray-100 p-6 rounded-md mx-auto w-[400px] text-center sm:text-left sm:w-[500px] mt-28 xl:w-[800px] lg:w-[800px] md:w-[700px] border border-gray-600">
                <p className="text-xl text-center">
                I graduated from the University of California, Irvine with a Bachelor of Science 
                in Computer Science. I previously earned an Associate's degree in Mathematics 
                from El Camino College before transferring to UCI. I'm passionate about computer 
                science because it challenges me to continuously learn, adapt, and develop innovative 
                solutions to complex problems.
                </p>
                <p className="text-xl mt-6 text-center">
                Outside of my professional interests, I enjoy staying active and exploring new experiences. 
                I'm an avid fan of sports including basketball, football, golf, tennis, table tennis, and 
                pickleball. I also enjoy gaming, working out, trying new foods, and picking up new skills. 
                I thrive on meeting new people and discovering new hobbies.
                </p>
            </div>
        </motion.div>
        </div>
    );
}   