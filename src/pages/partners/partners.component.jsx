import React from 'react';

import Member from '../../components/member/member.component';
import CustomTitle from '../../components/custom-title/custom-title.component';
import AboutNav from '../../components/about-nav/about-nav.component';

import { PartnersContainer } from './partners.styles';

const Partners = () => (
  <PartnersContainer>
    <AboutNav />
    <CustomTitle>Our Partners</CustomTitle>
    <Member color="grey" image='https://policyinitiatives.weebly.com/uploads/1/3/1/3/131386740/edited/ultimatefaceimage.jpg' name="Policy Initiatives Institute" description='Our organization is called the Policy Initiatives Institute. Our mission is to educate the public in a non-partisan manner about policies that affect our day-to-day lives while striving to change those lives for the better. Concurrently, we wish to guide legislators in their quest to best serve the people through proposing legislation of our own. While we are based on the East Coast, we have built an international audience and an international team with a goal to take student advocacy and civil discourse to a new level to ultimately change the system for the better.' />
  </PartnersContainer>
);

export default Partners;