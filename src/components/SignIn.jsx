import React, { Component } from 'react';
// Link: allows creation of links via react-router
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // Error message State/Data
      error: {
        message: ''
      }
    }
  }

  signIn() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    // Firebase Method signInWithEmailAndPassword
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        // Show the error message
        this.setState({error})
      })
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '2rem'}}>
        <h2>Sign In</h2>
        <div className="from-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5px'}}
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            style={{marginRight: '5px'}}
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}
          >
            Sign Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>Sign up instead</Link></div>
      </div>
    )
  }
}

export default SignIn;
