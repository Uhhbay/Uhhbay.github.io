import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profilepic from "../../images/profilepic.jpeg";
import { resumeProjects } from "./projectsData.js";

export default function Projects() {
    const projectRefs = useRef([]);

    // Define animation variants
    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.3, // Stagger the appearance of children
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: -10 },
    };

    return (
        <div className="flex flex-col items-center max-w-screen-full mx-auto z-10">
            <h1 className="text-white text-4xl font-ubuntu pt-32 mb-6">Projects</h1>
            <div className="w-[350px] h-[1px] bg-gray-300 mb-16"></div>
            <motion.div
                className="projects-container grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 gap-x-12 gap-y-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={containerVariants} // Apply container variants
            >
                {resumeProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (projectRefs.current[index] = el)}
                        className="project h-full w-full bg-transparent flex items-center justify-center"
                        variants={itemVariants} // Apply item variants
                        transition={{ duration: 0.5 }}
                    >
                        <div className="h-[380px] w-[400px] bg-gray-700 mr-0 mb-20 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500 hover:scale-105 hover:bg-white group">
                            <div className="flex items-center justify-center">
                                <span style={{ cursor: "auto" }}>
                                    <img
                                        src={profilepic}
                                        alt="Avatar placeholder"
                                        className="h-[265px] w-[360px] mt-[25px]"
                                    />
                                </span>
                            </div>
                            <div className="flex flex-col items-center mt-6">
                                <h1 className="text-white text-center w-full font-ubuntu text-2xl group-hover:text-black">{project.title}</h1>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
