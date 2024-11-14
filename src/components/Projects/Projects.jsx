// Projects.jsx
import { useState } from "react";
import { useRef } from "react";
import { resumeProjects } from "./projectsData.js";
import { motion, useScroll, useTransform } from "framer-motion";

// Modal Component for Project Details
function ProjectModal({ project, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg max-w-3xl mx-auto relative shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl font-bold"
                >
                    &times;
                </button>
                <div className="flex flex-col items-center">
                    <img src={project.images} alt={project.title} className="w-full h-auto max-h-[400px] object-contain rounded-md" />
                    <h2 className="text-2xl mt-4 mb-2 font-semibold text-center flex items-center">
                        {project.title}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2">
                            <i className="fas fa-link text-gray-600 hover:text-gray-800"></i>
                        </a>
                    </h2>
                    <p className="text-gray-700 text-center mb-4">{project.description}</p>
                    {project.technologies && (
                        <ul className="flex flex-wrap justify-center space-x-4 mt-2">
                            {project.technologies.map((tech, i) => (
                                <li key={i} className="text-center">
                                    <div className="flex flex-col items-center">
                                        <i className={tech.class} style={{ fontSize: "2em" }}></i>
                                        <p style={{ fontSize: "0.75em" }}>{tech.name}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

// Individual Project Component with scroll animations and click handler
function Project({ project, onClick }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
    const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y: translateY }}
            onClick={() => onClick(project)}
            className="project h-full w-full bg-transparent flex items-center justify-center cursor-pointer"
        >
            <div className="h-[380px] w-[400px] bg-gray-700 mr-0 mb-20 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500 hover:scale-105 hover:bg-white group">
                <div className="flex items-center justify-center">
                    <img src={project.images} alt="Avatar placeholder" className="h-[265px] w-[360px] mt-[25px] object-cover" />
                </div>
                <div className="flex flex-col items-center mt-6">
                    <h1 className="text-white text-center w-full font-bebas text-3xl group-hover:text-black">{project.title}</h1>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.classList.add('overflow-hidden');
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.classList.remove('overflow-hidden');
    };

    return (
        <div className="flex flex-col items-center max-w-screen-full mx-auto z-10">
            <h1 className="text-white text-5xl font-bebas pt-32 mb-6">Projects</h1>
            <div className="w-[350px] h-[1px] bg-gray-300 mb-16"></div>

            <div className="projects-container grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 gap-x-12 gap-y-0">
                {resumeProjects.map((project, index) => (
                    <Project key={index} project={project} onClick={openModal} />
                ))}
            </div>

            {/* Render Modal if a project is selected */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </div>
    );
}
