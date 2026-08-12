import React from 'react';
import HeroSection from './Hero';
import CreateTicket from './CreateTicket';

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
function SupportPage() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <CreateTicket />
      <OpenAccount/>
      <Footer/>
    </>
  );
}

export default SupportPage;
