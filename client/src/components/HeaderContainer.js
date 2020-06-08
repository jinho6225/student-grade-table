import React, { Component } from 'react';
import Header from './Header';
import LoginButton from './LoginButton';

class HeaderContainer extends Component {
  render() {
    const { average, getGrade } = this.props;

    return (
      <Header average={average} getGrade={getGrade}>
        <LoginButton />
      </Header>
    );
  }
}

export default HeaderContainer;
