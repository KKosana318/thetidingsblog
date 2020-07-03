import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './blog-preview.styles.scss';

const BlogPreview = () => (
  <div className='blog-preview'>
    <img src="https://static.wixstatic.com/media/140193_e8fa74e8073e4fafb7ea88939769cca6~mv2.jpg/v1/fill/w_925,h_520,al_c,q_90,usm_0.66_1.00_0.01/140193_e8fa74e8073e4fafb7ea88939769cca6~mv2.webp" alt="" />
    <div className='preview'>
      <h1 className='titleww'>The Spanish Flu</h1>
      <p className='authorww'>Written by big sav</p>
      <div className='detailsww'>
        <p className='timeww'>5 hours ago</p>
        <p className='lengthww'>6 min read</p>
      </div>
      <p className='desc'>Description</p>
    </div>
    <CustomButton>Read post</CustomButton>
  </div>
)

export default BlogPreview;