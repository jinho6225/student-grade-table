import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

class Home extends Component {
  render() {
    return (
      <div className="d-flex align-items-center">
        <p className="m-0">
          <Link to="/auth">Auth</Link>
        </p>
        <LoginButton />
      </div>
    );
  }
}

export default Home;
