import React from 'react';

import Stats from '../../components/stats/stats.component';
import BlogPreview from '../../components/blog-preview/blog-preview.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomTitle from '../../components/custom-title/custom-title.component';

import { HomePageContainer, HeaderContainer, BackgroundImage, Content, Title, Subtitle, MissionContainer, MissionImage, PreviewContainer, BlogsContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer >
    <HeaderContainer>
      <BackgroundImage></BackgroundImage>
      <Content>
        <Title>Welcome to the Tidings Blog.</Title>
        <Subtitle>A student-run economics and history blog.</Subtitle>
        <CustomButton>Join us</CustomButton>
        <Stats />
      </Content>
    </HeaderContainer>
    <MissionContainer>
      <MissionImage src="https://i.ibb.co/P539Dv3/mission.png" alt="" />
    </MissionContainer>

    <PreviewContainer>
      <CustomTitle>Our Articles</CustomTitle>
      <BlogsContainer>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </BlogsContainer>
    </PreviewContainer>
  </HomePageContainer >
)

export default HomePage;