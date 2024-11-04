import './App.css';
import ShootingStars from './components/ShootingStar';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/home.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="background-container">
          <ShootingStars />
        </div>
        <Routes>
          <Route path="/" 
          element=
          {<div className="content">
            <Home />
          </div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
