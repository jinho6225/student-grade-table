import React, { Component } from 'react';
import AuthWrapper from '../Auth/AuthWrapper';
import { Route } from 'react-router-dom';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

class Auth extends Component {
  render() {
    return (
      <AuthWrapper>
        <Route path="/auth/login" component={Login}>
          <Login />
        </Route>
        <Route path="/auth/register" component={Register}>
          <Register />
        </Route>
      </AuthWrapper>
    );
  }
}

export default Auth;
