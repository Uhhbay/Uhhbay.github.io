import './App.css';
import ShootingStars from './components/ShootingStar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx';
import Skills from './components/Skills/skills.jsx';
import { sharedSkills, resumeBasicInfo } from './components/Skills/skillsData.js';
import Projects from './components/Projects/Projects.jsx';
import { resumeProjects, resumeBasicI } from "./components/Projects/projectsData";
import Experience from "./components/Experience/experience.jsx"
import experienceData from "./components/Experience/experienceData.js"
import Footer from "./components/Footer/footer.jsx"


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background-container">
        <ShootingStars />
      </div>
      <div id="home" className="content">
        <Home />
      </div>
      <div id="about" className="content2 justify-center align-center flex h-[90vh] xl:h-[70vh] lg:h-[70vh] md:h-[70vh]">
        <About />
      </div>  
      <div id="skills" className="justify-center align-center flex">
        <Skills sharedSkills={sharedSkills} resumeBasicInfo={resumeBasicInfo} />
      </div>
      <div id="projects" className="justify-center align-center flex xl:mt-16">
      <Projects />
      </div>
      <div id="experience" className="conetent2 mt-16">

        <Experience
          resumeExperience={experienceData.experience}
          resumeBasicInfo={experienceData.basic_info}
        />

      </div>
      <div className="content2">
      <Footer/>
      <div id="contact">
        {/* Contact information or form goes here */}
      </div>
      </div>

    </div>
  );
}

export default App;
