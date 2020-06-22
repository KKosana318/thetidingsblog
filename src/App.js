import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import Team from './pages/team/team.component';
import Partners from './pages/partners/partners.component';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/team' component={ Team } />
        <Route exact path='/partners' component={ Partners } />
      </Switch>
    </div>
  );
}

export default App;
