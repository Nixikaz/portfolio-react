import React, { Component } from 'react';
import { ReactComponent as Logo } from '../images/kz_logo.svg';
import { NavLink, withRouter } from 'react-router-dom';

export default class LogoComp extends Component {
  render() {
    return (
      <div className="logo">
        <NavLink exact to="/" aria-label="Go back to the main page">
          <Logo />
        </NavLink>
      </div>
    );
  }
}

LogoComp = withRouter(LogoComp);
