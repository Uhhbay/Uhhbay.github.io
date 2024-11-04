import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/" },
  { name: "Skills", path: "/" },
  { name: "Projects", path: "/" },
  { name: "Experience", path: "/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const navigate = useNavigate();

  

 

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVars = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
    exit: { scaleY: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <header className="z-[999] relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="origin-top fixed left-0 top-16 w-full h-screen sm:hidden bg-gradient-to-b from-[#1b2735] to-[#090a0f] text-white pb-20"
          >
            <div className="flex flex-col h-full justify-center items-center gap-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`text-4xl ${
                    activeSection === link.name ? "text-customBlue" : "text-white"
                  } hover:text-gray-400`}
                  onClick={() => {
                    setActiveSection(link.name);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div 
        className="flex items-center justify-between fixed top-0 left-0 h-16 w-full bg-transparent backdrop-blur-sm shadow-md px-4 sm:px-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link to="/" className="flex flex-col text-white">
          <h1 className="text-2xl font-bold">
            ABHAY
          </h1>
        </Link>
        <button className="sm:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon
            className={`w-6 h-6 transition ${isOpen ? "text-white" : "text-white"}`}
            icon={faBars} 
          />
        </button>
        <nav className="hidden sm:flex items-center pr-40">
          <ul className="flex space-x-3">
            {links.map((link) => (
              <motion.li key={link.path} className="relative">
                <button
                  className={`px-1 rounded-md ${
                    activeSection === link.name ? "text-customBlue font-semibold" : "text-white"
                  } hover:text-gray-400`}
                  onClick={() => {
                    navigate(link.path);
                    setActiveSection(link.name);
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-customBlue"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}