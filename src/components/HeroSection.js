import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Get hired for your skills, not experience</h1>
      <p>The best tool to start career journey wuth. Get connected with the best companies - just share your CV to get started.</p>
      <div className="hero-btns">
        <Button className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            GET STARTED
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
