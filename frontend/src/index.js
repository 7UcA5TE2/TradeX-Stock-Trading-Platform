import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routers, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage.js';
import AboutPage from './landing_page/about/AboutPage.js';
import PricingPage from './landing_page/pricing/PricingPage.js';
import ProductPage from './landing_page/product/ProductPage.js';
import SupportPage from './landing_page/support/SupportPage.js';
import SignUp from './landing_page/sign_up/SignUp.js';
import NotFound from './landing_page/NotFound.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/products' element={<ProductPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
