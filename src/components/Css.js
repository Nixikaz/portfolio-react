import React from 'react';
import cssimg from '../images/css3.svg';

const Css = () => {
  return (
    <div className="card">
      <div className="card__title">
        <img className="image__css" src={cssimg} alt="css" />
        <h1>CSS</h1>
      </div>
      <div className="card__body">
        <ul className="card__list">
          <li>
            <abbr title="Cascading Style Sheets">CSS</abbr>3
          </li>
          <li>Flexbox</li>
          <li>Grid</li>
          <li>
            <abbr title="Block, Element, Modifier">BEM</abbr>
          </li>
          <li>
            <em>Bootstrap</em>
          </li>
          <li>
            <em>Materialize</em>
          </li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </div>
  );
};

export default Css;
