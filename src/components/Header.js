import React, { Component } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <header className="head__contianer">
        <Logo />
        <Navbar />
      </header>
    );
  }
}

export default Header;
