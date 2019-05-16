import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import '../images/code_hero.jpg';

export default class Hero extends Component {
  render() {
    return (
      <Spring from={{ height: 700 }} to={{ height: 250 }} config={{ friction: 100, delay: 900, duration: 700 }}>
        {height => (
          <div className="hero" style={height}>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ friction: 100, duration: 800 }}>
              {props => (
                <div className="hero__grid" style={props}>
                  <span className="hero__intro">Hi, my name is</span>
                  <span className="hero__firstname">Kevin</span>
                  <span className="hero__and">and I am a</span>
                  <span className="hero__lastname">Zembrodt</span>
                  <span className="hero__webdev">front-end developer</span>
                </div>
              )}
            </Spring>
          </div>
        )}
      </Spring>
    );
  }
}
