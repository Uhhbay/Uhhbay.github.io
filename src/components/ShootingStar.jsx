import React from 'react';
import './ShootStar.css';

const ShootingStars = () => {
  const stars = [];

  // Create 20 shooting stars
  for (let i = 0; i < 20; i++) {
    // Randomize the position of each shooting star
    const left = Math.random() * 100; // Percentage
    const top = Math.random() * 100; // Percentage
    stars.push(
      <div
        key={i}
        className="shooting_star"
        style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${Math.random() * 3000}ms` }} // Random delay
      ></div>
    );
  }

  return (
    <div className="night">
      {stars}
    </div>
  );
};

export default ShootingStars;
