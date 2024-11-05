import React, { useState, useEffect } from "react";
import profilepic from "../../images/profilepic1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faReact, faVuejs, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import TypingEffect from "react-typing-effect";
import "./home.css";


export default function Home() {
    return (
      <section className="flex flex-col xl:flex-row mx-auto mt-16 h-[800px] bg-transparent">
        <div className="h-full w-full xl:w-1/2 bg-transparent flex items-center justify-center order-1 xl:order-2 animate-image">
          <div className="h-[530px] w-[390px] bg-white mr-0 xl:mr-60 mb-20 shadow-2xl shadow-gray-500 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center">
              <span style={{ cursor: "auto" }}>
                <img
                  src={profilepic}
                  alt="Avatar placeholder"
                  className="h-96 w-[340px] mt-[25px]"
                />
              </span>
            </div>
            <div className="text-center  mt-6">
              <h1 className="text-gray-700 w-[390px] font-dancing text-6xl">Abhay Singh</h1>
            </div>
          </div>
        </div>
        <div className="h-full w-full xl:w-1/2 bg-transparent flex items-center justify-center order-2 xl:order-1 animate-text">
          <div className="w-[455px] xl:w-[700px] ml-0 xl:ml-48 xl:pr-48 pb-32 text-left">
            <h1 className="text-white text-4xl mb-4 font-ubuntu">Hello,</h1>
            <h1 className="text-white text-4xl font-ubuntu mb-20"> I'm {` `}
              <TypingEffect
                text={[" Abhay Singh", " a Full Stack Developer", "a lifelong learner"]}
                speed={100}  // typing speed in ms
                eraseSpeed={50}  // speed to erase text in ms
                typingDelay={500}  // delay before starting to type
                eraseDelay={1000}  // delay before erasing
                className="text-customBlue text-4xl font-ubuntu font-bold"
              />
            </h1>
            <p className="text-white text-lg font-ubuntu">I am a Full Stack Developer with a passion for
               Artificial Intelligence, Machine Learning, and Application Development. I am a lifelong learner and I am always looking for new
                 challenges and opportunities to grow.</p>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md mt-10 hover:bg-white hover:text-customBlue">
              <a 
                href="https://docs.google.com/document/d/175HrAfWACDZBp7tJiKOD-_aGr6Yb3WHCob_NtTaXEXo/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <FontAwesomeIcon icon={faDownload} className="ml-2" />
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md mt-10 ml-4 hover:bg-white hover:text-customBlue"> 
              <a href="/" target="_blank" rel="noopener noreferrer">
                Contact Me
              </a>
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md mt-10 ml-4 hover:bg-white hover:text-gray-800"> 
              <a href="https://github.com/Uhhbay" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="" size="lg" />
              </a>
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md mt-10 ml-4 hover:bg-white hover:text-customBlue"> 
              <a href="https://www.linkedin.com/in/246abhaysingh/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="" size="lg" />
              </a>
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md mt-10 ml-4 hover:bg-white hover:text-pink-500"> 
              <a href="https://www.instagram.com/uhh_bay/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="" size="lg" />
              </a>
            </button>
          </div>
        </div>  
      </section>
    )
}

