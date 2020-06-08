import React, { Component } from 'react';
import AuthWrapper from '../Auth/AuthWrapper';
import { Route } from 'react-router-dom';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

class Auth extends Component {
  render() {
    return (
      <AuthWrapper>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
      </AuthWrapper>
    );
  }
}

export default Auth;
