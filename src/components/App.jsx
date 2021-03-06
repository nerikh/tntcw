import React, { Component } from 'react';
import '../styles/App.css';
import Nav from './Nav';
import CoreWarranty from './CoreWarranty';
import AddWarrantyItem from './AddWarrantyItem';

class App extends Component {
  
  render() {
    return (
      <div className="app-wrapper">
        <div className="header">
          <div>TNT Cloud</div>
        </div>
        <Nav />
        <div className="main small-12 medium-8 large-10 columns">
          <CoreWarranty />
          <AddWarrantyItem />
        </div>
      </div>
    );
  }
}

export default App;
