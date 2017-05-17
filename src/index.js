import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import SignIn from './components/SignIn';

// Firebase -listener for Firebase Authentication 
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed in or up', user);
    // link redirect to url automatically after login
    browserHistory.push('/core-warranty');
  } else {
//    console.log('user has signed out or still needs to sign in.')
    // If/when user un-authenticates, send back to signin
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <Route path="/core-warranty" component={App} />
    <Route path="/signin" component={SignIn} />
  </Router>,
  document.getElementById('root')
);

