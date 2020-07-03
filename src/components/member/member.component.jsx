import React from 'react';

import './member.styles.scss';

const Member = ({ color, image, name, title, description }) => (
  <div className="member">
    <img className='face' src={ image } alt="" />
    <div className={ `${color} ? ${color} : '' details` }>
      <div className='text'>
        <h1 className='name'>{ name }</h1>
        <h2 className='title'>{ title }</h2>
        <p className='description'>{ description }</p>
      </div>
    </div>
  </div>
);

export default Member;