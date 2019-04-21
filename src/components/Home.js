import React, { Component } from 'react';
import Html from './Html';
import Css from './Css';
import Javascript from './Javascript';
import { Spring } from 'react-spring/renderprops';

export default class Home extends Component {
  render() {
    const animateFrom = { opacity: 0, transform: 'translate(-10px, 20px)' };
    const animateTo = { opacity: 1, transform: 'translate(0, 0)' };
    return (
      <main className="content">
        <Spring from={animateFrom} to={animateTo} config={{ delay: 500, duration: 300, tension: 100, friction: 14 }}>
          {props => (
            <section className="card__section" style={props}>
              <Html />
            </section>
          )}
        </Spring>
        <Spring from={animateFrom} to={animateTo} config={{ delay: 1000, duration: 300 }}>
          {props => (
            <section className="card__section" style={props}>
              <Css />
            </section>
          )}
        </Spring>
        <Spring from={animateFrom} to={animateTo} config={{ delay: 1500, duration: 300 }}>
          {props => (
            <section className="card__section" style={props}>
              <Javascript />
            </section>
          )}
        </Spring>
      </main>
    );
  }
}
