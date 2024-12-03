import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let's Ignite Your Imagination with Catalyst<br></br></h1>
      <p>Transform your raw ideas into personalized, actionable strategies tailored to your goals. Say goodbye to generic solutions and embrace a future where every vision is amplified, every challenge conquered, and every possibility reimagined <br></br><br></br></p>
      <div className="gpt3__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" /> */}
        <Link to="login" className="gpt3__header-content__input">
          <button type="button">Get Started</button>
        </Link>
      </div>

    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
