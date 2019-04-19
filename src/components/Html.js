import React from 'react';
import html from '../images/html5.svg';

const Html = () => {
  return (
    <div className="card">
      <div className="card__title">
        <img className="image__html" src={html} alt="HTML5" />
        <h1>HTML</h1>
      </div>
      <div className="card__body">
        <ul>
          <li><abbr title="HyperText Markup Language">HTML</abbr>5</li>
          <li>Accessibility</li>
          <li>Semantic HTML</li>
        </ul>
      </div>
    </div>
  );
};

export default Html;
