  import livingConnected from "../../images/livingc.png";
  import CN from "../../images/cn.jpg";
  import MBLY from "../../images/mbly.png";
  import UCIE from "../../images/ucie.png";
  import DBUCI from "../../images/dbuci.jpeg";

  const experienceData = {
    basic_info: {
      section_name: {
        experience: "Experience",
      },
    },
    experience: [
      {
        title: "AI/ML Researcher",
        company: "Donald Bren School of ICS",
        years: "November 2024 - Present",
        mainTech: ["Python", "Django"],
        technologies: [
          "Just started!",
        ],
        icon: DBUCI,
      },
      {
        title: "Software Programming Instructor",
        company: "CODE NINJAS",
        years: "Sept 2024 - Present",
        mainTech: ["JavaScript", "React"],
        technologies: [
          "Achieved a 90% student satisfaction rate by teaching young learners JavaScript through interactive coding lessons, simplifying complex concepts",
          "Created positive learning environment for children to build their coding abilities, leading to a 50% improvement in problem-solving skills and critical thinking measured by assessments",
        ],
        icon: CN,
      },
      {
        title: "Software Engineer Intern",
        company: "LIVING CONNECTED MBS Inc.",
        years: "April 2024 - June 2024",
        mainTech: ["Python", "Django"],
        technologies: [
          "Collaborated with a 4-person team, meeting 5 times a week to develop a Django REST API back-end connected with a front-end made with React, leading to a 35% reduction in administrative tasks",
          "Partnered with a sponsor for 8 weeks ensuring clear communication, increasing workflow by 40% in order to make a vision a real product",
        ],
        icon: livingConnected,
      },
      {
        title: "Information Specialist",
        company: "MOBALYTICS",
        years: "April 2024 - Present",
        mainTech: ["Python", "Django"],
        technologies: [
          "Updated Mobalytics Valorant database 3 times per month, increasing platform engagement by 10%, bolstering platform relevance within the competitive gaming community",
          "Developed insightful Valorant tutorials on Mobalytics, giving users strategic insights and actionable tips to elevate their performance",
        ],
        icon: MBLY,
      },
      {
        title: "Valorant Scholarship Player",
        company: "UCI ESPORTS",
        years: "April 2024 - Present",
        mainTech: ["Python", "Django"],
        technologies: [
          "Committed 20 hours per week to scrimmages, teamwork, and strategy building, leading to a 20% performance increase",
          "Fostered positive team culture, organizing team bonding to ensure team comfortability and communication",
        ],
        icon: UCIE,
      },
    ],
  };
  
  // Export the data as a default export
  export default experienceData;