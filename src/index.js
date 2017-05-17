import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';

import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <Route path="/core-warranty" component={App} />
  </Router>,
  document.getElementById('root')
);
