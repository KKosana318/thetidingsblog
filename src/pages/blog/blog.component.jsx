import React from 'react';
import { firestore } from '../../firebase/firebase.utils';

import BlogPost from '../../components/blog-post/blog-post.component';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      featured: false,
      date: '',
      category: '',
      content: ''
    }
  }

  findFeatured = title => {
    return title.indexOf('F') === 0;
  };

  findTitle = title => {
    let result = '';
    const end = title.search('writtenby') - 1;
    if (this.findFeatured(title))
      result = title.substring(3, end);
    else
      result = title.substring(2, end);
    return result;
  };

  findAuthor = title => {
    return title.substring(title.search('writtenby') + 10);
  };

  findCategory = category => {
    if (this.findFeatured(category))
      return category.substring(1, 2);
    else
      return category.substring(0, 1);
  }

  findContent = content => {
    let start = content.search('<body');
    let end = content.lastIndexOf('</body>') + 7;
    return content.substring(start, end);
  }

  componentDidMount() {
    const blogName = this.props.match.params.blogName;
    firestore.collection('blogs').doc(`${blogName}`).get().then(doc => {
      this.setState({
        title: this.findTitle(doc.get('title')),
        author: this.findAuthor(doc.get('title')),
        featured: this.findFeatured(doc.get('category')),
        date: doc.get('date'),
        category: this.findCategory(doc.get('title')),
        content: this.findContent(doc.get('content'))
      });
    });
  }

  render() {
    const { title, author, date, category, content } = this.state;

    return (
      <div>
        <BlogPost title={ title } author={ author } date={ date } category={ category } content={ content } />
      </div>
    )
  }
}

export default Blog;