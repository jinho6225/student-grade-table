import React, { Component } from 'react';
import AuthContent from './AuthContent';
import InputWithLabel from './InputWithLabel';
import AuthButton from './AuthButton';
import RightAlignedLink from './RightAlignedLink';
import { Consumer } from '../../store.jsx';
import { isEmail, isLength, isAlphanumeric } from 'validator';

class Register extends Component {
  constructor(props) {
    super(props);

    this.validate = {
      email: (value) => {
        if (!isEmail(value)) {
          this.setError('잘못된 이메일 형식 입니다.');
          return false;
        }
        return true;
      },
      username: (value) => {
        if (!isAlphanumeric(value) || !isLength(value, { min: 4, max: 15 })) {
          this.setError(
            '아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.'
          );
          return false;
        }
        return true;
      },
      password: (value) => {
        if (!isLength(value, { min: 6 })) {
          this.setError('비밀번호를 6자 이상 입력하세요.');
          return false;
        }
        this.setError(null); // 이메일과 아이디는 에러 null 처리를 중복확인 부분에서 하게 됩니다
        return true;
      },
      passwordConfirm: (value) => {
        if (this.props.form.get('password') !== value) {
          this.setError('비밀번호확인이 일치하지 않습니다.');
          return false;
        }
        this.setError(null);
        return true;
      },
    };

    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentEditing, editing } = this.props;
    if (!currentEditing) {
      this.props.postGrade(this.state);
      this.setState({
        name: '',
        course: '',
        grade: '',
      });
    }
    if (currentEditing) {
      this.props.updateGrade(currentEditing, this.state);
      this.setState({
        name: '',
        course: '',
        grade: '',
      });
      editing();
    }
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
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
        <AuthButton>Sign Up</AuthButton>
        <RightAlignedLink to="/auth/login">Login</RightAlignedLink>
        <Consumer>{({ grades }) => console.log(grades, 'hey')}</Consumer>
      </AuthContent>
    );
  }
}

export default Register;
