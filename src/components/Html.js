import React, { Component } from 'react';

export default class Html extends Component {
  render() {
    const { title, img } = this.props;
    return (
      <section className="card">
        <div className="card__title">
          <h1>{title}</h1>
        </div>
        <div className="card__body">
          <img className="svg--large" src={img} alt={title} />I have experience in{' '}
          <abbr title="HyperText Markup Language">HTML</abbr> up to and including the{' '}
          <abbr title="HyperText Markup Language">HTML</abbr>5 specification. Most notably: <em>Accessibility</em> and{' '}
          <em>Semantic HTML</em>.
        </div>
      </section>
    );
  }
}
