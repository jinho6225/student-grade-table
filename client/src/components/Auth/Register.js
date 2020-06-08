import React, { Component } from 'react';
import AuthContent from './AuthContent';
import InputWithLabel from './InputWithLabel';
import AuthButton from './AuthButton';
import RightAlignedLink from './RightAlignedLink';
import { Consumer } from '../../store.jsx';
import { isEmail, isLength } from 'validator';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
  }

  checkValidation() {
    const { email, password, passwordConfirm } = this.state;
    if (!isEmail(email)) {
      this.setError('잘못된 이메일 형식 입니다.');
      return false;
    }
    if (!isLength(password, { min: 6 })) {
      this.setError('비밀번호를 6자 이상 입력하세요.');
      return false;
    }
    if (password !== passwordConfirm) {
      this.setError('비밀번호확인이 일치하지 않습니다.');
      return false;
    }
    return true;
  }

  handleSubmit() {
    this.setState({
      email: '',
      password: '',
      passwordConfirm: '',
    });
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    console.log(this.state, 'hello');
    return (
      <AuthContent title="Sign Up">
        <InputWithLabel
          label="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="email"
        />
        <InputWithLabel
          label="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="password"
          type="password"
        />
        <InputWithLabel
          label="passwordConfirm"
          name="passwordConfirm"
          value={this.state.passwordConfirm}
          onChange={this.handleChange}
          placeholder="passwordConfirm"
          type="password"
        />
        <Consumer>
          {({ createUser }) => (
            <AuthButton
              onClick={() => {
                this.checkValidation();
                createUser({ email, password });
                this.handleSubmit();
              }}
            >
              Sign Up
            </AuthButton>
          )}
        </Consumer>
        <RightAlignedLink to="/auth/login">Sign In</RightAlignedLink>
      </AuthContent>
    );
  }
}

export default Register;
