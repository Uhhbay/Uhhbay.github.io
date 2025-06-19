  import livingConnected from "../../images/livingc.png";
  import CN from "../../images/cn.jpg";
  import MBLY from "../../images/mbly.png";
  import UCIE from "../../images/ucie.png";
  import DBUCI from "../../images/dbuci.jpeg";
  import UCISOC from "../../images/UCISOC.jpg";
  import shopify from "../../images/Shopifylogo.webp";
  import sces from "../../images/scesLogo.jpeg";

  const experienceData = {
    basic_info: {
      section_name: {
        experience: "Experience",
      },
    },
    experience: [
      {
        title: "Software Engineer Intern",
        company: "Shopify",
        years: "September 2025 - April 2026",
        mainTech: [""],
        technologies: [
          "Incoming in Fall 2025!",
        ],
        icon: shopify,
      },
      {
        title: "Web Developer",
        company: "UCI Student Center Events Services",
        years: "May 2025 - Present",
        mainTech: [""],
        technologies: [
          "Just Started!",
        ],
        icon: sces,
      },
      {
        title: "AI/ML Researcher",
        company: "Donald Bren School of ICS",
        years: "November 2024 - Present",
        mainTech: ["Python", "Pytorch", "SQL"],
        technologies: [
          "Conducted experiments on large language models, achieving a 50% improvement in understanding the study's hypotheses and theoretical framework",
          "Optimized data integrity using SQL to audit and clean outdated records from critical databases, leading to an 80% reduction in system errors",
        ],
        icon: DBUCI,
      },
      {
        title: "Software Engineer Intern",
        company: "UC Irvine School of Social Sciences - LDN Lab",
        years: "December 2024 - March 2025",
        mainTech: ["TypeScript", "Phaser", "Socket.IO", "PostgreSQL"],
        technologies: [
          "Led a team of 5 in the development of a multiplayer game from scratch using the Phaser framework and TypeScript, integrating PostgreSQL for user authentication and preference storage; reduced latency by 35% with Socket.IO",
          "Deployed the application on Prolific for large-scale participant testing, collecting data from 500+ users",
        ],
        icon: UCISOC,
      },
      {
        title: "Software Programming Instructor",
        company: "CODE NINJAS",
        years: "Sept 2024 - June 2025",
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
        years: "April 2024 - November 2024",
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