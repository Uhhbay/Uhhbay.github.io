import BucketList from "../../images/BucketListDashboard.png";
import etaMessengerImage from "../../images/eta2.png";
import cmsImage from "../../images/cms.png";
import mfa from "../../images/mfa.png";
import sfc from "../../images/sfc.png";
import ICMNG from "../../images/icmng.png";

const resumeBasicI = {
    section_name: {
      projects: "Projects",
    },
  };
  
  const resumeProjects = [
    {
      title: "BucketList AI",
      startDate: "October 2024",
      description: "Bucket List AI helps users turn their travel dreams into reality by intelligently planning trips based on their interests. First, it analyzes the items the user adds to their \"bucket\" list, such as destinations or activities. Then, it scans for flights from the user’s location and identifies options that are cheaper than usual.",
      images: BucketList,
      link: "https://github.com/Uhhbay/BucketList-AI",
    },
    {
      title: "Iceman",
      startDate: "May 2023",
      description: "In Iceman, the player has to dig underground tunnels through an oil field looking for oil. After the player has gathered all available oil within a particular field, the level is completed and the player advances to a new, more difficult oil field.",
      images: ICMNG,
      link: "https://github.com/Uhhbay/Iceman",
    },
    {
      title: "Melanin Flourish",
      startDate: "June 2024",
      description: "Developed an app for a psychologist to offer her course directly to patients through an accessible platform. Built with a Django REST API and React front end, the app streamlined content management and reduced administrative tasks. Partnered closely with the sponsor to ensure alignment with her vision, resulting in a more efficient and effective workflow.",
      images: mfa,
      link: "https://github.com/Uhhbay",
    },
    {
      title: "Content Management System",
      startDate: "May 2024",
      description: "Developed a streamlined Content Management System for a social media platform, integrating MySQL and PHP to enable efficient CRUD functionality. Designed an intuitive interface for content creation, allowing seamless posting and management. Completed within 36 hours, this project highlights strong database integration and rapid development capabilities.",
      images: cmsImage,
      link: "https://github.com/Uhhbay/CMS-with-CRUD",
    },
    {
      title: "ETA Messanger",
      startDate: "January 2023",
      description: "Estimated Time of Arrival messaging system that uses Twilio API alongside Goggle Maps API in order to send accurate real time ETA's about you commute to certain set locations through SMS",
      images: etaMessengerImage, 
      link: "https://github.com/Uhhbay/ETA-messaging",
    },
    {
      title: "SpringforCoffee",
      startDate: "April 2023",
      description: "Developed an unofficial website for a business, enhancing its online presence with a modern, user-friendly design. Integrated the Google Maps API to provide customers with interactive location details, improving accessibility and engagement. The site offers streamlined navigation and valuable resources to support the business's outreach.",
      images: sfc,
      link: "https://github.com/Uhhbay/springforcoffeeUnofficial",
    },

  ];
  
  export { resumeBasicI, resumeProjects };
  