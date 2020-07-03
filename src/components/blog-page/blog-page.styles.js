import styled from 'styled-components';

export const BlogPageContainer = styled.div`
  display: flex;
  flex-direction: column;  
`

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;  
  width: 100vw;
  height: 900px;
  position: relative;
  left: calc(-50vw + 50%);
  margin-bottom: 30px;
`

export const BackgroundImage = styled.div`
  background-image: url(${props => `${props.image}`});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`

export const IntroContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(128, 0, 15, 0.8);
  height: 100%;
  text-shadow: 0 0 5px black;
  text-align: center;
`

export const WhyRead = styled.h1`
  font-size: 40px;
  font-style: italic;
  margin-bottom: 20px;
`

export const Answer = styled.p`
  width: 70%;
  line-height: 50px;
  font-size: 30px;
`

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BlogsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`