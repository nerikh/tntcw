import React, { Component } from 'react';
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
      <div className="row" style={{margin: '2rem'}}>
        <div className="small-3 columns">
          <h2>Sign In</h2>
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
            className="button primary"
            type="button"
            onClick={() => this.signIn()}
          >
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
      </div>
    )
  }
}

export default SignIn;
