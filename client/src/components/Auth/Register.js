import React, { Component } from 'react';
import AuthContent from './AuthContent';
import InputWithLabel from './InputWithLabel';
import AuthButton from './AuthButton';
import RightAlignedLink from './RightAlignedLink';

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
      </AuthContent>
    );
  }
}

export default Register;
