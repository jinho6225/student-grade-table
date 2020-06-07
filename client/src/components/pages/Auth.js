import React, { Component } from 'react';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';

class Auth extends Component {
  render() {
    return (
      <div className="d-flex align-items-center">
        <p className="m-0">
          <Link to="/">Home</Link>
        </p>
        <LoginButton />
      </div>
    );
  }
}

export default Auth;
