import React from 'react';
import HeroSection from './Hero.js';
import Team from './Team.js';

import Footer from '../Footer';
import Navbar from '../Navbar';
function AboutPage() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Team/>
      <Footer/>
    </>
  );
}

export default AboutPage;