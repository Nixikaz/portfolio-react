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
    ) : (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 500 }}>
          {props => (
            <p style={props}>
              I have used CSS for over 10 yeas. I have experience using floats,
              Flexbox, Grid, transitions, media queries,
              and pseudo elements/classes.
            </p>
          )}
        </Spring>
      )
    return (
      <div className="card card--linked" onClick={this.cardToggle}>
        <div className="card__title">
          <img className="image__css" src={cssimg} alt="css" />
          <h1>CSS</h1>
        </div>
        <div className="card__body">{htmlBody}</div>
      </div>
    </div>
  );
};

export default Css;
