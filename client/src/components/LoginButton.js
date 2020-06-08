import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const BorderedButton = styled(Link)`
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
  }

  &:active {
    transform: translateY(3px);
  }
`;

const LoginButton = () => (
  <BorderedButton to="/auth/login">Login / Register</BorderedButton>
);

export default LoginButton;
