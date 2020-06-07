import React, { Component } from 'react';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';

class Auth extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/">Home</Link>
        </p>
        <LoginButton />
      </div>
    );
  }
}

export default Auth;
