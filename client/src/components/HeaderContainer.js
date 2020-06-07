import React, { Component } from 'react';
import Header from './Header';
import { Route } from 'react-router-dom';
import { Home, Auth, Login } from './pages';

class HeaderContainer extends Component {
  render() {
    const { average, getGrade } = this.props;

    return (
      <Header average={average} getGrade={getGrade}>
        <div className="ml-2 d-flex">
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/auth/login" component={Login} />
        </div>
      </Header>
    );
  }
}

export default HeaderContainer;
