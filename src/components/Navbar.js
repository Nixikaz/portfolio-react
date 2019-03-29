import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export default class Navbar extends Component {
  getNavLinkClass = path => {
    return this.props.location.pathname === path ? 'active' : '';
  };
  render() {
    return (
      <nav className="header__navbar">
        <ul className="nav">
          <li className={this.getNavLinkClass('/')}>
            <NavLink exact to="/" aria-label="Go back to the main page">
              Home
            </NavLink>
          </li>
          <li className={this.getNavLinkClass('/about')}>
            <NavLink to="/about" aria-label="A little bit about me">
              About
            </NavLink>
          </li>
          <li className={this.getNavLinkClass('/projects')}>
            <NavLink to="/projects" aria-label="Check out my projects">
              Projects
            </NavLink>
          </li>
          <li className={this.getNavLinkClass('/contact')}>
            <NavLink to="/contact" aria-label="Get in contact with me.">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

Navbar = withRouter(Navbar);
