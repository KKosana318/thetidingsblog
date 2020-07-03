import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { firestore } from './firebase/firebase.utils';

import './App.css';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import Team from './pages/team/team.component';
import Partners from './pages/partners/partners.component';
import Economics from './pages/economics/economics.component';
import History from './pages/history/history.component';
import Blog from './pages/blog/blog.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

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

  // componentDidMount() {
  //   firestore.collection('blogs').get().then(querySnapshot => {
  //     querySnapshot.docs.map(function (doc) {

  //     })
  //   })
  // }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/team' component={ Team } />
          <Route exact path='/partners' component={ Partners } />
          <Route exact path='/economics' component={ Economics } />
          <Route exact path='/history' component={ History } />
          <Route exact path='/post/:blogName' component={ Blog } />
        </Switch>
      </div>
    );
  }
}

export default App;
