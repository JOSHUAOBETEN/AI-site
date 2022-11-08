import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css'

const app = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <div className='gradient__bg-feature'>
        <Features />
        </div>
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default app