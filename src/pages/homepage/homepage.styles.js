import styled from 'styled-components'

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 900px;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
`

export const BackgroundImage = styled.div`
  background-image: url(https://i.ibb.co/ckGKNSH/homepage.png);
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  `
export const Content = styled.div`
  // border: 3px solid red;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgb(0, 0, 0, .5);
  color: white;
  // text-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px #black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`

export const Title = styled.h1`
  font-size: 60px;
  padding-bottom: 20px;
`

export const Subtitle = styled.span`
  border-top: 1px solid #800000;
  font-size: 30px;
  padding: 20px 0;
`

export const MissionContainer = styled.div`
  height: 600px;
  margin: 50px 0;
  text-align: center;
`

export const MissionImage = styled.img`
  height: 100%;
`

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;`

export const BlogsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`