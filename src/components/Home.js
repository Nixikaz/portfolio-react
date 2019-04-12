import React, { Component } from 'react';
import Html from './Html';
import Css from './Css';
import Javascript from './Javascript';

export default class Home extends Component {
  render() {
    return (
      <main className="content">
        <Html />
        <Css />
        <Javascript />
      </main>
    );
  }
}
