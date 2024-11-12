import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const Experience = ({ resumeExperience, resumeBasicInfo }) => {
  // Ensure that data is present
  if (!resumeExperience || !resumeBasicInfo) return null;

  // Extract section name
  const { section_name: { experience: sectionName } = {} } = resumeBasicInfo;

  // Map over experience data
  const work = resumeExperience.map((work, i) => {
    const { title, company, years } = work;

    // Render each timeline element
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--workxs mb-8 "
        date={years}
        iconStyle={{
          background: "#4A4A4A",
          color: "#fff",
          textAlign: "center",
        }}
        verticalLineStyle={{ background: "#4A4A4A" }}
        icon={<i className="fab fa-angular experience-icon"></i>}
        key={i}
      >
        <h3 className="vertical-timeline-element-title text-left">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle text-left">{company}</h4>
        
        {/* Added technologies list */}
        <ul className="list-disc pl-5 mt-2">
          {work.technologies && work.technologies.map((tech, index) => (
            <li key={index}>{tech}</li> // Replace with descriptions later
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="resume" className="pb-5">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">{sectionName}</h1>
        </div>
      </div>
      <div className="container mx-auto w-[600px] md:w-[600px] lg:w-[600px]">
        <VerticalTimeline className="w-[600px]">
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: "#4A4A4A",
              color: "#4A4A4A",
              textAlign: "center",
            }}
            icon={<i className="fas fa-hourglass-start bg-gray-700 mx-auto experience-icon"></i>}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
