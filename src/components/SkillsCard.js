import React, { Component } from 'react';

export default class SkillsCard extends Component {
  render() {
    const { title, img, content } = this.props;
    return (
      <section className="card">
        <div className="card__title">
          <h1>{title}</h1>
        </div>
        <div className="card__body">
          <p>
            <img className="svg--large" src={img} alt={title} />
            {content}
          </p>
        </div>
      </section>
    );
  }
}
