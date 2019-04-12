import React, { Component } from 'react';

export default class Css extends Component {
  render() {
    const css = 'Cascading Style Sheets';
    return (
      <section className="card card--hover">
        <div className="card__title">
          <h1>CSS</h1>
        </div>
        <div className="card__body background__css">
          <p>
            This website was built using mostly <abbr title={css}>CSS</abbr> grid. I have made layouts using blocks, floats, flexbox, and grid. I am also
            comfortable using psuedo-classes, psuedo-elements, and media queries for responsive web design. I have used{' '}
            <em>Bootstrap</em> and <em>Materialize</em> mostly for prototyping, but I generally prefer to write my own
            custom <abbr title={css}>CSS</abbr>. I have just started to incorporate the <abbr title="Block, Element, Modifier">BEM</abbr> naming convention into my workflow.
          </p>
        </div>
      </section>
    );
  }
}
