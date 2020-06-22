import React from 'react';

import './custom-title.styles.scss';

const CustomTitle = ({ children }) => (
  <h1 class='custom-title'>{ children }</h1>
);

export default CustomTitle;