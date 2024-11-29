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
      <h1 className="gradient__text">Why Catalyst over other AI? <br /></h1>
      <p><br></br>you’re not generic—why should your AI be? Imagine an AI that doesn’t just answer your questions but truly understands your journey. That’s what Catalyst does—it’s more than just a tool; it’s your partner in innovation.

        While most AIs churn out generic, one-size-fits-all solutions, Catalyst takes a different approach. It asks about you—your budget, your marketplace, your unique challenges—and crafts insights that fit your world like a glove. It’s not about guessing what works; it’s about knowing what works for you.
        <br></br><br></br>
        Have you ever wished for an AI that could take your raw ideas and turn them into strategies tailored to your goals? Catalyst goes beyond automation; it collaborates with you, aligning with your aspirations and delivering solutions that feel personal, precise, and powerful.

        Why settle for generic outputs when you can have an AI that evolves with your vision? Choose Catalyst—because your ideas deserve more than ordinary answers. They deserve extraordinary innovation.
        
         
      </p>
      <h2 className="gradient__text">It isn’t just smart, it’s your smart<br></br><br></br><br></br><br></br></h2>
    </div>
  </div>
  </>
);

export default Possibility; 
