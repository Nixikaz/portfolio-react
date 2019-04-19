import React from 'react';
import jsimg from '../images/javascript.svg';

const Javascript = () => {
  return (
    <div className="card">
      <div className="card__title">
        <img className="image__javascript" src={jsimg} alt="Javascript" />
        <h1>JavaScript</h1>
      </div>
      <div className="card__body">
        <ul>
          <li>ES2015+</li>
          <li><abbr title="asynchronous JavaScript and XML">AJAX</abbr></li>
          <li>Promises</li>
          <li>Async/Await</li>
        </ul>
      </div>
    </div>
  );
};

export default Javascript;
