import React from 'react';
// import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
