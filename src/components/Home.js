import React, { Component } from 'react';
import Html from './Html';
import Css from './Css';
import Javascript from './Javascript';
import { Spring } from 'react-spring/renderprops';

export default class Home extends Component {
  render() {
    return (
      <main className="content">
        <Spring
          from={{ opacity: 0, transform: 'translateY(-20px)' }}
          to={{ opacity: 1, transform: 'translateY(0px)' }}
          config={{ duration: 300 }}
        >
          {props => (
            <section style={props}>
              <Html />
            </section>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: 'translateY(-20px)' }}
          to={{ opacity: 1, transform: 'translateY(0px)' }}
          config={{ delay: 300, duration: 300 }}
        >
          {props => (
            <section style={props}>
              <Css />
            </section>
          )}
        </Spring>
        <Spring from={{ opacity: 0, transform: 'translateY(-20px)' }} to={{ opacity: 1, transform: 'translateY(0px)' }}>
          {props => (
            <section style={props}>
              <Javascript />
            </section>
          )}
        </Spring>
      </main>
    );
  }
}
