import React, { useState, useEffect } from "react";
import profilepic from "../../images/profilepic1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import TypingEffect from "react-typing-effect";


export default function Home() {
    return (
      <section className="flex flex-col xl:flex-row mx-auto mt-16 h-[800px] bg-transparent">
        <div className="h-full w-full xl:w-1/2 bg-transparent flex items-center justify-center order-1 xl:order-2">
          <div className="h-[500px] w-[390px] bg-white mr-0 xl:mr-60 mb-20 shadow-2xl shadow-gray-500 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center">
              <span style={{ cursor: "auto" }}>
                <img
                  src={profilepic}
                  alt="Avatar placeholder"
                  className="h-96 w-[340px] mt-[25px]"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="h-full w-full xl:w-1/2 bg-transparent flex items-center justify-center order-2 xl:order-1">
          <div className=" w-[700px] ml-48 xl:pr-48 pb-32">
            <h1 className="text-white text-4xl mb-4 font-ubuntu">Hello,</h1>
            <h1 className="text-white text-4xl font-ubuntu"> I'm {` `}
              <TypingEffect
                text={[" Abhay Singh", " a Full Stack Developer", "a lifelong learner"]}
                speed={100}  // typing speed in ms
                eraseSpeed={50}  // speed to erase text in ms
                typingDelay={500}  // delay before starting to type
                eraseDelay={1000}  // delay before erasing
                className="text-customBlue text-4xl font-ubuntu font-bold"
              />
            </h1>
          </div>
        </div>  
      </section>
    )
}   