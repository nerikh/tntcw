import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class Nav extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="nav small-12 medium-4 large-2 columns">
        <div><Link to={'/core-warranty'}>Core/Warranty</Link></div>
        <button 
          type="button" 
          className="button primary hollow"
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
}

export default Nav;