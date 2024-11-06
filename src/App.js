import './App.css';
import ShootingStars from './components/ShootingStar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx';

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
    </div>
  );
}

export default App;
