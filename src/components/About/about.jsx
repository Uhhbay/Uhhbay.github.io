import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            className="flex flex-col items-center max-w-screen-lg mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true, amount: 0.25 }}
        >
            <h1 className="text-white text-5xl font-ubuntu  pt-28 mb-10">About Me</h1>
            <div className="w-[400px] h-[1px] bg-gray-300"></div>
            <div className="bg-gray-800 text-gray-100 p-6 rounded-sm mx-auto w-[500px] mt-28 xl:w-[800px] lg:w-[800px] md:w-[700px] border border-gray-600">
                <p className="text-xl">
                    I am currently a student pursuing a B.S. in Computer Science and Minor in Informatics
                    at the University of California, Irvine. I transferred from El Camino College, where
                    I earned a Associates in Mathematics. Computer Science is a passion of mine because
                    it requires me to constantly learn and adapt to create new and effective solutions
                    to problems.
                </p>
                <p className="text-xl mt-6">
                    Outside of my career, I love to play games, workout, try new foods, and
                    pick up new skills. I love to play basketball, football, golf, table tennis, and
                    tennis. I enjoy meeting new people and finding new hobbies.
                </p>
            </div>
        </motion.div>
    );
}   