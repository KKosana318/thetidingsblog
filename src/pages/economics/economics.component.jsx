import React from 'react';
import { firestore } from '../../firebase/firebase.utils';

import BlogPage from '../../components/blog-page/blog-page.component';

class Economics extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      image: '',
      whyRead: ''
    }
  }

  componentDidMount() {
    firestore.collection('blog-categories').doc('gJFuYmykEtF5oTmoZO1L').get().then(doc => {
      this.setState({ name: doc.get('name'), image: doc.get('image'), whyRead: doc.get('why-read') });
    });
  }


  render() {
    const { name, image, whyRead } = this.state;

    return (
      <BlogPage name={ name } image={ image } whyRead={ whyRead } />
    )
  }
}

export default Economics;