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
    const { title, company, years, technologies } = work;

    // Determine if the element is on the left or right
    const isLeft = i % 2 === 0; // Left if index is even, right if odd

    return (
      <VerticalTimelineElement
        className={`vertical-timeline-element--work mb-8 ${
          isLeft ? "xl-custom:pr-12" : "xl-custom:pl-12" // Padding on opposite side for consistent spacing
        }`}
        date={
          <div className={`xl-custom:text-white font-bold font-ubuntu text-black ${isLeft ? "xl-custom:pl-14" : "xl-custom:pr-14"}`}>
            {years}
          </div>
        }
        iconStyle={{
          background: "#4A4A4A",
          color: "#fff",
          textAlign: "center",
        }}
        verticalLineStyle={{ background: "" }}
        icon={<i className="fab fa-angular experience-icon"></i>}
        key={i}
      >
        <h3 className="vertical-timeline-element-title text-lg font-bold font-ubuntu text-left max-w-[600px] xl-custom:max-w-[700px]">
          {title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle font-ubuntu text-md text-left">{company}</h4>

        {/* Added technologies list */}
        <ul className="list-disc pl-5 mt-2 text-sm font-ubuntu">
          {technologies && technologies.map((tech, index) => (
            <li key={index}>{tech}</li> // Replace with descriptions later
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="resume" className="pb-5">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl font-ubuntu pt-12 mb-6">{sectionName}</h1>
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
            icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
