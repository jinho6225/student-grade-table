import React, { Component } from 'react';
import AuthContent from './AuthContent';
import InputWithLabel from './InputWithLabel';
import AuthButton from './AuthButton';
import RightAlignedLink from './RightAlignedLink';
import { Consumer } from '../../store.jsx';
import storage from '../../lib/storage';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    storage.set('loggedInfo', this.state.email);
    this.setState({
      email: '',
      password: '',
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

    return (
      <AuthContent title="Sign In">
        <InputWithLabel
          label="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
        />
        <InputWithLabel
          label="password"
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={this.handleChange}
        />
        <Consumer>
          {({ loginUser }) => (
            <AuthButton
              onClick={() => {
                loginUser({ email, password });
                this.props.history.push('/');
                this.handleSubmit();
              }}
            >
              Sign In
            </AuthButton>
          )}
        </Consumer>

        <RightAlignedLink to="/auth/register">Sign Up</RightAlignedLink>
      </AuthContent>
    );
  }
}

export default withRouter(Login);
