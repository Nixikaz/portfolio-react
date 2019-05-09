import React, { Component } from 'react';
import Html from './Html';
import Css from './Css';
import Javascript from './Javascript';
import '../images/code_hero.jpg';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__grid">
          <span className="hero__intro">Hi, lorem ipsum</span>
          <span className="hero__firstname">Lorem</span>
          <span className="hero__and">and I am a</span>
          <span className="hero__lastname">Ipsum</span>
          <span className="hero__webdev">Lorem, ipsum dolor sit</span>
        </div>
        <main className="content home__content">
          <section className="card__section">
            <Html />
          </section>
          <section className="card__section">
            <Css />
          </section>
          <section className="card__section">
            <Javascript />
          </section>
        </main>
      </div>
    );
  }
}
