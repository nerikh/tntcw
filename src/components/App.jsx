import React, { Component } from 'react';
import '../styles/App.css';
import { firebaseApp } from '../firebase';
import Nav from './Nav';
import WarrantyTracker from './WarrantyTracker';
import { Link } from 'react-router';

class App extends Component {

  render() {
    return (
      <div className="app-wrapper">
        <div className="header">
          <div>TNT Cloud</div>
        </div>
        <Nav />
        <div className="main small-12 medium-8 large-10 columns">
          <WarrantyTracker />
        </div>
      </div>
    );
  }
}

export default App;
