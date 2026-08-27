import React from 'react';
import HeroSection from './Hero';
import LeftSection from './LeftSection';
import RighttSection from './RightSection'
import Universe from './Universe';

import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function ProductPage() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <LeftSection/>
      <RighttSection/>
      <Universe/>
      <Footer />
    </>
  );
}

export default ProductPage;