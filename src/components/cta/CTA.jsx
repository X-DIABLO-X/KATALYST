import React from 'react';
import './cta.css';
import { Link } from 'react-router-dom';
const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      
      <h3>Sign Up Now & unlock a world where your ideas shape the future!</h3>
    </div>
    <div className="gpt3__cta-btn link">
      <Link to='/login'><button type="button">Get Started</button></Link>
    </div>
  </div>
);

export default CTA;
