import React from 'react';
import Feature from '../../components/feature/Feature';
import './catalyst.css';

const catalyst = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Catalyst" text="Catalyst is an AI-powered creativity amplifier that transforms raw ideas into groundbreaking, actionable concepts. By merging your thoughts with global insights, it fosters originality, collaboration, and innovation - unlocking the potential to change the game" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Your Partner in navigating life </h1>
      
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="User-friendly" text="Intuitive design ensures effortless navigation for users of all skill levels" />
      <Feature title="Seamless integration" text="Easily integrates with your existing tools and workflows for a smooth experience" />
      <Feature title="Secure & safe" text="Robust security measures safeguard your data and intellectual property at every step" />
    </div>
  </div>
);

export default catalyst;