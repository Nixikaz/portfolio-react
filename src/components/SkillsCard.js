import React, { Component } from 'react';

export default class SkillsCard extends Component {
  render() {
    const { title, img, content } = this.props;
    return (
      <section>
        <h1>{title}</h1>
        <img className="svg--large" src={img} alt={title} />
        <p>{content}</p>
      </section>
    );
  }
}
