import React, { Component } from 'react';
import Header from './header.jsx';
import LoginButton from './LoginButton';
import { Consumer } from '../store.jsx';
import styled from 'styled-components';
import oc from 'open-color';
import storage from '../lib/storage';

const LoginDiv = styled.div`
  font-weight: 600;
  color: black;
  border: 1px solid ${oc.cyan[11]};
  padding: 0.4rem;
  margin-left: 0.3rem;
  cursor: pointer;
  border-radius: 6px;
  text-decoration: none;
  transition: 0.2s all;

  &:hover {
    background: ${oc.cyan[11]};
    color: white;
    transform: translateY(3px);
  }
`;

class HeaderContainer extends Component {
  render() {
    const { average, getGrade } = this.props;

    return (
      <Header average={average} getGrade={getGrade}>
        <Consumer>
          {({ isLogined, currentUser }) => {
            console.log(currentUser);
            console.log(typeof currentUser, 'type');
            let result =
              currentUser === null
                ? `...loading`
                : `${currentUser.split('@')[0]} / LogOUt`;
            return isLogined ? (
              <LoginDiv
                onClick={() => {
                  storage.remove('loggedInfo');
                  window.location.href = '/';
                }}
              >
                {result}
              </LoginDiv>
            ) : (
              <LoginButton />
            );
          }}
        </Consumer>
      </Header>
    );
  }
}

export default HeaderContainer;
