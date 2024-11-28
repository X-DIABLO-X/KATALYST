import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <>
  
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Why Catalyst? <br /></h1>
      <p>Because you’re not generic—why should your AI be? While others offer broad, one-size-fits-all answers, Catalyst redefines the game by tailoring every solution to fit you. It dives deep into your inputs—your budget, market goals, and unique challenges—and transforms them into highly personalized, actionable ideas.

          Catalyst isn’t just smart; it’s your smart. It evolves with your vision, crafting insights and strategies that align perfectly with your needs. When every decision matters, trust an AI that doesn’t just think—it thinks for you.
       </p>
    </div>


  </div>
  </>
);

export default Possibility;
