import React, { Component } from 'react';

export default class Javascript extends Component {
  render() {
    const { title, img } = this.props;
    return (
      <section className="card">
        <div className="card__title">
          <h1>{title}</h1>
        </div>
        <div className="card__body">
          <p>
            <img className="svg--large" src={img} alt={title} />I have developed personal web pages with HTML on and off
            for over 20 years. I recently got back into HTML because of an opportunity at my current job. They needed
            someone with Front-end Development skills and I had the experience. Over the course of the past two years, I
            have brushed up on the current HTML5 specification. My HTML knowledge includes: <em>Semantic HTML</em>
          </p>
        </div>
      </section>
    );
  }
}
