import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Enhances Creativity',
    text: 'Catalyst empowers individuals by transforming raw ideas into extraordinary, actionable solutions. It combines human creativity with advanced AI logic to amplify your original thoughts.',
  },
  {
    title: 'Collaborative Innovation',
    text: 'It acts as a brainstorming partner, weaving together diverse perspectives and insights to create groundbreaking concepts that inspire real-world impact.',
  },
  {
    title: 'Refines and Evolves Ideas',
    text: 'Catalyst doesn’t just generate ideas; it refines them through analysis, innovation, and integration, ensuring each concept reaches its full potential.',
  },
  {
    title: 'Shared Idea Repository',
    text: 'Multiple users can share their ideas, which the AI securely stores. This shared repository is then leveraged to refine and evolve future concepts by integrating collective insights.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.</h1>
     
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
