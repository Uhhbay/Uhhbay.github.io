import { useRef } from "react";
import profilepic from "../../images/profilepic.jpeg";
import { resumeProjects } from "./projectsData.js";
import { motion, useScroll, useTransform } from "framer-motion";
import BucketList from "../../images/BucketListDashboard.png";

// Individual Project Component with scroll animations
function Project({ project }) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
    const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y: translateY }}
            className="project h-full w-full bg-transparent flex items-center justify-center"
        >
            <div className="h-[380px] w-[400px] bg-gray-700 mr-0 mb-20 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500 hover:scale-105 hover:bg-white group">
                <div className="flex items-center justify-center">
                    <span style={{ cursor: "auto" }}>
                        <img
                            src={project.images}
                            alt="Avatar placeholder"
                            className="h-[265px] w-[360px] mt-[25px] object-cover"
                        />
                    </span>
                </div>
                <div className="flex flex-col items-center mt-6">
                    <h1 className="text-white text-center w-full font-ubuntu text-2xl group-hover:text-black">
                        {project.title}
                    </h1>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <div className="flex flex-col items-center max-w-screen-full mx-auto z-10">
            <h1 className="text-white text-4xl font-ubuntu pt-32 mb-6">Projects</h1>
            <div className="w-[350px] h-[1px] bg-gray-300 mb-16"></div>

            <div className="projects-container grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 gap-x-12 gap-y-0">
                {resumeProjects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

