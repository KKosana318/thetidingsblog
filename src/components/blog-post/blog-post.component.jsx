import React from 'react';

import { BlogPostContainer, Title, Author, Date, Category, Content } from './blog-post.styles';

const BlogPost = ({ title, author, date, category, content }) => (
  <BlogPostContainer>
    <Title> { title }</Title>
    <Author> { author }</Author>
    <Date> { date }</Date>
    <Category>category { category }</Category>
    <Content dangerouslySetInnerHTML={ { __html: content } } />
  </BlogPostContainer>
)

export default BlogPost;