import React, { Component } from 'react';
import AuthContent from './AuthContent';
import InputWithLabel from './InputWithLabel';
import AuthButton from './AuthButton';
import RightAlignedLink from './RightAlignedLink';
import { Consumer } from '../../store.jsx';

class Register extends Component {
  render() {
    return (
      <AuthContent title="Sign Up">
        <InputWithLabel label="email" name="email" placeholder="email" />
        <InputWithLabel
          label="password"
          name="password"
          placeholder="password"
          type="password"
        />
        <InputWithLabel
          label="passwordConfirm"
          name="passwordConfirm"
          placeholder="passwordConfirm"
          type="password"
        />
        <AuthButton>Sign Up</AuthButton>
        <RightAlignedLink to="/auth/login">Login</RightAlignedLink>
        <Consumer>{({ grades }) => console.log(grades, 'hey')}</Consumer>
      </AuthContent>
    );
  }
}

export default Register;
