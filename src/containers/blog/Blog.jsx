import React from 'react';
import Article from '../../components/article/Article';  
// import ReviewImage from './reviews.png';
import VimalImage from './vimal.jpeg';
import AryenImage from './Aryen.jpg';
import PathakImage from './Pathak.jpeg';  
// import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <>
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text" style={{textAlign: 'center'}}>Our Past Testimonials!</h1>
    </div>
    <div className="gpt3__blog-container">
      {/* <img id="reviews" src={ReviewImage} style={{width: "100%"}} /> */}
      {/* <img id="reviews" src={VimalImage} style={{width: "50%"}} />
      <img id="reviews" src={AryenImage} style={{width: "50%"}} />
      <img id="reviews" src={PathakImage} style={{width: "50%"}} /> */}

    <div className='rev'>
    <div className="card">
      <div className="testimonial-image">
        {/* Image will be replaced with your actual image */}
        <img src={AryenImage} alt="Aryen Mukundam" />
      </div>
      <div className="testimonial-content">
        <h3>Aryen Mukundam</h3>
        <p>
          "Using Catalyst has been a game-changer for me. It's a seamless platform
          that helped me break creative barriers and turn my ideas into
          practical solutions. Highly recommend!"
        </p>
      </div>
    </div>

    <div className="card">
      <div className="testimonial-image">
        {/* Image will be replaced with your actual image */}
        <img src={VimalImage} alt="Vimal Kumar Yadav" />
      </div>
      <div className="testimonial-content">
        <h3>Vimal Kumar Yadav</h3>
        <p>
        "Catalyst has taken my creativity to the next level! The AI-driven features helped me refine my ideas and collaborate more effectively with my team. A must-try!"
        </p>
      </div>
    </div>
    <div className="card">
      <div className="testimonial-image">
        {/* Image will be replaced with your actual image */}
        <img src={PathakImage} alt="Vimal Kumar Yadav" />
      </div>
      <div className="testimonial-content">
        <h3>Vimal Kumar Yadav</h3>
        <p>
        "Catalyst has taken my creativity to the next level! The AI-driven features helped me refine my ideas and collaborate more effectively with my team. A must-try!"
        </p>
      </div>
    </div>
    </div>
    
  </div>
  </div>
  </>
);

export default Blog;
