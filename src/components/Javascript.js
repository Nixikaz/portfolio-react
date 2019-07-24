import React, { Component } from 'react';
import jsimg from '../images/javascript.svg';
import { Spring } from 'react-spring/renderprops';

export default class Javascript extends Component {
  state = {
    cardSwitched: true
  };
  cardToggle = () => {
    this.setState(prevState => ({
      cardSwitched: !prevState.cardSwitched
    }));
  };
  render() {
    const htmlBody = this.state.cardSwitched ? (
      <ul>
        <li>ES2015+</li>
        <li>
          <abbr title="asynchronous JavaScript and XML">AJAX</abbr>
        </li>
        <li>React</li>
        <li>jQuery</li>
        <li>D3.js</li>
      </ul>
    ) : (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 500 }}>
        {props => (
          <p style={props}>
            I started learning JavaScript around 2 years ago. It was necessary to learn for a project that I was
            assigned. The project was to create an internal production metrics web site which used AJAX to fetch .xml
            data. This data was parsed and sorted with JavaScript and then displayed in charts using the D3.js library.
          </p>
        )}
      </Spring>
    );
    return (
      <div className="card card--linked" onClick={this.cardToggle}>
        <div className="card__title">
          <img className="image__javascript" src={jsimg} alt="Javascript" />
          <h1>JavaScript</h1>
        </div>
        <div className="card__body">{htmlBody}</div>
        <div className="card__body">
          <ul>
            <li>ES2015+</li>
            <li>
              <abbr title="asynchronous JavaScript and XML">AJAX</abbr>
            </li>
            <li>Promises</li>
            <li>Async/Await</li>
          </ul>
        </div>
      </div>
    );
  }
}
