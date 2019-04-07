import React, { Component } from 'react';

export default class Html extends Component {
  render() {
    const { title, img } = this.props;
    return (
      <section className="card card--hover">
        <div className="card__title">
          <h1>{title}</h1>
        </div>
        <div className="card__body">
          <p>
            <img className="svg--large" src={img} alt={title} />I have used{' '}
            <abbr title="HyperText Markup Language">HTML</abbr> on and off for personal projects for over 24 years. I
            have a fairly good understanding up to and including the <abbr title="HyperText Markup Language">HTML</abbr>
            5 specification. Most recently with <em>Accessibility</em> and <em>Semantic HTML</em>.
          </p>
        </div>
      </section>
    );
  }
}
