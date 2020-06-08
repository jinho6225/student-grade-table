import React, { Component } from 'react';
import AuthContent from './AuthContent';
import InputWithLabel from './InputWithLabel';
import AuthButton from './AuthButton';
import RightAlignedLink from './RightAlignedLink';

class Login extends Component {
  render() {
    return (
      <AuthContent title="Sign In">
        <InputWithLabel label="email" name="email" placeholder="email" />
        <InputWithLabel
          label="password"
          name="password"
          placeholder="password"
          type="password"
        />
        <AuthButton>Sign In</AuthButton>
        <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
      </AuthContent>
    );
  }
}

export default Login;
