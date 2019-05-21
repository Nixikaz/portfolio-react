import React, { Component } from 'react';
import html from '../images/html5.svg';
import { Spring } from 'react-spring/renderprops';

export default class Html extends Component {
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
        <li>
          <abbr title="HyperText Markup Language">HTML</abbr>5
        </li>
        <li>Accessibility</li>
        <li>Semantic HTML</li>
      </ul>
    ) : (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 500 }}>
        {props => (
          <p style={props}>
            I have over 20 years experience with HTML. I have created web sites using tables for layouts, before CSS was
            a standard. I understand how semantic HTML is not only easier to read, but is also used to improve
            accessability.{' '}
          </p>
        )}
      </Spring>
    );
    return (
      <div className="card card--linked" onClick={this.cardToggle}>
        <div className="card__title">
          <img className="image__html" src={html} alt="HTML5" />
          <h1>HTML</h1>
        </div>
        <div className="card__body">{htmlBody}</div>
      </div>
    );
  }
}
