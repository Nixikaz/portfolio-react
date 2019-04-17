import React, { Component } from 'react';
import html from '../images/html5.svg'

export default class Html extends Component {
  componentWillMount() {
    let test = document.getElementsByClassName('image__html');
    console.log(test.style);
  }
  render() {
    return (
      <section className="card">
        <div className="card__title">
        <img className="image__html" src={html} alt="HTML5"/>
          <h1>HTML</h1>
        </div>
        <div className="card__body">
          <p>
            <em><abbr title="HyperText Markup Language">HTML</abbr></em>
            5, <em>Accessibility</em>, and <em>Semantic HTML</em>.
          </p>
        </div>
      </section>
    );
  }
}

