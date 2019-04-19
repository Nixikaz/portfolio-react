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
        <p>
          <em>
            <abbr title="HyperText Markup Language">HTML</abbr>
          </em>
          5, <em>Accessibility</em>, and <em>Semantic HTML</em>.
        </p>
      </div>
    </div>
  );
};

export default Html;
