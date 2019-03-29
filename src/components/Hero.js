import React, { Component } from 'react';
import '../images/code_hero.jpg';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero--center">
          <h1 className="hero__firstname">Kevin</h1>
          <h1 className="hero__lastname">Zembrodt</h1>
          <span className="text--small">Front-End Web Developer</span>
        </div>
      </div>
    );
  }
}
