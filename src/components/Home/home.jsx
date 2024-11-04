import React, { useState, useEffect } from "react";
import profilepic from "../../images/profilepic1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
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
            <div className="text-center mt-6">
              <h1 className="text-gray-700 font-cedarville text-5xl">Abhay Singh</h1>
            </div>
          </div>
        </div>
        <div className="h-full w-full xl:w-1/2 bg-transparent flex items-center justify-center order-2 xl:order-1 animate-text">
          <div className="w-[390px] xl:w-[700px] ml-0 xl:ml-48 xl:pr-48 pb-32  text-left">
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

          </div>
        </div>  
      </section>
    )
}

