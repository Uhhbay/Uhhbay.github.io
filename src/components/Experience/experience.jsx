import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Experience = ({ resumeExperience, resumeBasicInfo }) => {
  if (!resumeExperience || !resumeBasicInfo) return null;

  const { section_name: { experience: sectionName } = {} } = resumeBasicInfo;

  const work = resumeExperience.map((work, i) => {
    const { title, company, years, technologies, icon } = work;
    const isLeft = i % 2 === 0;

    return (
      <VerticalTimelineElement
        className={`vertical-timeline-element--work mb-8 ${
          isLeft ? "xl-custom:pr-12" : "xl-custom:pl-12"
        }`}
        date={
          <div
            className={`xl-custom:text-white font-bold font-ubuntu text-black ${
              isLeft ? "xl-custom:pl-14" : "xl-custom:pr-14"
            }`}
          >
            {years}
          </div>
        }
        iconStyle={{
          background: "#4A4A4A",
          color: "#fff",
          textAlign: "center",
        }}
        verticalLineStyle={{ background: "#4A4A4A" }}
        icon={<img src={icon} alt={`${title} icon`} className="h-10 w-10 xl-custom:h-16 xl-custom:w-16 xl-custom:pb-1 rounded-full" />} 
        key={i}
      >
        <h3 className="vertical-timeline-element-title text-lg font-bold font-ubuntu text-left max-w-[600px] xl-custom:max-w-[700px]">
          {title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle font-bebas text-xl text-left">
          {company}
        </h4>
        <ul className="list-disc pl-5 mt-2 text-sm font-ubuntu">
          {technologies &&
            technologies.map((tech, index) => <li key={index}>{tech}</li>)}
        </ul>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="resume" className="pb-5">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-8 z-20">
          <h1 className="text-white text-5xl font-bebas pt-16 mb-6 flex flex-col items-center max-w-screen-lg mx-auto">
            {sectionName}
          </h1>
        </div>
        <div className="w-[350px] h-[1px] bg-gray-300 mb-16 mx-auto"></div>
      </div>
      <div className="flex mx-auto xl-custom:w-[1400px] lg:w-[800px] md:w-[800px] px-4 md:px-0">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: "#4A4A4A",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-hourglass-start fa-xl xl-custom:mt-7 mt-5 mx-auto experience-icon rounded-full"></i>}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
