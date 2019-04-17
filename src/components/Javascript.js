import React from 'react';
import jsimg from '../images/javascript.svg';

const Javascript = () => {
  return (
    <section className="card">
      <div className="card__title">
        <img className="image__javascript" src={jsimg} alt="Javascript" />
        <h1>JavaScript</h1>
      </div>
      <div className="card__body">
        <p>
          ES2015+, <abbr title="asynchronous JavaScript and XML">AJAX</abbr>, Promises, async/await,
          </p>
      </div>
    </section>
  );
};

export default Javascript;
