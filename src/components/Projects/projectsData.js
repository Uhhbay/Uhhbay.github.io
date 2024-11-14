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
      description: "Bucket List AI helps users turn their travel dreams into reality by intelligently planning trips based on their interests. First, it analyzes the items the user adds to their \"bucket\" list, such as destinations or activities. Then, it scans for flights from the user’s location and identifies options that are cheaper than usual.",
      images: ICMNG,
      link: "https://github.com/Uhhbay/Iceman",
    },
    {
      title: "Melanin Flourish",
      startDate: "June 2024",
      description: "Bucket List AI helps users turn their travel dreams into reality by intelligently planning trips based on their interests. First, it analyzes the items the user adds to their \"bucket\" list, such as destinations or activities. Then, it scans for flights from the user’s location and identifies options that are cheaper than usual",
      images: mfa,
      link: "https://github.com/Uhhbay",
    },
    {
      title: "Content Management System",
      startDate: "May 2024",
      description: "Bucket List AI helps users turn their travel dreams into reality by intelligently planning trips based on their interests. First, it analyzes the items the user adds to their \"bucket\" list, such as destinations or activities. Then, it scans for flights from the user’s location and identifies options that are cheaper than usual",
      images: cmsImage,
      link: "https://github.com/Uhhbay/CMS-with-CRUD",
    },
    {
      title: "ETA Messanger",
      startDate: "January 2023",
      description: "ETA messaging system that uses Twilio API alongside Goggle Maps API in order to send accurate real time ETA's about you commute to certain set locations through SMS",
      images: etaMessengerImage, 
      link: "https://github.com/Uhhbay/ETA-messaging",
    },
    {
      title: "SpringforCoffee",
      startDate: "April 2023",
      description: "Bucket List AI helps users turn their travel dreams into reality by intelligently planning trips based on their interests. First, it analyzes the items the user adds to their \"bucket\" list, such as destinations or activities. Then, it scans for flights from the user’s location and identifies options that are cheaper than usual",
      images: sfc,
      link: "https://github.com/Uhhbay/springforcoffeeUnofficial",
    },

  ];
  
  export { resumeBasicI, resumeProjects };
  