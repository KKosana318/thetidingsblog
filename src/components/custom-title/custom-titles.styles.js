import styled from 'styled-components';

export const CustomTitleContainer = styled.div`
  font-size: 60px;
  border-bottom: 1px solid ${props => props.color === true ? 'white' : '#800000'};
  margin-bottom: ${props => props.margin === true ? "10px" : "50px"};
`

