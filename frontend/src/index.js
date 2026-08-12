import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage.js';
import AboutPage from './landing_page/about/AboutPage.js';
import PricingPage from './landing_page/pricing/PricingPage.js';
import ProductPage from './landing_page/product/ProductPage.js';
import SupportPage from './landing_page/support/SupportPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HomePage/>
      <AboutPage/>
      <PricingPage/>
      <ProductPage/>
      <SupportPage/>
  </React.StrictMode>
);

