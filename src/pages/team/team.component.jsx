import React from 'react';

import Member from '../../components/member/member.component';
import CustomTitle from '../../components/custom-title/custom-title.component';
import AboutNav from '../../components/about-nav/about-nav.component';

import './team.styles.scss';

const Team = () => (
  <div className='team'>
    <AboutNav />
    <CustomTitle>Our Team</CustomTitle>
    <Member color="grey" />
    <Member />
    <Member color="grey" />
    <Member />
    <Member color="grey" />
    <Member />
  </div>
);

export default Team;