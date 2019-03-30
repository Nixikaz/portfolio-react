import React, { Component } from 'react';
import Navbar from './Navbar';
import LogoComp from './LogoComp';
import Social from './Social';

class Header extends Component {
  render() {
    return (
      <header className="head__container">
        <LogoComp />
        <Navbar />
        <Social />
      </header>
    );
  }
}

export default Header;
