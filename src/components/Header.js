import React, { Component } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import Social from './Social';

class Header extends Component {
  render() {
    return (
      <header className="head__contianer">
        <Logo />
        <Navbar />
        <Social />
      </header>
    );
  }
}

export default Header;
