import React, { Component } from 'react';
import '../images/code_hero.jpg';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="logo hero--center">
          <h1 className="logo--light">
            Kev<span className="logo--opacity">in</span>
          </h1>
          <h1 className="logo__lastname">
            Zem<span className="logo--opacity">brodt</span>
          </h1>
          <p>Front-End Web Developer</p>
        </div>
      </div>
    );
  }
}
