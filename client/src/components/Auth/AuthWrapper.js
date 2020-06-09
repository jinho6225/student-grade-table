import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
  width: 500px;
  @media (max-width: 640px) {
    width: 300px;
  }
`;

// 로고
const LogoWrapper = styled.div`
  background: ${oc.teal[7]};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    height: 3rem;
  }
`;

const Logo = styled(Link)`
  color: white;
  font-family: 'Rajdhani';
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-decoration: none;
  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;

const Contents = styled.div`
  background: #fffff3;
  padding: 2rem;
  height: auto;
  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

const AuthWrapper = ({ children }) => (
  <Positioner>
    <ShadowedBox>
      <LogoWrapper>
        <Logo to="/">Grade Table</Logo>
      </LogoWrapper>
      <Contents>{children}</Contents>
    </ShadowedBox>
  </Positioner>
);

export default AuthWrapper;
