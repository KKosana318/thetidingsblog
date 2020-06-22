import React from 'react';

import Stats from '../../components/stats/stats.component';
import BlogPreview from '../../components/blog-preview/blog-preview.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomTitle from '../../components/custom-title/custom-title.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='header'>
      <h1 className='title'>Welcome to the Tidings Blog.</h1>
      <span className='subtitle'>A student-run economics and history blog.</span>
      <CustomButton>Join us</CustomButton>
      <Stats />
    </div>
    <div className='preview'>
      <CustomTitle>Our Articles</CustomTitle>
      <div class='blogs'>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </div>
    </div>
  </div>
)

export default HomePage;