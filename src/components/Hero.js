import React, { Component } from 'react';
import { Spring, config } from 'react-spring/renderprops';
import '../images/code_hero.jpg';

export default class Hero extends Component {
  render() {
    return (
      <Spring
        from={{ height: 800, opacity: 0 }}
        to={{ height: 250, opacity: 1 }}
        config={{ delay: 500, friction: 100, duration: 800 }}
      >
        {({ height, opacity }) => (
          <div className="hero" style={{ height }}>
            <div className="hero__grid" style={{ opacity }}>
              <span className="hero__intro">Hi, my name is</span>
              <span className="hero__firstname">Kevin</span>
              <span className="hero__and">and I am a</span>
              <span className="hero__lastname">Zembrodt</span>
              <span className="hero__webdev">front-end developer</span>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
