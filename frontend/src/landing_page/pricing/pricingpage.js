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
      <OpenAccount/>
      <hr className=" container border-buttom" style={{marginTop:"5rem"}}/>
      <BrokeRage />
      <Footer/>
    </>
  );
}

export default PricingPage;