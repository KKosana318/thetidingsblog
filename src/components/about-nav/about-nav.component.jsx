import React from 'react';
import { Link } from 'react-router-dom';

import './about-nav.styles.scss';

const AboutNav = () => (
  <div className='about-nav'>
    <Link className='about-option' to="/about">
      Overview
    </Link>
    <Link className='about-option' to="/team">
      Team
      </Link>
    <Link className='about-option' to="/partners">
      Partners
      </Link>
  </div>
);

export default AboutNav;