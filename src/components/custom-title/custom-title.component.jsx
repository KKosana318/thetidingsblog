import React from 'react';

import { CustomTitleContainer } from './custom-titles.styles';

const CustomTitle = ({ children, margin, color }) => (
  <CustomTitleContainer color={ color ? true : false } margin={ margin ? true : false }>{ children }</CustomTitleContainer>
);

export default CustomTitle;