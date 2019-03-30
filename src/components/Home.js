import React, { Component } from 'react';
import html_svg from '../images/html5.svg';
import css3_svg from '../images/css3.svg';
import javascript_svg from '../images/javascript.svg';
import Html from './Html';
import Css from './Css';
import Javascript from './Javascript';

export default class Home extends Component {
  render() {
    return (
      <main className="content">
        <Html title="HTML" img={html_svg} />
        <Css title="CSS" img={css3_svg} />
        <Javascript title="JavaScript" img={javascript_svg} />
      </main>
    );
  }
}
