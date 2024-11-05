import './App.css';
import ShootingStars from './components/ShootingStar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/home.jsx';

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
    </div>
  );
}

export default App;
