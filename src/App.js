import './App.css';
import ShootingStars from './components/ShootingStar';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Wrap the entire app in the Router */}
      <Router>
        {/* Include the Navbar */}
        <Navbar />

        {/* Define your routes if you have multiple pages, for now, this is just an example */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<div><ShootingStars /><ShootingStars /></div>} />
          {/* Add more routes as needed, e.g. Dashboard, About, etc. */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
