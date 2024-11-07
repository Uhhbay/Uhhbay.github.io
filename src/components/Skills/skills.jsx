import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaJava, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit, FaDocker, FaRobot, FaBrain } from 'react-icons/fa';   
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';    
import { DiMysql } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { DiAws } from 'react-icons/di';

const Skills = ({ sharedSkills, resumeBasicInfo }) => {
  const sectionName = resumeBasicInfo?.section_name?.skills || "Skills";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const skills = sharedSkills?.icons?.map((skill, i) => (
    <motion.li
      className="bg-gray-800 w-24 h-24 flex items-center justify-center rounded-lg m-3 z-10 border border-gray-600"
      key={i}
      custom={i}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.10 }}
    //   transition={{ type: "spring", stiffness: 300 }}
      variants={skillVariants}
    >
      <div className="text-center">
        <i className={skill.class} style={{ fontSize: "230%", color: "rgba(95, 145, 255, 1)" }}></i>
        <p className="text-center text-m mt-1 text-white font-bold">
          {skill.name}
        </p>
      </div>
    </motion.li>
  ));

  const aiSkill = (
    <motion.li
      className="bg-gray-800 w-24 h-24 flex items-center justify-center rounded-lg m-3 z-10 border border-gray-600"
      key="ai"
      custom={skills.length}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.10 }}
    //   transition={{ type: "spring", stiffness: 300 }}
      variants={skillVariants}
    >
      <div className="text-center">
        <FaRobot style={{ fontSize: "230%", color: "rgba(95, 145, 255, 1)" }} />
        <p className="text-center text-m mt-1 text-white font-bold">
          AI
        </p>
      </div>
    </motion.li>
  );

  const mlSkill = (
    <motion.li
      className="bg-gray-800 w-24 h-24 flex items-center justify-center rounded-lg m-3 z-10 border border-gray-600"
      key="ml"
      custom={skills.length + 1}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.10 }}
    //   transition={{ type: "spring", stiffness: 300 }}
      variants={skillVariants}
    >
      <div className="text-center">
        <FaBrain style={{ fontSize: "230%", color: "rgba(95, 145, 255, 1)" }} />
        <p className="text-center text-m mt-1 text-white font-bold">
          ML
        </p>
      </div>
    </motion.li>
  );

  return (
    <div className="flex flex-col items-center max-w-screen-lg mx-auto" ref={ref}>
      <h1 className="text-white text-5xl font-ubuntu pt-28 mb-10">
        Skills
      </h1>
      <div className="w-[350px] h-[1px] bg-gray-300"></div>
      <ul className="flex flex-wrap justify-center gap-4 list-none mt-16 mx-auto">
        {skills}
        {aiSkill}
        {mlSkill}
      </ul>
    </div>
  );
};

export default Skills;
