import React from 'react';

import AboutNav from '../../components/about-nav/about-nav.component';
import Motivation from '../../components/motivation/motivation.component';

import './about.styles.scss';

const About = () => (
  <div className='about'>
    <AboutNav />
    <Motivation />
  </div>
);

export default About;