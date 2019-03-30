import React, { Component } from 'react';
import '../images/code_hero.jpg';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__grid">
          <span className="hero__intro">Hi, my name is</span>
          <span className="hero__firstname">Kevin</span>
          <span className="hero__and">and I am a</span>
          <span className="hero__lastname">Zembrodt</span>
          <span className="hero__webdev">front-end developer</span>
        </div>
      </div>
    );
  }
}
