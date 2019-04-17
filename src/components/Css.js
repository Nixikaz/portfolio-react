import React from 'react';
import cssimg from '../images/css3.svg';

const Css = () => {
  return (
    <section className="card">
      <div className="card__title">
        <img className="image__css" src={cssimg} alt="css" />
        <h1>CSS</h1>
      </div>
      <div className="card__body">
        <p>
          <abbr title="Cascading Style Sheets">CSS</abbr>3, flexbox and grid, responsive web design, <em>Bootstrap</em>, <em>Materialize</em>, <abbr title="Block, Element, Modifier">BEM</abbr>
        </p>
      </div>
    </section>
  );
};

export default Css;
