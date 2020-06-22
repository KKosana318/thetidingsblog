import React from 'react';

import './member.styles.scss';

const Member = ({ color }) => (
  <div className="member">
    <img className='face' src="https://static.wixstatic.com/media/140193_2993a2656383430fb4536fa7219f483d~mv2.jpg/v1/fill/w_273,h_271,al_c,q_80,usm_0.66_1.00_0.01/IMG_20180512_214951_308__01%20(1).webp" alt="" />
    <div className={ `${color} ? ${color} : '' details` }>
      <div className='text'>
        <h1 className='name'>Wellford Dillard</h1>
        <h2 className='title'>Chief Executive Officer</h2>
        <p className='description'>Wellford Dillard is the CEO of CM Group. Wellford has more than 15 years of experience in the software industry and held CFO roles at six companies prior to CM Group, including OPower (OPWR: sold to Oracle) and GetWellNetwork (sold to Welsh, Carson, Anderson and Stowe). Prior to holding senior leadership positions in the software industry, Wellford worked in management consulting, investment banking and equity research. Wellford holds an MBA from the University of Maryland and earned his BA in Finance from the University of Memphis.</p>
      </div>
    </div>
  </div>
);

export default Member;