import React from 'react';
import HeroSection from './Hero.js';
import BrokeRage from './BrokeRage.js';

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
function PricingPage() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <BrokeRage />
      <OpenAccount />
      <Footer/>
    </>
  );
}

export default PricingPage;