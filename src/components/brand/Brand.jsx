import React from 'react';
import { google, groq, scaler, metaAI, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div className="groq" >
      <img src={groq} />
    </div>
    <div>
      <img src={scaler} />
    </div>
    <div className="meta">
      <img src={metaAI} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
