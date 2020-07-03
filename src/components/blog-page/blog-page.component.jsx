import React from 'react';

import { BlogPageContainer, IntroContainer, BackgroundImage, IntroContent, WhyRead, Answer, ArticlesContainer, BlogsContainer } from './blog-page.styles';

import CustomTitle from '../custom-title/custom-title.component';
import BlogPreview from '../blog-preview/blog-preview.component';

const BlogPage = ({ name, whyRead, image }) => (
  <BlogPageContainer>
    <IntroContainer>
      <BackgroundImage image={ image } />
      <IntroContent>
        <CustomTitle color>{ name.toUpperCase() }</CustomTitle>
        <WhyRead>Why read { name }?</WhyRead>
        <Answer dangerouslySetInnerHTML={ { __html: whyRead } } />
      </IntroContent>
    </IntroContainer>
    <ArticlesContainer>
      <CustomTitle>All { name } Articles</CustomTitle>
      <BlogsContainer>
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
        <BlogPreview />
      </BlogsContainer>
    </ArticlesContainer>
  </BlogPageContainer>
)

export default BlogPage;