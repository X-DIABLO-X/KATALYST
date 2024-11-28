import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The potenitality is <br /> beyond your imagination</h1>
      <p>You’re not generic—why should your AI be? Catalyst crafts solutions as unique as your vision, turning your inputs like budget and market places into personalized, game-changing ideas.
         It’s not just smart—it’s your smart.
       </p>
    </div>
  </div>
);

export default Possibility;
