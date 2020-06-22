import React from 'react';

import AboutNav from '../../components/about-nav/about-nav.component';
import CustomTitle from '../../components/custom-title/custom-title.component';

import './about.styles.scss';

const About = () => (
  <div className='about'>
    <AboutNav />
    <CustomTitle>The Motivation</CustomTitle>
    <div></div>
  </div>
);

export default About;