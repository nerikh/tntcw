import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './styles/index.css';
import App from './components/App';
import SignIn from './components/SignIn';
import { firebaseApp } from './firebase';
// Redux ///////////////////////////////////////////////////////////////////////
import { Provider } from 'react-redux'; // Provider wraps  ReactDom.render
import { createStore } from 'redux'; // Store called by Provider 

const store = createStore();
// Redux ///////////////////////////////////////////////////////////////////////

// Firebase Auth ///////////////////////////////////////////////////////////////
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
// Firebase Auth ///////////////////////////////////////////////////////////////

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/signin" component={SignIn} />
      <Route path="/core-warranty" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
