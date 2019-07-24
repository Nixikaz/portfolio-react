import React, { Component } from 'react';
import Html from './Html';
import Css from './Css';
import Javascript from './Javascript';
import { Spring } from 'react-spring/renderprops';

export default class Home extends Component {
  render() {
    const animateFrom = { opacity: 0, transform: 'translateY(20px)' };
    const animateTo = { opacity: 1, transform: 'translateY(0)' };
    return (
      <main className="content">
        <div className="home__intro">
          <p>
            I have a passion for design and practicality. I like to create things that are not only functional, but also
            appealing to the eye. I like how web development utilizes the best of both these worlds. I like solving
            problems and preventing them through testing.
          </p>
          <blockquote className="intro__quote">
            <p>Anything worth doing, is worth doing right.</p>
          </blockquote>
          <cite>-Hunter S. Thompson</cite>
        </div>
        <Spring from={animateFrom} to={animateTo} config={{ delay: 1700, duration: 300, tension: 100, friction: 14 }}>
          {props => (
            <section className="card__section" style={props}>
              <Javascript />
            </section>
          )}
        </Spring>
        <Spring from={animateFrom} to={animateTo} config={{ delay: 2000, duration: 300 }}>
          {props => (
            <section className="card__section" style={props}>
              <Html />
            </section>
          )}
        </Spring>
        <Spring from={animateFrom} to={animateTo} config={{ delay: 2300, duration: 300 }}>
          {props => (
            <section className="card__section" style={props}>
              <Css />
            </section>
          )}
        </Spring>
      </main>
    );
  }
}
