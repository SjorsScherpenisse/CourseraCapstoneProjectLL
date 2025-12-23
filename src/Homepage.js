import { useState } from 'react';
import HeroSection from './HeroSection.js';
import HighlightSection from './HighlightSection.js';
import TestimonialSection from './TestimonialSection.js';
import AboutSection from './AboutSection.js';

function Homepage() {
  return (
    <main className='main-container'>
      <HeroSection/>
      <HighlightSection/>
      <TestimonialSection/>
      <AboutSection/>
    </main>
  );
}

export default Homepage;